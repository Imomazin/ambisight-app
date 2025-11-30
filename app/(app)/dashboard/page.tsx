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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back, {user?.name}
        </p>
      </div>

      {/* Onboarding Prompt */}
      {showOnboardingPrompt && (
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎯</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Complete Your Organisation Setup
                </h3>
                <p className="text-gray-700 mb-4">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">OA Balance Score</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">--</p>
              </div>
              <div className="text-4xl">⚖️</div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Run a diagnostic to see your score</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Diagnostics</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              </div>
              <div className="text-4xl">🔍</div>
            </div>
            <p className="text-xs text-gray-500 mt-4">No diagnostics in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Team Members</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Invite more team members</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hover>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Start a Diagnostic</CardTitle>
                <CardDescription>
                  Measure your organization&apos;s ambidexterity profile
                </CardDescription>
              </div>
              <div className="text-3xl">📊</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
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
              <div className="text-3xl">📚</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
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
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest diagnostic results and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <p>No recent activity</p>
              <p className="text-sm mt-2">Start a diagnostic to see your results here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
