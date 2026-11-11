
#!/usr/bin/env bash
set -Eeuo pipefail

# =====================================================
# df-server - Configuracion Wi-Fi persistente
#
# Prioridad:
# 1. APARTAESTUDIOS_5G
# 2. APARTAESTUDIOS_2.4G
# 3. TP-LINK_97EE
#
# Ethernet permanece independiente.
# No modifica Netplan ni systemd-networkd.
# =====================================================

WIFI_IF="wlp2s0"

if [[ "$EUID" -ne 0 ]]; then
    echo "Ejecuta: sudo bash scripts/configure-wifi.sh"
    exit 1
fi

command -v nmcli >/dev/null || {
    echo "ERROR: NetworkManager no esta disponible."
    exit 1
}

nmcli device status | grep -q "$WIFI_IF" || {
    echo "ERROR: No existe la interfaz $WIFI_IF."
    exit 1
}

echo "Configuracion de redes Wi-Fi"
echo

read -rsp "Contrasena APARTAESTUDIOS_5G: " PASS_5G
echo
read -rsp "Contrasena APARTAESTUDIOS_2.4G: " PASS_24
echo
read -rsp "Contrasena TP-LINK_97EE: " PASS_TP
echo

configure_wifi() {
    local name="$1"
    local ssid="$2"
    local band="$3"
    local password="$4"
    local priority="$5"

    if nmcli -t -f NAME connection show | grep -Fxq "$name"; then
        echo "Actualizando perfil: $name"
    else
        echo "Creando perfil: $name"
        nmcli connection add type wifi \
            ifname "$WIFI_IF" \
            con-name "$name" \
            ssid "$ssid"
    fi

    nmcli connection modify "$name" \
        connection.interface-name "$WIFI_IF" \
        connection.autoconnect yes \
        connection.autoconnect-priority "$priority" \
        connection.permissions "" \
        802-11-wireless.ssid "$ssid" \
        802-11-wireless.band "$band" \
        802-11-wireless.cloned-mac-address permanent \
        wifi-sec.key-mgmt wpa-psk \
        wifi-sec.psk "$password" \
        wifi-sec.psk-flags 0 \
        ipv4.route-metric 600 \
        ipv6.route-metric 600
}

configure_wifi \
    "APARTAESTUDIOS_5G" \
    "APARTAESTUDIOS_5G" \
    "a" "$PASS_5G" 30

configure_wifi \
    "APARTAESTUDIOS_2.4G" \
    "APARTAESTUDIOS_2.4G" \
    "bg" "$PASS_24" 20

configure_wifi \
    "TP-LINK_97EE" \
    "TP-LINK_97EE" \
    "" "$PASS_TP" 10

unset PASS_5G PASS_24 PASS_TP

nmcli radio wifi on

echo
echo "Configuracion terminada."
echo
echo "=== PERFILES WIFI ==="

nmcli -f NAME,AUTOCONNECT,AUTOCONNECT-PRIORITY \
    connection show

echo
echo "=== DISPOSITIVOS ==="

nmcli device status

echo
echo "=== REDES VISIBLES ==="

nmcli -f IN-USE,SSID,SIGNAL dev wifi list

echo
echo "=== RUTAS ==="

ip route

echo
echo "Ethernet no fue modificado."
echo "No se reinicio ni desconecto ninguna interfaz."
