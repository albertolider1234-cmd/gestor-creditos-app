import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType, RegisterData } from '../types';
import axios from 'axios';
import { APP_CONFIG } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Verificar si hay sesión guardada al iniciar la app
  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          // Validar token con el backend
          const response = await axios.get(`${APP_CONFIG.apiBaseUrl}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.success) {
            setUser(response.data.data);
            setIsSignedIn(true);
          }
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${APP_CONFIG.apiBaseUrl}/auth/login`, {
        email,
        password,
      });

      if (response.data.success) {
        const { user, token } = response.data.data;
        setUser(user);
        setIsSignedIn(true);
        await AsyncStorage.setItem('authToken', token);
      } else {
        throw new Error(response.data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.removeItem('authToken');
      setUser(null);
      setIsSignedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${APP_CONFIG.apiBaseUrl}/auth/register`, data);

      if (response.data.success) {
        const { user, token } = response.data.data;
        setUser(user);
        setIsSignedIn(true);
        await AsyncStorage.setItem('authToken', token);
      } else {
        throw new Error(response.data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, isSignedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
