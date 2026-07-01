// Tipos de roles
export type UserRole = 'admin' | 'manager' | 'user';
export type UserStatus = 'active' | 'suspended' | 'banned';

// Tipos de usuario
export interface User {
  id: number;
  openId: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  status: UserStatus;
  workspaceId?: number;
  createdAt: Date;
  updatedAt: Date;
  lastSignedIn: Date;
}

// Tipos de deudor
export interface Deudor {
  id: string;
  workspaceId: number;
  nombre: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  ciudad?: string;
  pais?: string;
  deudaTotal: number;
  estadoCredito: 'activo' | 'suspendido' | 'bloqueado';
  fechaRegistro: Date;
  ultimaTransaccion?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de pago a crédito
export interface PagoCredito {
  id: string;
  workspaceId: number;
  deudorId: string;
  monto: number;
  tasaInteres: number;
  interesAcumulado: number;
  fechaVencimiento: Date;
  estado: 'pendiente' | 'parcial' | 'pagado' | 'vencido' | 'atrasado';
  descripcion?: string;
  concepto?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de deuda
export interface Deuda {
  id: string;
  workspaceId: number;
  deudorId: string;
  montoTotal: number;
  montoPagado: number;
  saldoPendiente: number;
  fechaInicio: Date;
  fechaVencimiento?: Date;
  estado: 'activa' | 'parcial' | 'pagada' | 'vencida';
  descripcion?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de pago realizado
export interface PagoRealizado {
  id: string;
  pagoCreditoId: string;
  montoPagado: number;
  fechaPago: Date;
  metodoPago: 'efectivo' | 'transferencia' | 'cheque' | 'otro';
  referencia?: string;
  notas?: string;
  createdAt: Date;
}

// Tipos de prueba de pago
export interface PruebaPago {
  id: string;
  pagoRealizadoId: string;
  nombreArchivo: string;
  tamanoArchivo?: number;
  rutaEncriptada?: string;
  hashArchivo?: string;
  fechaCarga: Date;
  validado: boolean;
}

// Tipos de notificación
export interface Notificacion {
  id: string;
  workspaceId: number;
  usuarioId: number;
  tipo: string;
  titulo: string;
  contenido?: string;
  leida: boolean;
  createdAt: Date;
}

// Tipos de auditoría
export interface Auditoria {
  id: string;
  workspaceId: number;
  usuarioId: number;
  accion: string;
  tabla: string;
  registroId?: string;
  cambiosAnteriores?: string;
  cambiosNuevos?: string;
  ipAddress?: string;
  createdAt: Date;
}

// Tipos de workspace
export interface Workspace {
  id: number;
  name: string;
  ownerId: number;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de permisos
export interface Permiso {
  id: string;
  rol: UserRole;
  recurso: string;
  accion: string;
  permitido: boolean;
  createdAt: Date;
}

// Respuestas de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Contexto de autenticación
export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isSignedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

// Contexto de workspace
export interface WorkspaceContextType {
  workspace: Workspace | null;
  users: User[];
  isLoading: boolean;
  inviteUser: (email: string, role: UserRole) => Promise<void>;
  updateUserRole: (userId: number, role: UserRole) => Promise<void>;
}
