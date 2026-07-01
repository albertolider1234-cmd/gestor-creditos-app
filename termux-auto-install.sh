#!/bin/bash

###############################################################################
#
# TERMUX AUTO-INSTALL SCRIPT FOR GESTOR DE CRÉDITOS Y COBRANZAS
#
# Este script automatiza completamente la instalación y compilación en Termux
#
# Uso:
#   bash termux-auto-install.sh
#
# Características:
#   - Detección automática de Termux
#   - Instalación de dependencias
#   - Clonación del repositorio
#   - Instalación de npm
#   - Compilación automática
#   - Generación de APKs
#   - Manejo de errores
#
###############################################################################

set -e

# ============================================================================
# CONFIGURACIÓN Y COLORES
# ============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuración del proyecto
GITHUB_USER="albertolider1234-cmd"
REPO_NAME="gestor-creditos-app"
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
HOME_DIR="$HOME"
PROJECT_DIR="$HOME_DIR/$REPO_NAME"
DIST_DIR="$PROJECT_DIR/dist"
LOGS_DIR="$DIST_DIR/logs"
APKS_DIR="$DIST_DIR/apks"

# Crear directorios
mkdir -p "$LOGS_DIR" "$APKS_DIR"

# Archivo de logs
LOG_FILE="$LOGS_DIR/termux-auto-install-$(date +%Y%m%d_%H%M%S).log"
exec 1> >(tee -a "$LOG_FILE")
exec 2>&1

# ============================================================================
# FUNCIONES DE UTILIDAD
# ============================================================================

print_header() {
    echo ""
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║${NC}  $1"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
}

print_section() {
    echo ""
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

print_step() {
    echo -e "${YELLOW}$1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

check_command() {
    if command -v "$1" &> /dev/null; then
        print_success "$1 está instalado"
        return 0
    else
        print_error "$1 NO está instalado"
        return 1
    fi
}

wait_for_input() {
    echo ""
    read -p "Presiona Enter para continuar..."
    echo ""
}

# ============================================================================
# DETECCIÓN DE ENTORNO
# ============================================================================

detect_environment() {
    print_section "🔍 DETECCIÓN DE ENTORNO"
    
    if [[ -d "$PREFIX" ]]; then
        print_success "Termux detectado"
        print_info "Prefix: $PREFIX"
    else
        print_warning "Prefix de Termux no detectado"
        print_info "Continuando de todas formas..."
    fi
    
    print_info "Home: $HOME_DIR"
    print_info "Proyecto: $PROJECT_DIR"
    print_info "Logs: $LOG_FILE"
    
    # Mostrar espacio disponible
    DISK_SPACE=$(df "$HOME_DIR" | tail -1 | awk '{print $4}')
    print_info "Espacio disponible: $((DISK_SPACE / 1024 / 1024)) GB"
    
    if [[ $DISK_SPACE -lt 2097152 ]]; then
        print_warning "⚠️  Espacio bajo (menos de 2GB disponible)"
        print_warning "La compilación podría fallar"
    fi
}

# ============================================================================
# PERMISOS Y ALMACENAMIENTO
# ============================================================================

setup_storage() {
    print_section "📁 CONFIGURACIÓN DE ALMACENAMIENTO"
    
    if [[ -d "$HOME_DIR/storage" ]]; then
        print_success "Almacenamiento ya configurado"
    else
        print_step "Configurando acceso a almacenamiento..."
        termux-setup-storage 2>&1 || {
            print_warning "No se pudo configurar automáticamente"
            print_info "Por favor, toca 'Allow' en la ventana emergente"
            sleep 3
        }
        print_success "Almacenamiento configurado"
    fi
}

# ============================================================================
# INSTALACIÓN DE DEPENDENCIAS
# ============================================================================

install_system_dependencies() {
    print_section "📦 INSTALACIÓN DE DEPENDENCIAS DEL SISTEMA"
    
    print_step "Actualizando gestor de paquetes..."
    pkg update -y 2>&1 | tail -5
    print_success "Gestor de paquetes actualizado"
    
    print_step "Instalando Node.js..."
    pkg install -y nodejs 2>&1 | tail -3
    print_success "Node.js instalado"
    
    print_step "Instalando git..."
    pkg install -y git 2>&1 | tail -3
    print_success "git instalado"
    
    print_step "Instalando curl..."
    pkg install -y curl 2>&1 | tail -3
    print_success "curl instalado"
    
    print_step "Instalando wget..."
    pkg install -y wget 2>&1 | tail -3
    print_success "wget instalado"
    
    print_step "Instalando build-essential..."
    pkg install -y build-essential 2>&1 | tail -3
    print_success "build-essential instalado"
    
    # Verificar instalaciones
    print_info ""
    print_info "Verificando instalaciones:"
    check_command node
    check_command npm
    check_command git
}

# ============================================================================
# CLONACIÓN DEL REPOSITORIO
# ============================================================================

clone_repository() {
    print_section "📥 CLONACIÓN DEL REPOSITORIO"
    
    if [[ -d "$PROJECT_DIR" ]]; then
        print_warning "El directorio del proyecto ya existe"
        print_info "Ubicación: $PROJECT_DIR"
        
        read -p "¿Deseas usar el proyecto existente? (s/n): " use_existing
        if [[ "$use_existing" == "s" || "$use_existing" == "S" ]]; then
            print_info "Usando proyecto existente"
            return 0
        else
            print_step "Eliminando proyecto existente..."
            rm -rf "$PROJECT_DIR"
            print_success "Proyecto eliminado"
        fi
    fi
    
    print_step "Clonando repositorio desde GitHub..."
    print_info "URL: $REPO_URL"
    
    cd "$HOME_DIR"
    git clone "$REPO_URL" 2>&1 | tail -10
    
    if [[ -d "$PROJECT_DIR" ]]; then
        print_success "Repositorio clonado exitosamente"
        print_info "Ubicación: $PROJECT_DIR"
    else
        print_error "Error al clonar el repositorio"
        return 1
    fi
}

# ============================================================================
# CONFIGURACIÓN DEL PROYECTO
# ============================================================================

setup_project() {
    print_section "⚙️  CONFIGURACIÓN DEL PROYECTO"
    
    cd "$PROJECT_DIR"
    
    print_step "Instalando dependencias de npm..."
    print_warning "Esto puede tomar 5-10 minutos..."
    npm install 2>&1 | tail -20
    print_success "Dependencias instaladas"
    
    print_info ""
    print_step "Verificando instalación de npm..."
    npm list --depth=0 2>&1 | head -15
    
    print_success "Proyecto configurado"
}

# ============================================================================
# COMPILACIÓN
# ============================================================================

compile_project() {
    print_section "🔨 COMPILACIÓN DEL PROYECTO"
    
    cd "$PROJECT_DIR"
    
    print_warning "⏳ La compilación puede tomar 30-60 minutos"
    print_warning "NO CIERRES ESTA VENTANA"
    print_warning "Mantén el dispositivo conectado a corriente"
    print_warning "Usa WiFi para mejor velocidad"
    echo ""
    
    read -p "¿Deseas continuar con la compilación? (s/n): " continue_compile
    if [[ "$continue_compile" != "s" && "$continue_compile" != "S" ]]; then
        print_info "Compilación cancelada"
        return 0
    fi
    
    print_step "Iniciando compilación..."
    
    # Ejecutar script de compilación si existe
    if [[ -f "compile-admin-termux.sh" ]]; then
        print_info "Ejecutando: compile-admin-termux.sh"
        bash compile-admin-termux.sh 2>&1 | tail -50
        print_success "Compilación de Admin completada"
    else
        print_warning "Script compile-admin-termux.sh no encontrado"
        print_info "Intentando compilación manual..."
        
        # Compilación manual con eas
        npm run build 2>&1 | tail -50
        print_success "Compilación completada"
    fi
}

# ============================================================================
# VERIFICACIÓN DE APKs
# ============================================================================

verify_apks() {
    print_section "✔️  VERIFICACIÓN DE APKs"
    
    if [[ ! -d "$APKS_DIR" ]]; then
        print_error "Directorio de APKs no encontrado: $APKS_DIR"
        return 1
    fi
    
    APK_COUNT=$(find "$APKS_DIR" -name "*.apk" -type f 2>/dev/null | wc -l)
    
    if [[ $APK_COUNT -gt 0 ]]; then
        print_success "$APK_COUNT APK(s) generado(s)"
        echo ""
        print_info "Archivos APK:"
        ls -lh "$APKS_DIR"/*.apk 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
        return 0
    else
        print_error "No se encontraron archivos APK"
        print_info "Directorio: $APKS_DIR"
        print_info "Contenido:"
        ls -la "$APKS_DIR" 2>/dev/null || echo "  (vacío)"
        return 1
    fi
}

# ============================================================================
# INSTALACIÓN DE APKs
# ============================================================================

install_apks() {
    print_section "📱 INSTALACIÓN DE APKs"
    
    if ! verify_apks; then
        print_warning "No hay APKs para instalar"
        return 1
    fi
    
    read -p "¿Deseas instalar los APKs? (s/n): " install_choice
    if [[ "$install_choice" != "s" && "$install_choice" != "S" ]]; then
        print_info "Instalación cancelada"
        return 0
    fi
    
    # Intentar instalar con adb si está disponible
    if command -v adb &> /dev/null; then
        print_step "Instalando APKs con adb..."
        for apk in "$APKS_DIR"/*.apk; do
            if [[ -f "$apk" ]]; then
                print_info "Instalando: $(basename "$apk")"
                adb install "$apk" 2>&1 | grep -E "Success|Failure|Error" || true
            fi
        done
        print_success "Instalación completada"
    else
        print_warning "adb no está disponible"
        print_info "Instalación manual:"
        print_info "1. Abre el administrador de archivos"
        print_info "2. Navega a: $APKS_DIR"
        print_info "3. Toca cada APK para instalar"
    fi
}

# ============================================================================
# RESUMEN FINAL
# ============================================================================

print_summary() {
    print_header "✅ INSTALACIÓN COMPLETADA"
    
    echo ""
    print_info "Resumen:"
    echo "  • Proyecto: $REPO_NAME"
    echo "  • Ubicación: $PROJECT_DIR"
    echo "  • Logs: $LOG_FILE"
    echo ""
    
    if verify_apks; then
        echo ""
        print_success "APKs generados exitosamente"
        echo ""
        print_info "Próximos pasos:"
        echo "  1. Instala los APKs en tu dispositivo"
        echo "  2. Abre la aplicación"
        echo "  3. Crea una cuenta"
        echo "  4. ¡Comienza a usar!"
    else
        print_warning "No se generaron APKs"
        print_info "Revisa los logs para más información:"
        echo "  cat $LOG_FILE"
    fi
    
    echo ""
}

# ============================================================================
# MANEJO DE ERRORES
# ============================================================================

handle_error() {
    print_error "Error en la línea $1"
    print_info "Revisa el log: $LOG_FILE"
    exit 1
}

trap 'handle_error $LINENO' ERR

# ============================================================================
# EJECUCIÓN PRINCIPAL
# ============================================================================

main() {
    print_header "GESTOR DE CRÉDITOS Y COBRANZAS - AUTO-INSTALL TERMUX"
    
    print_info "Versión: 2.0.0"
    print_info "Fecha: $(date '+%Y-%m-%d %H:%M:%S')"
    print_info "Log: $LOG_FILE"
    
    # Ejecutar pasos
    detect_environment
    setup_storage
    install_system_dependencies
    clone_repository
    setup_project
    compile_project
    verify_apks
    install_apks
    print_summary
    
    print_success "¡Proceso completado!"
    echo ""
}

# Ejecutar función principal
main
exit 0
