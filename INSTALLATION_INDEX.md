# 📚 Índice de Guías de Instalación

## 🚀 Elige tu Guía

### 1️⃣ **INICIO RÁPIDO** (Recomendado)
**Archivo:** `README_TERMUX.md`  
**Tiempo:** 5 minutos de lectura  
**Para:** Usuarios que quieren empezar rápido

Contiene:
- 1 comando para instalar todo
- Requisitos mínimos
- Solución de problemas básicos
- Pasos después de instalar

**Comienza aquí si:**
- Quieres instalar rápido
- Tienes experiencia con terminal
- No necesitas explicaciones detalladas

---

### 2️⃣ **GUÍA PASO A PASO DETALLADA**
**Archivo:** `TERMUX_AUTO_INSTALL_GUIDE.md`  
**Tiempo:** 15 minutos de lectura  
**Para:** Usuarios que quieren entender cada paso

Contiene:
- Explicación de cada fase
- Qué verás en pantalla
- Preguntas interactivas
- Consejos de optimización
- Troubleshooting completo

**Comienza aquí si:**
- Eres nuevo en Termux
- Quieres entender qué hace el script
- Necesitas ayuda detallada

---

### 3️⃣ **GUÍA COMPLETA CON CAPTURAS**
**Archivo:** `TERMUX_PASO_A_PASO.md`  
**Tiempo:** 20 minutos de lectura  
**Para:** Usuarios que necesitan máxima claridad

Contiene:
- Descripción de cada paso
- Ejemplos de salida esperada
- Tablas de referencia
- Resumen de comandos
- Mantenimiento post-instalación

**Comienza aquí si:**
- Nunca has usado Termux
- Quieres máxima claridad
- Prefieres guías muy detalladas

---

### 4️⃣ **GUÍA PARA WINDOWS**
**Archivo:** `termux-auto-install.ps1`  
**Tiempo:** 5 minutos  
**Para:** Usuarios en Windows que quieren instalar en Termux

Contiene:
- Menú interactivo
- Verificación de requisitos
- Instrucciones para Termux
- Opción de clonar en Windows

**Comienza aquí si:**
- Usas Windows
- Quieres instalar en tu Android
- Prefieres interfaz gráfica

---

## 🎯 Matriz de Selección

| Situación | Guía Recomendada |
|-----------|-----------------|
| Quiero instalar YA | `README_TERMUX.md` |
| Soy principiante | `TERMUX_PASO_A_PASO.md` |
| Quiero entender todo | `TERMUX_AUTO_INSTALL_GUIDE.md` |
| Uso Windows | `termux-auto-install.ps1` |
| Necesito referencia rápida | `QUICK_START.md` |

---

## 📱 Flujo de Instalación

```
┌─────────────────────────────────────┐
│  Instalar Termux en Android         │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│  Ejecutar 1 comando                 │
│  bash <(curl -s ...)                │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│  Script automatizado hace:          │
│  • Instala dependencias             │
│  • Descarga proyecto                │
│  • Compila aplicación               │
│  • Genera APKs                      │
│  • Instala en dispositivo           │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│  ✅ Aplicación lista para usar      │
└─────────────────────────────────────┘
```

---

## 🔧 Scripts Disponibles

### Script Principal
**`termux-auto-install.sh`** - Automatización completa
- Instala todo automáticamente
- Manejo de errores robusto
- Logs detallados
- Interfaz amigable

### Scripts Individuales (si necesitas ejecutar pasos específicos)
- `compile-admin-termux.sh` - Solo compilar versión Admin
- `compile-manager-termux.sh` - Solo compilar versión Manager
- `install-apk-termux.sh` - Solo instalar APKs
- `setup-and-build-termux.sh` - Setup y compilación

---

## 📋 Checklist de Instalación

- [ ] Termux instalado desde Google Play Store
- [ ] Dispositivo con 2GB+ almacenamiento libre
- [ ] WiFi conectado
- [ ] Dispositivo conectado a corriente
- [ ] Ejecutado: `bash <(curl -s ...)`
- [ ] Respondidas todas las preguntas con "s"
- [ ] Esperado ~100 minutos
- [ ] APKs generados en `dist/apks/`
- [ ] Aplicación instalada en dispositivo
- [ ] Cuenta creada
- [ ] ¡Usando la aplicación!

---

## 🆘 Solución Rápida de Problemas

| Problema | Solución |
|----------|----------|
| "Comando no encontrado" | `cd ~/gestor-creditos-app && bash termux-auto-install.sh` |
| "Espacio insuficiente" | `pkg clean && npm cache clean --force` |
| "npm ERR!" | `npm cache clean --force && npm install` |
| "Compilación lenta" | Usa WiFi, cierra otras apps, conecta a corriente |
| "APKs no generados" | Ver logs: `tail -f ~/gestor-creditos-app/dist/logs/*.log` |

---

## 📞 Soporte

Si necesitas ayuda:

1. **Revisa la guía correspondiente** (ver matriz arriba)
2. **Consulta la sección de troubleshooting**
3. **Ver logs:** `cat ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log`
4. **Contacta soporte:** support@gestorcreditos.com

---

## 🎓 Aprende Más

### Documentación General
- `README.md` - Información del proyecto
- `TERMUX_PASO_A_PASO.md` - Guía completa

### Recursos Externos
- [Termux Wiki](https://wiki.termux.com)
- [React Native Docs](https://reactnative.dev)
- [Expo Documentation](https://docs.expo.dev)

---

## ✨ Resumen

**Solo necesitas:**
1. Instalar Termux
2. Ejecutar 1 comando
3. Esperar ~100 minutos
4. ¡Listo!

**Comando:**
```bash
bash <(curl -s https://raw.githubusercontent.com/albertolider1234-cmd/gestor-creditos-app/master/termux-auto-install.sh)
```

---

**Versión:** 2.0.0  
**Última actualización:** 2026-07-01  
**Plataforma:** Termux (Android)
