# Gestor de Créditos y Cobranzas - Aplicación Android

Una aplicación móvil profesional para gestión integral de pagos a crédito, deudas y deudores con capacidades multi-usuario, control administrativo, análisis de datos avanzado y sistema de seguridad robusto.

## Características Principales

### 1. **Sistema de Autenticación y Roles**
- Autenticación segura con JWT
- Tres roles: Admin (creador), Manager, User (invitado)
- Permisos granulares configurables por rol
- Historial de acceso y auditoría de cambios

### 2. **Gestión de Deudores**
- CRUD completo de deudores
- Información de contacto, deuda total acumulada
- Estado de crédito (activo, suspendido, bloqueado)
- Historial de transacciones por deudor

### 3. **Módulo de Pagos a Crédito**
- Crear, editar y eliminar pagos
- Registrar pagos realizados
- Cálculo automático de intereses
- Estados de pago (pendiente, parcial, pagado, vencido, atrasado)

### 4. **Módulo de Deudas**
- Crear deudas y registrar pagos parciales
- Cálculo automático de saldo pendiente
- Proyección de fecha de pago completo
- Historial de movimientos

### 5. **Adjunción de Comprobantes de Pago**
- Carga de archivos PDF
- Almacenamiento seguro en S3
- Visualización de PDF en la app
- Descarga de comprobantes

### 6. **Dashboard Principal**
- Resumen de deudas totales
- Gráficos por deudor
- Alertas de pagos vencidos
- Próximos vencimientos (3 días)

### 7. **Módulo de Reportes**
- Gráficos interactivos
- Filtros por período y deudor
- Exportación a CSV y PDF

### 8. **Gestión de Usuarios**
- Invitar usuarios por email
- Asignar roles a usuarios
- Gestionar permisos

### 9. **Notificaciones Automáticas**
- Alertas de pagos próximos a vencer (3 días antes)
- Alertas de pagos vencidos
- Notificaciones de cambios de permisos

### 10. **Diseño UI/UX Profesional**
- Paleta de colores: Azul, Gris, Verde
- Tema claro y oscuro
- Responsive design
- Navegación intuitiva

## Requisitos del Sistema

- **Node.js**: v18 o superior
- **npm**: v9 o superior
- **Android Studio**: Para compilar APK
- **Java Development Kit (JDK)**: v11 o superior

## Instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno**
   Crea un archivo `.env`:
   ```
   EXPO_PUBLIC_API_URL=http://localhost:3000/api
   ```

## Desarrollo

**Iniciar en modo desarrollo:**
```bash
npm start
```

**Compilar para Android:**
```bash
npm run android
```

**Compilar para iOS:**
```bash
npm run ios
```

## Compilación para Producción

**Generar APK:**
```bash
eas build --platform android
```

## Estructura del Proyecto

```
gestor-creditos-app/
├── src/
│   ├── screens/           # Pantallas
│   ├── components/        # Componentes
│   ├── contexts/          # Contextos de React
│   ├── services/          # Servicios de API
│   ├── types/             # Tipos TypeScript
│   ├── constants/         # Constantes
│   └── App.tsx            # Componente principal
├── app.json               # Configuración Expo
├── package.json           # Dependencias
└── index.tsx              # Punto de entrada
```

## Paleta de Colores

- **Primario**: `#0066CC` (Azul)
- **Secundario**: `#00A86B` (Verde)
- **Acento**: `#FF6B6B` (Rojo)
- **Fondo**: `#FFFFFF` (Blanco)
- **Superficie**: `#F5F5F5` (Gris claro)

## Seguridad

- Autenticación JWT
- Almacenamiento seguro de tokens
- Validación de permisos
- Encriptación de datos
- Auditoría de cambios

## Licencia

MIT

## Soporte

Para soporte: support@gestorcreditos.com
