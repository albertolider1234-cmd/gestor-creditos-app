// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'Gestor de Créditos',
  version: '1.0.0',
  apiBaseUrl: 'http://localhost:3000/api',
};

// Colores de la paleta
export const COLORS = {
  primary: '#0066CC', // Azul
  secondary: '#00A86B', // Verde
  accent: '#FF6B6B', // Rojo
  background: '#FFFFFF',
  surface: '#F5F5F5',
  text: '#1A1A1A',
  textSecondary: '#666666',
  border: '#E0E0E0',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  info: '#2196F3',
};

// Colores para modo oscuro
export const DARK_COLORS = {
  primary: '#0066CC',
  secondary: '#00A86B',
  accent: '#FF6B6B',
  background: '#121212',
  surface: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#B0B0B0',
  border: '#333333',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  info: '#2196F3',
};

// Estados de pago
export const PAYMENT_STATES = {
  PENDING: 'pendiente',
  PARTIAL: 'parcial',
  PAID: 'pagado',
  OVERDUE: 'vencido',
  LATE: 'atrasado',
};

// Estados de crédito
export const CREDIT_STATES = {
  ACTIVE: 'activo',
  SUSPENDED: 'suspendido',
  BLOCKED: 'bloqueado',
};

// Roles de usuario
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
};

// Estados de usuario
export const USER_STATUS = {
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  BANNED: 'banned',
};

// Métodos de pago
export const PAYMENT_METHODS = {
  CASH: 'efectivo',
  TRANSFER: 'transferencia',
  CHECK: 'cheque',
  OTHER: 'otro',
};

// Tipos de notificación
export const NOTIFICATION_TYPES = {
  PAYMENT_DUE: 'payment_due',
  PAYMENT_OVERDUE: 'payment_overdue',
  PAYMENT_RECEIVED: 'payment_received',
  USER_INVITED: 'user_invited',
  PERMISSION_CHANGED: 'permission_changed',
  SECURITY_ALERT: 'security_alert',
};

// Mensajes de error
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Por favor, intenta de nuevo.',
  INVALID_CREDENTIALS: 'Credenciales inválidas.',
  USER_NOT_FOUND: 'Usuario no encontrado.',
  UNAUTHORIZED: 'No tienes permiso para realizar esta acción.',
  SERVER_ERROR: 'Error del servidor. Por favor, intenta de nuevo.',
  VALIDATION_ERROR: 'Por favor, verifica los datos ingresados.',
};

// Mensajes de éxito
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Sesión iniciada correctamente.',
  LOGOUT_SUCCESS: 'Sesión cerrada correctamente.',
  DEBTOR_CREATED: 'Deudor creado exitosamente.',
  DEBTOR_UPDATED: 'Deudor actualizado exitosamente.',
  DEBTOR_DELETED: 'Deudor eliminado exitosamente.',
  PAYMENT_CREATED: 'Pago creado exitosamente.',
  PAYMENT_UPDATED: 'Pago actualizado exitosamente.',
  PAYMENT_DELETED: 'Pago eliminado exitosamente.',
  DEBT_CREATED: 'Deuda creada exitosamente.',
  DEBT_UPDATED: 'Deuda actualizada exitosamente.',
  DEBT_DELETED: 'Deuda eliminada exitosamente.',
  USER_INVITED: 'Usuario invitado exitosamente.',
  USER_UPDATED: 'Usuario actualizado exitosamente.',
};

// Configuración de notificaciones
export const NOTIFICATION_CONFIG = {
  DAYS_BEFORE_DUE: 3,
  CHECK_INTERVAL: 24 * 60 * 60 * 1000, // 24 horas
};

// Límites de paginación
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

// Formatos de fecha
export const DATE_FORMATS = {
  DISPLAY: 'dd/MM/yyyy',
  DISPLAY_TIME: 'dd/MM/yyyy HH:mm',
  ISO: 'yyyy-MM-dd',
  API: 'yyyy-MM-dd',
};

// Rutas de la aplicación
export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/home',
  DASHBOARD: '/dashboard',
  DEBTORS: '/debtors',
  DEBTOR_DETAIL: '/debtors/:id',
  PAYMENTS: '/payments',
  PAYMENT_DETAIL: '/payments/:id',
  DEBTS: '/debts',
  DEBT_DETAIL: '/debts/:id',
  REPORTS: '/reports',
  USERS: '/users',
  SETTINGS: '/settings',
  PROFILE: '/profile',
};
