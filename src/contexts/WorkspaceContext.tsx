import React, { createContext, useContext, useState, useEffect } from 'react';
import { Workspace, User, WorkspaceContextType, UserRole } from '../types';
import axios from 'axios';
import { APP_CONFIG } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './AuthContext';

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export const WorkspaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar workspace del usuario
  useEffect(() => {
    const loadWorkspace = async () => {
      if (!user?.workspaceId) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const token = await AsyncStorage.getItem('authToken');
        const response = await axios.get(
          `${APP_CONFIG.apiBaseUrl}/workspaces/${user.workspaceId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.success) {
          setWorkspace(response.data.data);
          // Cargar usuarios del workspace
          const usersResponse = await axios.get(
            `${APP_CONFIG.apiBaseUrl}/workspaces/${user.workspaceId}/users`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (usersResponse.data.success) {
            setUsers(usersResponse.data.data);
          }
        }
      } catch (error) {
        console.error('Error loading workspace:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadWorkspace();
  }, [user]);

  const inviteUser = async (email: string, role: UserRole) => {
    try {
      if (!workspace) throw new Error('No workspace selected');

      const token = await AsyncStorage.getItem('authToken');
      const response = await axios.post(
        `${APP_CONFIG.apiBaseUrl}/workspaces/${workspace.id}/invite`,
        { email, role },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        // Recargar usuarios
        const usersResponse = await axios.get(
          `${APP_CONFIG.apiBaseUrl}/workspaces/${workspace.id}/users`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (usersResponse.data.success) {
          setUsers(usersResponse.data.data);
        }
      }
    } catch (error) {
      console.error('Error inviting user:', error);
      throw error;
    }
  };

  const updateUserRole = async (userId: number, role: UserRole) => {
    try {
      if (!workspace) throw new Error('No workspace selected');

      const token = await AsyncStorage.getItem('authToken');
      const response = await axios.put(
        `${APP_CONFIG.apiBaseUrl}/workspaces/${workspace.id}/users/${userId}`,
        { role },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        // Actualizar usuario en la lista
        setUsers(
          users.map((u) => (u.id === userId ? { ...u, role } : u))
        );
      }
    } catch (error) {
      console.error('Error updating user role:', error);
      throw error;
    }
  };

  return (
    <WorkspaceContext.Provider
      value={{ workspace, users, isLoading, inviteUser, updateUserRole }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};
