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
import { mockDb } from '@/lib/stores/mockDb';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Password storage (in real app, would be hashed in backend)
const PASSWORDS: Record<string, string> = {
  'admin@example.com': 'admin123',
  'viewer@example.com': 'viewer123',
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

    const storedPassword = PASSWORDS[email];
    if (!storedPassword || storedPassword !== password) {
      throw new Error('Invalid email or password');
    }

    const dbUser = mockDb.getUserByEmail(email);
    if (!dbUser) {
      throw new Error('User not found');
    }

    // Update last login
    mockDb.updateUser(dbUser.id, { lastLogin: new Date() });

    const authUser = mockDb.toAuthUser(dbUser);
    setUser(authUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authUser));
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    orgName: string,
    orgSize: 'small' | 'medium' | 'large' | 'enterprise'
  ): Promise<void> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check if user already exists
    if (mockDb.getUserByEmail(email)) {
      throw new Error('Email already registered');
    }

    // Create organisation
    const org = mockDb.createOrganisation({
      name: orgName,
      size: orgSize,
      onboardingCompleted: false,
    });

    // Create user
    const newUser = mockDb.createUser({
      email,
      name,
      organisationId: org.id,
      role: 'org_super_admin', // First user is super admin
      onboardingCompleted: false,
    });

    // Store password (in real app, would be hashed server-side)
    PASSWORDS[email] = password;

    // Auto-login
    const authUser = mockDb.toAuthUser(newUser);
    setUser(authUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authUser));
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
    register,
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
