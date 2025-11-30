/**
 * Core data models for Ambi_Sight platform
 */

// Organizational Ambidexterity Core Types
export type OADimension = 'exploration' | 'exploitation';

export interface OAScore {
  exploration: number;
  exploitation: number;
  balance: number;
  timestamp: Date;
}

export type OAStyleType = 'structural' | 'sequential' | 'contextual';

export interface OAStyleProfile {
  structural: number;
  sequential: number;
  contextual: number;
  dominant: OAStyleType;
}

// Driver Types
export type DriverCategory =
  | 'organizational_design'
  | 'market_orientation'
  | 'dynamic_capabilities'
  | 'culture'
  | 'agility'
  | 'leadership';

export interface Driver {
  id: string;
  category: DriverCategory;
  name: string;
  description: string;
  weight: number;
}

// Organisation and User Types
export interface Organisation {
  id: string;
  name: string;
  industry?: string;
  size?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  organisationId: string;
  role: UserRole;
  createdAt: Date;
  lastLogin?: Date;
}

// Diagnostic Types
export type DiagnosticStatus =
  | 'draft'
  | 'in_progress'
  | 'awaiting_responses'
  | 'processing'
  | 'completed'
  | 'failed';

export interface DiagnosticConfig {
  id: string;
  name: string;
  description: string;
  drivers: Driver[];
  minResponses: number;
  targetRoles?: UserRole[];
}

export interface DiagnosticRun {
  id: string;
  organisationId: string;
  configId: string;
  status: DiagnosticStatus;
  startedAt: Date;
  completedAt?: Date;
  responseCount: number;
  scores?: OAScore;
  styleProfile?: OAStyleProfile;
  insights?: string[];
}

export interface DiagnosticResponse {
  id: string;
  diagnosticRunId: string;
  userId: string;
  responses: Record<string, unknown>;
  submittedAt: Date;
}

// Auth Types - imported from auth module
export type UserRole =
  | 'org_super_admin'
  | 'org_admin'
  | 'leader_viewer'
  | 'consultant'
  | 'platform_admin';
