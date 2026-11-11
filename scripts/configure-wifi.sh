
#!/usr/bin/env bash
set -Eeuo pipefail

# ==========================================================
# Wi-Fi configuration for df-server (Ubuntu Server)
# Preferred order:
# 1. APARTAESTUDIOS_5G
# 2. APARTAESTUDIOS_2.4G
# 3. TP-LINK_97EE
#
# Ethernet remains enabled and has route preference.
# Passwords are never stored in this script.
# ==========================================================

WIFI_IF="wlp2s0"

# Check root permissions
if [[ "$EUID" -ne 0 ]]; then
    echo "Ejecuta el script con: sudo bash configure-wifi.sh"
    exit 1
fi

# Check NetworkManager
if ! command -v nmcli >/dev/null 2>&1; then
    echo "ERROR: NetworkManager (nmcli) no está instalado."
    exit 1
fi

if ! nmcli device status | grep -q "$WIFI_IF"; then
    echo "ERROR: No se encontró la interfaz $WIFI_IF."
    echo "Interfaces disponibles:"
    nmcli device status
    exit 1
fi

# Request passwords without displaying them
echo "Configuración de las redes Wi-Fi."
echo "Las contraseñas se guardarán en NetworkManager, no en Git."
echo

read -rsp "Contraseña de APARTAESTUDIOS_5G: " PASS_5G
echo
read -rsp "Contraseña de APARTAESTUDIOS_2.4G: " PASS_24
echo
read -rsp "Contraseña de TP-LINK_97EE: " PASS_TP
echo

# Find or create a connection profile
ensure_wifi_profile() {
    local name="$1"
    local ssid="$2"
    local band="$3"
    local password="$4"
    local priority="$5"

    echo "Configurando $name..."

    if nmcli -t -f NAME connection show | grep -Fxq "$name"; then
        nmcli connection modify "$name" \
            connection.type 802-11-wireless \
            802-11-wireless.ssid "$ssid"
    else
        nmcli connection add type wifi \
            ifname "$WIFI_IF" \
            con-name "$name" \
            ssid "$ssid"
    fi

    nmcli connection modify "$name" \
        connection.interface-name "$WIFI_IF" \
        connection.permissions "" \
        connection.autoconnect yes \
        connection.autoconnect-priority "$priority" \
        ipv4.route-metric 600 \
        ipv6.route-metric 600 \
        802-11-wireless.ssid "$ssid" \
        802-11-wireless.band "$band" \
        wifi-sec.key-mgmt wpa-psk \
        wifi-sec.psk "$password" \
        wifi-sec.psk-flags 0
}

# Configure networks in priority order
ensure_wifi_profile \
    "APARTAESTUDIOS_5G" \
    "APARTAESTUDIOS_5G" \
    "a" "$PASS_5G" 30

ensure_wifi_profile \
    "APARTAESTUDIOS_2.4G" \
    "APARTAESTUDIOS_2.4G" \
    "bg" "$PASS_24" 20

ensure_wifi_profile \
    "TP-LINK_97EE" \
    "TP-LINK_97EE" \
    "" "$PASS_TP" 10

# Clear password variables
unset PASS_5G PASS_24 PASS_TP

# Enable Wi-Fi radio
nmcli radio wifi on

# Ethernet: automatic connection and preferred default route
echo
echo "Configurando perfiles Ethernet..."

while IFS=: read -r name type; do
    if [[ "$type" == "802-3-ethernet" ]]; then
        echo "Ethernet: $name"
        nmcli connection modify "$name" \
            connection.autoconnect yes \
            ipv4.route-metric 100 \
            ipv6.route-metric 100
    fi
done < <(nmcli -t -f NAME,TYPE connection show)

echo
echo "=========================================="
echo "Configuración completada correctamente."
echo "=========================================="
echo
echo "Prioridad Wi-Fi:"
nmcli -f NAME,AUTOCONNECT,AUTOCONNECT-PRIORITY connection show
echo
echo "Estado de dispositivos:"
nmcli device status
echo
echo "Ethernet conserva prioridad de ruta (métrica 100)."
echo "Wi-Fi utiliza métrica 600."
echo "No se ha desconectado ninguna interfaz."
