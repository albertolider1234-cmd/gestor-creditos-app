# 📱 Gestor de Créditos y Cobranzas - Instalación en Termux

## 🚀 Instalación Rápida (1 Comando)

**En tu dispositivo Android con Termux:**

```bash
bash <(curl -s https://raw.githubusercontent.com/albertolider1234-cmd/gestor-creditos-app/master/termux-auto-install.sh)
```

**¡Eso es todo!** El script hace todo automáticamente en ~100 minutos.

---

## 📋 Requisitos Mínimos

- **Dispositivo:** Android 6.0+
- **Almacenamiento:** 2GB libres
- **RAM:** 2GB (4GB recomendado)
- **Conexión:** WiFi recomendado
- **Batería:** Conectado a corriente

---

## ⏱️ Tiempo Estimado

| Fase | Tiempo |
|------|--------|
| Actualizar Termux | 5 min |
| Instalar dependencias | 10 min |
| Descargar proyecto | 5 min |
| npm install | 10 min |
| Compilación | 60-70 min |
| Instalación | 5 min |
| **Total** | **~100 min** |

---

## 🎯 ¿Qué Hace el Script?

El script `termux-auto-install.sh` automatiza:

✅ Detección de Termux  
✅ Actualización de paquetes  
✅ Instalación de Node.js, npm, git  
✅ Clonación del repositorio  
✅ Instalación de dependencias  
✅ Compilación de la aplicación  
✅ Generación de APKs  
✅ Instalación en el dispositivo  

---

## 📱 Pasos Detallados

### Paso 1: Instalar Termux

1. Abre **Google Play Store**
2. Busca **"Termux"**
3. Instala la aplicación oficial
4. Abre Termux

### Paso 2: Ejecutar el Script

En Termux, copia y pega:

```bash
bash <(curl -s https://raw.githubusercontent.com/albertolider1234-cmd/gestor-creditos-app/master/termux-auto-install.sh)
```

### Paso 3: Esperar

El script te mostrará el progreso. **No cierres Termux**.

### Paso 4: Responder Preguntas

El script te hará algunas preguntas:

```
¿Deseas usar el proyecto existente? (s/n): s
¿Deseas continuar con la compilación? (s/n): s
¿Deseas instalar los APKs? (s/n): s
```

Responde **s** (sí) a todas.

### Paso 5: ¡Listo!

Cuando termine, verás:

```
✅ INSTALACIÓN COMPLETADA

ℹ️  Próximos pasos:
  1. Instala los APKs en tu dispositivo
  2. Abre la aplicación
  3. Crea una cuenta
  4. ¡Comienza a usar!
```

---

## 📁 Dónde Están los APKs

Después de compilar, los APKs estarán en:

```
~/gestor-creditos-app/dist/apks/
```

### Ver los APKs

```bash
ls -lh ~/gestor-creditos-app/dist/apks/
```

### Resultado esperado

```
-rw-r--r-- 1 root root 45M Jul  1 12:45 gestor-creditos-admin-2026-07-01_12-45-00.apk
-rw-r--r-- 1 root root 42M Jul  1 12:50 gestor-creditos-guest-2026-07-01_12-50-00.apk
```

---

## 🆘 Solución de Problemas

### Error: "Comando no encontrado"

```bash
# Asegúrate de estar en el directorio correcto
cd ~/gestor-creditos-app

# Intenta de nuevo
bash termux-auto-install.sh
```

### Error: "Espacio insuficiente"

```bash
# Limpia el cache
pkg clean
npm cache clean --force

# Intenta de nuevo
bash termux-auto-install.sh
```

### Error: "npm ERR!"

```bash
# Limpia y reinstala
npm cache clean --force
rm -rf node_modules
npm install
```

### La compilación tarda mucho

- Cierra otras aplicaciones
- Usa WiFi en lugar de datos móviles
- Asegúrate de que el dispositivo esté conectado a corriente
- Espera pacientemente (puede tomar 60-90 minutos)

### Ver logs detallados

```bash
# Ver últimas líneas
tail -100 ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log

# Ver todo el log
cat ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log
```

---

## 💡 Consejos de Optimización

### Compilación Más Rápida

1. **Usa WiFi** en lugar de datos móviles
2. **Cierra otras apps** para liberar RAM
3. **Conecta a corriente** para evitar throttling
4. **Usa dispositivo con 4GB+ RAM** si es posible
5. **Compila en horarios de baja actividad**

### Actualizar Después

```bash
cd ~/gestor-creditos-app
git pull origin master
bash termux-auto-install.sh
```

### Ver Progreso en Tiempo Real

En otra ventana de Termux:

```bash
tail -f ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log
```

---

## 📱 Después de Instalar

1. **Abre la aplicación** desde el menú de inicio
2. **Busca** "Gestor de Créditos"
3. **Toca para abrir**
4. **Crea una cuenta** con tu email
5. **Inicia sesión** con tus credenciales
6. **¡Comienza a usar!**

---

## 🎯 Características de la Aplicación

### Versión Admin
- Acceso completo a todas las funciones
- Gestión de usuarios
- Reportes avanzados
- Configuración del sistema

### Versión Invitado
- Acceso de solo lectura
- Ver deudores
- Ver pagos
- Ver reportes básicos

---

## 🔧 Scripts Disponibles

Si necesitas ejecutar pasos individuales:

```bash
# Solo compilar Admin
bash compile-admin-termux.sh

# Solo compilar Invitado
bash compile-manager-termux.sh

# Instalar APKs
bash install-apk-termux.sh

# Instalación completa
bash termux-auto-install.sh
```

---

## 📞 Soporte

Si tienes problemas:

1. **Revisa los logs:**
   ```bash
   cat ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log
   ```

2. **Verifica requisitos:**
   - 2GB espacio libre
   - WiFi conectado
   - Dispositivo conectado a corriente
   - RAM disponible

3. **Intenta de nuevo:**
   ```bash
   bash termux-auto-install.sh
   ```

---

## 📚 Documentación Adicional

- `TERMUX_AUTO_INSTALL_GUIDE.md` - Guía paso a paso detallada
- `TERMUX_PASO_A_PASO.md` - Guía completa con capturas
- `README.md` - Información general del proyecto

---

## 🎉 ¡Listo!

Solo necesitas ejecutar 1 comando y esperar a que termine.

**Comando final:**
```bash
bash <(curl -s https://raw.githubusercontent.com/albertolider1234-cmd/gestor-creditos-app/master/termux-auto-install.sh)
```

---

**Versión:** 2.0.0  
**Última actualización:** 2026-07-01  
**Plataforma:** Termux (Android)
