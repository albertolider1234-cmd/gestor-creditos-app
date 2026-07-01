# 🚀 GUÍA RÁPIDA: Auto-Instalación en Termux

## ¿Qué es este script?

Un script que **automatiza TODO** el proceso de instalación y compilación en Termux. Solo necesitas ejecutar 1 comando y el script hace el resto.

---

## ⏱️ Tiempo Total

- **Primera vez:** 100-120 minutos
- **Actualizaciones:** 60-80 minutos

---

## 📋 PASO 1: Instalar Termux

1. Abre **Google Play Store**
2. Busca **"Termux"**
3. Instala la aplicación oficial
4. Abre Termux

---

## 📋 PASO 2: Descargar el Script

En Termux, ejecuta:

```bash
# Descargar el script
curl -o termux-auto-install.sh https://raw.githubusercontent.com/albertolider1234-cmd/gestor-creditos-app/master/termux-auto-install.sh

# O si prefieres, clona el repositorio primero
git clone https://github.com/albertolider1234-cmd/gestor-creditos-app.git
cd gestor-creditos-app
```

---

## 📋 PASO 3: ¡EJECUTAR! (El paso más importante)

```bash
bash termux-auto-install.sh
```

**¡Eso es todo!** El script hace lo siguiente automáticamente:

✅ Actualiza Termux  
✅ Instala Node.js, npm, git, curl, wget  
✅ Clona el repositorio de GitHub  
✅ Instala dependencias de npm  
✅ Compila la aplicación  
✅ Genera los APKs  
✅ Verifica que todo esté bien  

---

## 📊 ¿Qué Verás?

### Al Inicio
```
╔════════════════════════════════════════════════════════════════╗
║  GESTOR DE CRÉDITOS Y COBRANZAS - AUTO-INSTALL TERMUX        ║
╚════════════════════════════════════════════════════════════════╝

ℹ️  Versión: 2.0.0
ℹ️  Fecha: 2026-07-01 12:30:45
ℹ️  Log: /home/ubuntu/dist/logs/termux-auto-install-20260701_123045.log

🔍 DETECCIÓN DE ENTORNO
✅ Termux detectado
ℹ️  Prefix: /data/data/com.termux/files/usr
...
```

### Durante la Compilación
```
🔨 COMPILACIÓN DEL PROYECTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏳ La compilación puede tomar 30-60 minutos
❌ NO CIERRES ESTA VENTANA
⚠️  Mantén el dispositivo conectado a corriente
⚠️  Usa WiFi para mejor velocidad

¿Deseas continuar con la compilación? (s/n): s
```

### Al Final
```
✅ INSTALACIÓN COMPLETADA
╔════════════════════════════════════════════════════════════════╗
║                                                               ║
║           ✅ INSTALACIÓN COMPLETADA ✅                        ║
║                                                               ║
╚════════════════════════════════════════════════════════════════╝

ℹ️  Resumen:
  • Proyecto: gestor-creditos-app
  • Ubicación: /data/data/com.termux/files/home/gestor-creditos-app
  • Logs: /data/data/com.termux/files/home/dist/logs/termux-auto-install-20260701_123045.log

✅ APKs generados exitosamente

ℹ️  Próximos pasos:
  1. Instala los APKs en tu dispositivo
  2. Abre la aplicación
  3. Crea una cuenta
  4. ¡Comienza a usar!
```

---

## 🎯 Interacción Durante el Script

El script te hará preguntas en algunos puntos:

### Pregunta 1: ¿Usar proyecto existente?
```
El directorio del proyecto ya existe
Ubicación: /data/data/com.termux/files/home/gestor-creditos-app
¿Deseas usar el proyecto existente? (s/n): 
```
- **s** = Usa el proyecto que ya existe
- **n** = Elimina y descarga de nuevo

### Pregunta 2: ¿Continuar con compilación?
```
⏳ La compilación puede tomar 30-60 minutos
NO CIERRES ESTA VENTANA
Mantén el dispositivo conectado a corriente
Usa WiFi para mejor velocidad

¿Deseas continuar con la compilación? (s/n): 
```
- **s** = Inicia la compilación
- **n** = Salta la compilación

### Pregunta 3: ¿Instalar APKs?
```
¿Deseas instalar los APKs? (s/n): 
```
- **s** = Instala automáticamente
- **n** = Instala manualmente después

---

## 📁 Dónde Están los APKs

Después de compilar, los APKs estarán en:

```
/data/data/com.termux/files/home/gestor-creditos-app/dist/apks/
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

## 🆘 Si Algo Sale Mal

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

### Ver logs detallados
```bash
# Ver últimas líneas del log
tail -100 ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log

# Ver todo el log
cat ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log
```

---

## ⚠️ Requisitos Importantes

✅ **Espacio en disco:** Mínimo 2GB libres  
✅ **RAM:** Mínimo 2GB (4GB recomendado)  
✅ **Batería:** Conectado a corriente  
✅ **Internet:** WiFi recomendado  
✅ **Tiempo:** 100-120 minutos para primera vez  

---

## 💡 Consejos

### Compilación Más Rápida
1. Usa WiFi en lugar de datos móviles
2. Cierra todas las otras aplicaciones
3. Conecta a corriente
4. Usa dispositivo con 4GB+ RAM

### Si Necesitas Actualizar Después
```bash
cd ~/gestor-creditos-app
git pull origin master
bash termux-auto-install.sh
```

### Ver Progreso en Tiempo Real
```bash
# En otra ventana de Termux
tail -f ~/gestor-creditos-app/dist/logs/termux-auto-install-*.log
```

---

## 📱 Después de Instalar

1. **Abre la aplicación** desde el menú de inicio
2. **Crea una cuenta** con tu email
3. **Inicia sesión** con tus credenciales
4. **¡Comienza a usar!**

---

## 🎯 Resumen de Comandos

```bash
# Descargar
git clone https://github.com/albertolider1234-cmd/gestor-creditos-app.git
cd gestor-creditos-app

# ¡EJECUTAR! (Esto hace TODO)
bash termux-auto-install.sh

# Ver APKs generados
ls -lh dist/apks/

# Ver logs
tail -f dist/logs/termux-auto-install-*.log
```

---

**¡Listo! Solo necesitas ejecutar 1 comando y el script hace todo lo demás.**

---

**Versión:** 2.0.0  
**Última actualización:** 2026-07-01  
**Soporte:** Revisa los logs si algo falla
