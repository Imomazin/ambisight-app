'use client';

import { useAuth } from '@/context/AuthContext';
import { mockDb } from '@/lib/stores/mockDb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) return null;

  const dbUser = mockDb.getUserById(user.id);
  const showOnboardingPrompt = dbUser && !dbUser.onboardingCompleted;

  return (
    <div>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary mt-2">
          Welcome back, {user?.name}
        </p>
      </div>

      {/* Onboarding Prompt */}
      {showOnboardingPrompt && (
        <Card className="mb-8 border-fluent-blue/20 bg-fluent-blue/5 shadow-fluent-lg animate-slide-up">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-blue to-fluent-teal flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Complete Your Organisation Setup
                </h3>
                <p className="text-text-secondary mb-4">
                  Finish setting up your organisation profile to unlock diagnostic capabilities
                  and get personalized insights.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => router.push('/onboarding')}
                  >
                    Complete Setup
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remind me later
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
        <Card className="hover:shadow-fluent-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">OA Balance Score</p>
                <p className="text-3xl font-bold text-text-primary mt-2">--</p>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-blue to-fluent-teal flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Run a diagnostic to see your score</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-fluent-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">Active Diagnostics</p>
                <p className="text-3xl font-bold text-text-primary mt-2">0</p>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-purple to-fluent-blue flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">No diagnostics in progress</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-fluent-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">Team Members</p>
                <p className="text-3xl font-bold text-text-primary mt-2">1</p>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-teal to-fluent-purple flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Invite more team members</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        <Card hover>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Start a Diagnostic</CardTitle>
                <CardDescription>
                  Measure your organization&apos;s ambidexterity profile
                </CardDescription>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-blue to-fluent-teal flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-text-secondary mb-4">
              Assess exploration, exploitation, and balance across organizational drivers like
              culture, design, and capabilities.
            </p>
            <Link href="/diagnostics">
              <Button variant="primary">View Diagnostics</Button>
            </Link>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>OA Learning Hub</CardTitle>
                <CardDescription>
                  Learn about organizational ambidexterity
                </CardDescription>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-purple to-fluent-orange flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-text-secondary mb-4">
              Explore research-backed insights on structural, sequential, and contextual
              approaches to ambidexterity.
            </p>
            <Button variant="outline" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest diagnostic results and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-text-tertiary">
              <div className="w-16 h-16 rounded-fluent bg-background-secondary flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium">No recent activity</p>
              <p className="text-sm mt-2">Start a diagnostic to see your results here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
