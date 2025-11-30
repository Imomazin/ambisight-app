'use client';

/**
 * Mock Authentication Context
 *
 * This provides a temporary authentication solution for development.
 * Will be replaced with a real auth provider (Clerk/Auth0/Auth.js) in production.
 */

import React, { createContext, useContext, useState } from 'react';
import { AuthContextType, AuthUser } from '@/lib/auth/types';
import { hasRole, hasAnyRole } from '@/lib/auth/types';
import { UserRole } from '@/lib/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for development
const MOCK_USERS: Record<string, { password: string; user: AuthUser }> = {
  'admin@example.com': {
    password: 'admin123',
    user: {
      id: 'user-1',
      email: 'admin@example.com',
      name: 'Admin User',
      organisationId: 'org-1',
      role: 'org_super_admin',
    },
  },
  'viewer@example.com': {
    password: 'viewer123',
    user: {
      id: 'user-2',
      email: 'viewer@example.com',
      name: 'Leadership Viewer',
      organisationId: 'org-1',
      role: 'leader_viewer',
    },
  },
};

const AUTH_STORAGE_KEY = 'ambisight_mock_auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Load auth state from localStorage on initialization
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window === 'undefined') return null;

    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedAuth) {
      try {
        return JSON.parse(storedAuth);
      } catch (error) {
        console.error('Failed to parse stored auth:', error);
        localStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
      }
    }
    return null;
  });

  const login = async (email: string, password: string): Promise<void> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser = MOCK_USERS[email];
    if (!mockUser || mockUser.password !== password) {
      throw new Error('Invalid credentials');
    }

    setUser(mockUser.user);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(mockUser.user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const contextValue: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading: false,
    login,
    logout,
    hasRole: (role: UserRole) => hasRole(user, role),
    hasAnyRole: (roles: UserRole[]) => hasAnyRole(user, roles),
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
