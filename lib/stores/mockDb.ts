/**
 * Mock Database Store
 *
 * In-memory store for development. Will be replaced with real database.
 */

import { User, Organisation, OnboardingData } from '@/lib/types';
import { AuthUser } from '@/lib/auth/types';

class MockDatabase {
  private users: Map<string, User> = new Map();
  private organisations: Map<string, Organisation> = new Map();
  private usersByEmail: Map<string, User> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed organisation
    const org: Organisation = {
      id: 'org-1',
      name: 'Acme Corporation',
      industry: 'Technology',
      size: 'medium',
      sector: 'Software',
      region: 'North America',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date(),
      onboardingCompleted: true,
      onboardingData: {
        organisationDetails: {
          name: 'Acme Corporation',
          size: 'medium',
          sector: 'Software',
          region: 'North America',
          employeeCount: 150,
        },
        structureOverview: {
          primaryStructure: 'matrix',
          description: 'Matrix structure with functional and project-based teams',
          hasMultipleUnits: true,
        },
        diagnosticGoals: {
          primaryGoal: 'balanced',
          secondaryGoals: ['exploration_heavy'],
          notes: 'Focus on innovation while maintaining operational excellence',
        },
        completedSteps: [0, 1, 2, 3],
        completedAt: new Date('2024-01-15'),
      },
    };

    this.organisations.set(org.id, org);

    // Seed users
    const adminUser: User = {
      id: 'user-1',
      email: 'admin@example.com',
      name: 'Admin User',
      organisationId: 'org-1',
      role: 'org_super_admin',
      createdAt: new Date('2024-01-01'),
      lastLogin: new Date(),
      onboardingCompleted: true,
    };

    const viewerUser: User = {
      id: 'user-2',
      email: 'viewer@example.com',
      name: 'Leadership Viewer',
      organisationId: 'org-1',
      role: 'leader_viewer',
      createdAt: new Date('2024-01-05'),
      lastLogin: new Date(),
      onboardingCompleted: true,
    };

    this.users.set(adminUser.id, adminUser);
    this.users.set(viewerUser.id, viewerUser);
    this.usersByEmail.set(adminUser.email, adminUser);
    this.usersByEmail.set(viewerUser.email, viewerUser);
  }

  // User operations
  getUserById(id: string): User | undefined {
    return this.users.get(id);
  }

  getUserByEmail(email: string): User | undefined {
    return this.usersByEmail.get(email);
  }

  createUser(user: Omit<User, 'id' | 'createdAt'>): User {
    const id = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newUser: User = {
      ...user,
      id,
      createdAt: new Date(),
    };
    this.users.set(id, newUser);
    this.usersByEmail.set(user.email, newUser);
    return newUser;
  }

  updateUser(id: string, updates: Partial<User>): User | undefined {
    const user = this.users.get(id);
    if (!user) return undefined;

    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    this.usersByEmail.set(updatedUser.email, updatedUser);
    return updatedUser;
  }

  // Organisation operations
  getOrganisationById(id: string): Organisation | undefined {
    return this.organisations.get(id);
  }

  createOrganisation(org: Omit<Organisation, 'id' | 'createdAt' | 'updatedAt'>): Organisation {
    const id = `org-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newOrg: Organisation = {
      ...org,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.organisations.set(id, newOrg);
    return newOrg;
  }

  updateOrganisation(id: string, updates: Partial<Organisation>): Organisation | undefined {
    const org = this.organisations.get(id);
    if (!org) return undefined;

    const updatedOrg = { ...org, ...updates, updatedAt: new Date() };
    this.organisations.set(id, updatedOrg);
    return updatedOrg;
  }

  // Onboarding operations
  updateOnboardingData(orgId: string, data: Partial<OnboardingData>): Organisation | undefined {
    const org = this.organisations.get(orgId);
    if (!org) return undefined;

    const existingData = org.onboardingData || {
      organisationDetails: { name: '', size: 'small' as const, sector: '', region: '' },
      structureOverview: { primaryStructure: 'functional' as const, hasMultipleUnits: false },
      diagnosticGoals: { primaryGoal: 'balanced' as const },
      completedSteps: [],
    };

    const updatedData: OnboardingData = {
      ...existingData,
      ...data,
    };

    return this.updateOrganisation(orgId, {
      onboardingData: updatedData,
    });
  }

  completeOnboarding(userId: string, orgId: string): { user: User; org: Organisation } | undefined {
    const user = this.updateUser(userId, { onboardingCompleted: true });
    const orgData = this.organisations.get(orgId)?.onboardingData;
    const org = this.updateOrganisation(orgId, {
      onboardingCompleted: true,
      onboardingData: orgData ? {
        ...orgData,
        completedAt: new Date(),
      } : undefined,
    });

    if (!user || !org) return undefined;
    return { user, org };
  }

  // Convert User to AuthUser (for auth context)
  toAuthUser(user: User): AuthUser {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      organisationId: user.organisationId,
      role: user.role,
    };
  }
}

// Singleton instance
export const mockDb = new MockDatabase();
