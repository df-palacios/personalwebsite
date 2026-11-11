set -euo pipefail

PUBLIC_KEY="$(dirname "$0")/ssh/desktop-jeqj48d.pub"

echo "Instalando clave SSH..."

ssh-keygen -lf "$PUBLIC_KEY" >/dev/null

mkdir -p "$HOME/.ssh"
chmod 700 "$HOME/.ssh"

touch "$HOME/.ssh/authorized_keys"
chmod 600 "$HOME/.ssh/authorized_keys"

if ! grep -qxF "$(cat "$PUBLIC_KEY")" "$HOME/.ssh/authorized_keys"; then
    cat "$PUBLIC_KEY" >> "$HOME/.ssh/authorized_keys"
fi

echo "Clave SSH instalada correctamente."