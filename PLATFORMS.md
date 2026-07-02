# 🌐 Guía de Plataformas - Gestor de Créditos App

Esta aplicación React Native con Expo está diseñada para ejecutarse en **Windows** y **Termux/Linux**. Esta guía te mostrará cómo compilar y ejecutar la aplicación en cada plataforma.

---

## 📋 Tabla de Contenidos

- [Windows](#-windows)
- [Termux/Linux](#-termuxlinux)
- [Requisitos Generales](#-requisitos-generales)
- [Solución de Problemas](#-solución-de-problemas)

---

## 🪟 Windows

### Requisitos Previos

- **Node.js** (v16 o superior) - [Descargar](https://nodejs.org/)
- **npm** o **yarn** (incluido con Node.js)
- **Git** - [Descargar](https://git-scm.com/)
- **PowerShell** (incluido en Windows)

### Instalación Rápida en Windows

1. **Clonar el repositorio:**
   ```powershell
   git clone https://github.com/albertolider1234-cmd/gestor-creditos-app.git
   cd gestor-creditos-app
   ```

2. **Instalar dependencias:**
   ```powershell
   npm install
   ```

3. **Compilar la aplicación:**
   ```powershell
   .\compile-windows.ps1
   ```

4. **Ejecutar en desarrollo:**
   ```powershell
   npm start
   # O usar Expo
   npx expo start
   ```

### Compilar APK en Windows

Para generar un APK compilable en Windows:

```powershell
# Asegúrate de tener EAS CLI instalado
npm install -g eas-cli

# Compilar APK
eas build --platform android --local
```

### Scripts Disponibles en Windows

```powershell
# Iniciar servidor de desarrollo
npm start

# Limpiar caché y reinstalar
npm run clean

# Compilar versión de producción
npm run build
```

---

## 🐧 Termux/Linux

### Requisitos Previos (Termux)

- **Termux** instalado en Android
- **Node.js** (v16 o superior)
- **Git**
- **Bash**

### Instalación en Termux

1. **Actualizar paquetes:**
   ```bash
   pkg update && pkg upgrade
   ```

2. **Instalar Node.js:**
   ```bash
   pkg install nodejs
   ```

3. **Clonar repositorio:**
   ```bash
   git clone https://github.com/albertolider1234-cmd/gestor-creditos-app.git
   cd gestor-creditos-app
   ```

4. **Instalar dependencias:**
   ```bash
   npm install
   ```

5. **Ejecutar en desarrollo:**
   ```bash
   npm start
   ```

### Compilar APK en Termux

Para generar un APK desde Termux:

```bash
# Usar el script automatizado
bash compile-termux.sh

# O compilar manualmente
eas build --platform android --local
```

### Scripts Disponibles en Linux/Termux

```bash
# Instalación automática completa
bash termux-auto-install.sh

# Compilar APK
bash compile-termux.sh
bash compile-admin-termux.sh
bash compile-manager-termux.sh

# Instalar APK generado
bash install-apk-termux.sh
bash install-to-termux.sh
```

---

## ⚙️ Requisitos Generales

### Node.js y npm

Ambas plataformas requieren Node.js. Verifica tu versión:

```bash
# Windows (PowerShell)
node --version
npm --version

# Linux/Termux (Bash)
node --version
npm --version
```

**Versiones soportadas:**
- Node.js: 16.x, 18.x, 20.x (recomendado 18.x o superior)
- npm: 8.x o superior

### Dependencias del Proyecto

El proyecto utiliza:
- **React Native** - Framework principal
- **Expo** - Herramientas de desarrollo
- **TypeScript** - Tipado estático
- **React Router** - Navegación

Para instalar todas las dependencias:

```bash
npm install
```

---

## 🏗️ Estructura del Proyecto

```
gestor-creditos-app/
├── src/                    # Código fuente
├── assets/                 # Imágenes y recursos
├── compile-windows.ps1     # Script de compilación Windows
├── compile-termux.sh       # Script de compilación Termux
├── package.json            # Dependencias del proyecto
├── app.json                # Configuración Expo
└── tsconfig.json           # Configuración TypeScript
```

---

## 🚀 Comando Rápido

### Windows
```powershell
git clone https://github.com/albertolider1234-cmd/gestor-creditos-app.git && cd gestor-creditos-app && npm install && .\compile-windows.ps1
```

### Termux/Linux
```bash
git clone https://github.com/albertolider1234-cmd/gestor-creditos-app.git && cd gestor-creditos-app && npm install && bash compile-termux.sh
```

---

## 🔧 Solución de Problemas

### Problema: "node: command not found"

**Solución:**
- **Windows:** Descargar Node.js desde [nodejs.org](https://nodejs.org/)
- **Termux:** `pkg install nodejs`

### Problema: "Permission denied" en scripts bash

**Solución:**
```bash
chmod +x *.sh
bash script-name.sh
```

### Problema: Error de espacio en disco

**Solución:**
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules
rm -rf node_modules
npm install
```

### Problema: Puerto 8081 en uso

**Solución:**
```bash
# Cambiar puerto
npx expo start --port 8082
```

---

## 📞 Soporte

Para reportar problemas o solicitar ayuda:
- 📧 Abre un Issue en el repositorio
- 💬 Revisa la documentación en el README.md

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

---

**Última actualización:** 2026-07-02  
**Versión:** 1.0.0
