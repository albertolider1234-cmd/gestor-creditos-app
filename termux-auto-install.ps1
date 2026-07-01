# ============================================================================
# TERMUX AUTO-INSTALL SCRIPT FOR GESTOR DE CRÉDITOS Y COBRANZAS (Windows)
#
# Este script automatiza la instalación en Termux desde Windows
#
# Uso:
#   powershell -ExecutionPolicy Bypass -File termux-auto-install.ps1
#
# ============================================================================

# Configuración
$GITHUB_USER = "albertolider1234-cmd"
$REPO_NAME = "gestor-creditos-app"
$REPO_URL = "https://github.com/$GITHUB_USER/$REPO_NAME.git"

# Colores
$Colors = @{
    Green = "Green"
    Red = "Red"
    Yellow = "Yellow"
    Cyan = "Cyan"
    Blue = "Blue"
}

# ============================================================================
# FUNCIONES
# ============================================================================

function Print-Header {
    param([string]$Message)
    Write-Host ""
    Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor $Colors.Blue
    Write-Host "║  $Message" -ForegroundColor $Colors.Blue
    Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor $Colors.Blue
    Write-Host ""
}

function Print-Section {
    param([string]$Message)
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor $Colors.Cyan
    Write-Host $Message -ForegroundColor $Colors.Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor $Colors.Cyan
    Write-Host ""
}

function Print-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor $Colors.Green
}

function Print-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor $Colors.Red
}

function Print-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor $Colors.Blue
}

function Print-Warning {
    param([string]$Message)
    Write-Host "⚠️  $Message" -ForegroundColor $Colors.Yellow
}

function Print-Step {
    param([string]$Message)
    Write-Host $Message -ForegroundColor $Colors.Yellow
}

# ============================================================================
# VERIFICACIÓN DE REQUISITOS
# ============================================================================

function Check-Requirements {
    Print-Section "✔️  VERIFICACIÓN DE REQUISITOS"
    
    $missing = @()
    
    # Verificar git
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        $missing += "git"
    } else {
        Print-Success "git está instalado"
    }
    
    # Verificar node (opcional para Windows)
    if (Get-Command node -ErrorAction SilentlyContinue) {
        Print-Success "Node.js está instalado"
    } else {
        Print-Warning "Node.js no está instalado (opcional para Windows)"
    }
    
    if ($missing.Count -gt 0) {
        Print-Error "Falta instalar: $($missing -join ', ')"
        Print-Info "Descarga desde:"
        Print-Info "  git: https://git-scm.com/download/win"
        Print-Info "  Node.js: https://nodejs.org/"
        return $false
    }
    
    Print-Success "Todos los requisitos están satisfechos"
    return $true
}

# ============================================================================
# INSTALACIÓN EN TERMUX
# ============================================================================

function Install-In-Termux {
    Print-Section "📱 INSTALACIÓN EN TERMUX"
    
    Print-Info "Este script te guiará para instalar en Termux"
    Print-Info ""
    Print-Info "Pasos:"
    Print-Info "1. Abre Termux en tu dispositivo Android"
    Print-Info "2. Ejecuta este comando:"
    Write-Host ""
    Write-Host "bash <(curl -s https://raw.githubusercontent.com/$GITHUB_USER/$REPO_NAME/master/termux-auto-install.sh)" -ForegroundColor $Colors.Green
    Write-Host ""
    Print-Info ""
    Print-Info "O descarga el script primero:"
    Write-Host ""
    Write-Host "curl -o termux-auto-install.sh https://raw.githubusercontent.com/$GITHUB_USER/$REPO_NAME/master/termux-auto-install.sh" -ForegroundColor $Colors.Green
    Write-Host "bash termux-auto-install.sh" -ForegroundColor $Colors.Green
    Write-Host ""
}

# ============================================================================
# CLONAR REPOSITORIO (OPCIONAL)
# ============================================================================

function Clone-Repository {
    Print-Section "📥 CLONACIÓN DEL REPOSITORIO (OPCIONAL)"
    
    Print-Info "Si deseas trabajar con el código en Windows:"
    Print-Info ""
    Write-Host "git clone $REPO_URL" -ForegroundColor $Colors.Green
    Write-Host "cd $REPO_NAME" -ForegroundColor $Colors.Green
    Write-Host ""
    
    $clone = Read-Host "¿Deseas clonar el repositorio ahora? (s/n)"
    
    if ($clone -eq "s" -or $clone -eq "S") {
        Print-Step "Clonando repositorio..."
        git clone $REPO_URL
        
        if ($LASTEXITCODE -eq 0) {
            Print-Success "Repositorio clonado"
            Set-Location $REPO_NAME
        } else {
            Print-Error "Error al clonar el repositorio"
            return $false
        }
    }
    
    return $true
}

# ============================================================================
# INFORMACIÓN ÚTIL
# ============================================================================

function Show-Useful-Info {
    Print-Section "💡 INFORMACIÓN ÚTIL"
    
    Print-Info "Comandos útiles en Termux:"
    Write-Host ""
    Write-Host "# Ver APKs generados" -ForegroundColor $Colors.Yellow
    Write-Host "ls -lh ~/gestor-creditos-app/dist/apks/" -ForegroundColor $Colors.Green
    Write-Host ""
    Write-Host "# Ver logs de compilación" -ForegroundColor $Colors.Yellow
    Write-Host "tail -f ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log" -ForegroundColor $Colors.Green
    Write-Host ""
    Write-Host "# Actualizar proyecto" -ForegroundColor $Colors.Yellow
    Write-Host "cd ~/gestor-creditos-app && git pull origin master && bash termux-auto-install.sh" -ForegroundColor $Colors.Green
    Write-Host ""
}

# ============================================================================
# MENÚ PRINCIPAL
# ============================================================================

function Show-Menu {
    Print-Header "GESTOR DE CRÉDITOS Y COBRANZAS - AUTO-INSTALL"
    
    Print-Info "Versión: 2.0.0"
    Print-Info "Fecha: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    Print-Info ""
    
    # Verificar requisitos
    if (-not (Check-Requirements)) {
        Print-Error "Por favor instala los requisitos faltantes"
        exit 1
    }
    
    # Menú
    Print-Section "🎯 OPCIONES"
    
    Write-Host "1. Instalar en Termux (recomendado)" -ForegroundColor $Colors.Green
    Write-Host "2. Clonar repositorio en Windows" -ForegroundColor $Colors.Green
    Write-Host "3. Ver información útil" -ForegroundColor $Colors.Green
    Write-Host "4. Salir" -ForegroundColor $Colors.Green
    Write-Host ""
    
    $choice = Read-Host "Selecciona una opción (1-4)"
    
    switch ($choice) {
        "1" {
            Install-In-Termux
            Show-Menu
        }
        "2" {
            Clone-Repository
            Show-Menu
        }
        "3" {
            Show-Useful-Info
            Show-Menu
        }
        "4" {
            Print-Success "¡Hasta luego!"
            exit 0
        }
        default {
            Print-Error "Opción inválida"
            Show-Menu
        }
    }
}

# ============================================================================
# EJECUCIÓN PRINCIPAL
# ============================================================================

# Ejecutar menú
Show-Menu
