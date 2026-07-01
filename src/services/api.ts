import axios, { AxiosInstance, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_CONFIG, ERROR_MESSAGES } from '../constants';
import { ApiResponse } from '../types';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: APP_CONFIG.apiBaseUrl,
      timeout: 30000,
    });

    // Interceptor para agregar token a las peticiones
    this.client.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Interceptor para manejar errores
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Token expirado, limpiar sesión
          await AsyncStorage.removeItem('authToken');
        }
        return Promise.reject(error);
      }
    );
  }

  // Métodos de autenticación
  async login(email: string, password: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async register(data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.post('/auth/register', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getMe(): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get('/auth/me');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Métodos de deudores
  async getDeudores(workspaceId: number): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(`/workspaces/${workspaceId}/deudores`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getDeudor(workspaceId: number, deudorId: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(
        `/workspaces/${workspaceId}/deudores/${deudorId}`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createDeudor(workspaceId: number, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.post(`/workspaces/${workspaceId}/deudores`, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateDeudor(workspaceId: number, deudorId: string, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.put(
        `/workspaces/${workspaceId}/deudores/${deudorId}`,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteDeudor(workspaceId: number, deudorId: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.delete(
        `/workspaces/${workspaceId}/deudores/${deudorId}`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Métodos de pagos a crédito
  async getPagosCredito(workspaceId: number): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(`/workspaces/${workspaceId}/pagos-credito`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getPagoCredito(workspaceId: number, pagoId: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(
        `/workspaces/${workspaceId}/pagos-credito/${pagoId}`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createPagoCredito(workspaceId: number, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.post(`/workspaces/${workspaceId}/pagos-credito`, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updatePagoCredito(workspaceId: number, pagoId: string, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.put(
        `/workspaces/${workspaceId}/pagos-credito/${pagoId}`,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deletePagoCredito(workspaceId: number, pagoId: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.delete(
        `/workspaces/${workspaceId}/pagos-credito/${pagoId}`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Métodos de deudas
  async getDeudas(workspaceId: number): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(`/workspaces/${workspaceId}/deudas`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getDeuda(workspaceId: number, deudaId: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(
        `/workspaces/${workspaceId}/deudas/${deudaId}`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createDeuda(workspaceId: number, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.post(`/workspaces/${workspaceId}/deudas`, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateDeuda(workspaceId: number, deudaId: string, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.put(
        `/workspaces/${workspaceId}/deudas/${deudaId}`,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteDeuda(workspaceId: number, deudaId: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.delete(
        `/workspaces/${workspaceId}/deudas/${deudaId}`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Métodos de pagos realizados
  async registrarPago(workspaceId: number, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.post(
        `/workspaces/${workspaceId}/pagos-realizados`,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Métodos de reportes
  async getReportes(workspaceId: number, params: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(`/workspaces/${workspaceId}/reportes`, {
        params,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Métodos de usuarios
  async getUsuarios(workspaceId: number): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(`/workspaces/${workspaceId}/usuarios`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async invitarUsuario(workspaceId: number, data: any): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.post(
        `/workspaces/${workspaceId}/usuarios/invitar`,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async actualizarRolUsuario(workspaceId: number, usuarioId: number, role: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.put(
        `/workspaces/${workspaceId}/usuarios/${usuarioId}`,
        { role }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Métodos de notificaciones
  async getNotificaciones(workspaceId: number): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get(`/workspaces/${workspaceId}/notificaciones`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async marcarNotificacionComoLeida(notificacionId: string): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.put(
        `/notificaciones/${notificacionId}/leida`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Manejo de errores
  private handleError(error: any): Error {
    if (error.response?.data?.error) {
      return new Error(error.response.data.error);
    }
    if (error.message === 'Network Error') {
      return new Error(ERROR_MESSAGES.NETWORK_ERROR);
    }
    return new Error(ERROR_MESSAGES.SERVER_ERROR);
  }
}

export const apiService = new ApiService();
