
#!/usr/bin/env bash
set -Eeuo pipefail

USER_NAME="diego"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
KEY_FILE="$SCRIPT_DIR/ssh/desktop-jeqj48d.pub"

echo "======================================"
echo "     RECUPERACION SSH - DF SERVER"
echo "======================================"

if [[ "$(id -un)" != "$USER_NAME" ]]; then
    echo "ERROR: ejecuta el script como diego."
    exit 1
fi

if [[ ! -f "$KEY_FILE" ]]; then
    echo "ERROR: no se encuentra la clave publica."
    exit 1
fi

echo "[1/5] Validando clave publica..."
ssh-keygen -lf "$KEY_FILE"

echo
echo "[2/5] Comprobando permisos administrativos..."
sudo -v

HOME_DIR="$(getent passwd "$USER_NAME" | cut -d: -f6)"
USER_GROUP="$(id -gn "$USER_NAME")"
USER_ID="$(id -u "$USER_NAME")"

echo
echo "[3/5] Identificando configuracion SSH..."

SSHD_CONFIG="$(sudo /usr/sbin/sshd -T)"
AUTH_SPEC="$(awk '$1=="authorizedkeysfile" {print $2; exit}' <<< "$SSHD_CONFIG")"

if [[ -z "$AUTH_SPEC" || "$AUTH_SPEC" == "none" ]]; then
    echo "ERROR: SSH no tiene AuthorizedKeysFile habilitado."
    exit 1
fi

AUTH_SPEC="${AUTH_SPEC//%h/$HOME_DIR}"
AUTH_SPEC="${AUTH_SPEC//%u/$USER_NAME}"
AUTH_SPEC="${AUTH_SPEC//%U/$USER_ID}"

if [[ "$AUTH_SPEC" != /* ]]; then
    AUTH_SPEC="$HOME_DIR/$AUTH_SPEC"
fi

echo "Archivo autorizado: $AUTH_SPEC"

echo
echo "[4/5] Instalando clave y corrigiendo permisos..."

sudo install -d -m 700 -o "$USER_NAME" -g "$USER_GROUP" "$HOME_DIR/.ssh"
sudo touch "$AUTH_SPEC"
sudo chown "$USER_NAME:$USER_GROUP" "$AUTH_SPEC"
sudo chmod 600 "$AUTH_SPEC"
sudo chmod go-w "$HOME_DIR"

KEY_LINE="$(tr -d '\r' < "$KEY_FILE" | awk 'NF {print; count++} END {if (count != 1) exit 1}')"

if ! sudo grep -Fqx -- "$KEY_LINE" "$AUTH_SPEC"; then
    printf '%s\n' "$KEY_LINE" | sudo tee -a "$AUTH_SPEC" >/dev/null
fi

sudo chown "$USER_NAME:$USER_GROUP" "$AUTH_SPEC"
sudo chmod 600 "$AUTH_SPEC"

echo
echo "[5/5] Verificando configuracion..."

sudo /usr/sbin/sshd -t

echo "Configuracion efectiva:"
grep -E '^(pubkeyauthentication|authorizedkeysfile|strictmodes|passwordauthentication) ' <<< "$SSHD_CONFIG"

echo
echo "Huella digital instalada:"
sudo ssh-keygen -lf "$AUTH_SPEC"

echo
echo "Estado del servicio SSH:"
systemctl is-active ssh || true

echo
echo "Ultimos registros de autenticacion:"
sudo journalctl -u ssh -n 12 --no-pager || true

echo
echo "======================================"
echo "        REVISION COMPLETADA"
echo "======================================"
echo "No se ha habilitado autenticacion por contraseña."
