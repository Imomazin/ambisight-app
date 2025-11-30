'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { mockDb } from '@/lib/stores/mockDb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedOrg, setSelectedOrg] = useState('all');
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('last-30');

  if (!user) return null;

  const dbUser = mockDb.getUserById(user.id);
  const showOnboardingPrompt = dbUser && !dbUser.onboardingCompleted;
  const org = mockDb.getOrganisationById(user.organisationId);

  return (
    <div>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary mt-2">
          Welcome back, {user?.name}
        </p>
      </div>

      {/* Filter Section */}
      <Card className="mb-8 animate-slide-up">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Organisation"
              options={[
                { value: 'all', label: org?.name || 'All Organisations' },
                { value: 'current', label: org?.name || 'Current Organisation' },
              ]}
              value={selectedOrg}
              onChange={(e) => setSelectedOrg(e.target.value)}
              fullWidth
            />
            <Select
              label="Business Unit"
              options={[
                { value: 'all', label: 'All Units' },
                { value: 'engineering', label: 'Engineering' },
                { value: 'sales', label: 'Sales & Marketing' },
                { value: 'operations', label: 'Operations' },
              ]}
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              fullWidth
            />
            <Select
              label="Time Period"
              options={[
                { value: 'last-7', label: 'Last 7 days' },
                { value: 'last-30', label: 'Last 30 days' },
                { value: 'last-90', label: 'Last 90 days' },
                { value: 'last-year', label: 'Last year' },
              ]}
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              fullWidth
            />
          </div>
        </CardContent>
      </Card>

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-slide-up">
        <Card className="hover:shadow-fluent-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-text-secondary mb-2">Exploration Score</p>
                <p className="text-3xl font-bold text-text-primary">72</p>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-blue to-fluent-teal flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-green-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs font-medium">+5.2%</span>
              </div>
              <span className="text-xs text-text-tertiary">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-fluent-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-text-secondary mb-2">Exploitation Score</p>
                <p className="text-3xl font-bold text-text-primary">68</p>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-purple to-fluent-blue flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-red-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-xs font-medium">-2.1%</span>
              </div>
              <span className="text-xs text-text-tertiary">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-fluent-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-text-secondary mb-2">Balance Index</p>
                <p className="text-3xl font-bold text-text-primary">0.94</p>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-teal to-fluent-purple flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-text-tertiary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                </svg>
                <span className="text-xs font-medium">0.0%</span>
              </div>
              <span className="text-xs text-text-tertiary">vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-fluent-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-text-secondary mb-2">Response Rate</p>
                <p className="text-3xl font-bold text-text-primary">85%</p>
              </div>
              <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-fluent-orange to-fluent-blue flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-green-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs font-medium">+12%</span>
              </div>
              <span className="text-xs text-text-tertiary">vs last period</span>
            </div>
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

      {/* Charts and Insights Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-fade-in">
        {/* Chart Placeholder - Ambidexterity Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Ambidexterity Distribution Across Units</CardTitle>
            <CardDescription>Exploration vs exploitation balance by business unit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-background-secondary rounded-fluent">
              <div className="text-center">
                <svg className="w-16 h-16 text-text-tertiary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-sm font-medium text-text-secondary">Chart visualization</p>
                <p className="text-xs text-text-tertiary mt-1">Run a diagnostic to see data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Focus Units */}
        <Card>
          <CardHeader>
            <CardTitle>Top Focus Units</CardTitle>
            <CardDescription>Units requiring attention based on OA scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-background-secondary rounded-fluent">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Engineering Team</p>
                    <p className="text-xs text-text-tertiary">Low exploration score</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-red-600">58</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-background-secondary rounded-fluent">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Sales & Marketing</p>
                    <p className="text-xs text-text-tertiary">Moderate imbalance</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-yellow-600">64</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-background-secondary rounded-fluent">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Product Development</p>
                    <p className="text-xs text-text-tertiary">Well balanced</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-green-600">78</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Card */}
      <Card className="mb-8 animate-fade-in border-fluent-blue/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fluent-blue to-fluent-purple flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <CardTitle>AmbiSight Insights</CardTitle>
              <CardDescription>AI-generated analysis • Updated 2 hours ago</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-text-secondary">
            <p className="mb-4">
              Based on your latest diagnostic data across {org?.name || 'your organisation'}, I&apos;ve identified several key patterns in your ambidexterity profile:
            </p>

            <div className="bg-fluent-blue/5 border-l-4 border-fluent-blue p-4 rounded-r-fluent mb-4">
              <p className="font-semibold text-fluent-blue mb-2">🎯 Strength: Exploration Leadership</p>
              <p className="text-sm">
                Your organization demonstrates strong exploration capabilities, particularly in product development and R&D units. The exploration score of 72 indicates a healthy appetite for innovation and new market opportunities.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-fluent mb-4">
              <p className="font-semibold text-yellow-700 mb-2">⚠️ Opportunity: Engineering Exploitation</p>
              <p className="text-sm text-yellow-900">
                The engineering team shows lower-than-average exploitation scores (58), suggesting potential inefficiencies in operational execution. Consider implementing more structured processes while maintaining innovation capacity.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-fluent">
              <p className="font-semibold text-green-700 mb-2">✓ Recommendation: Contextual Ambidexterity</p>
              <p className="text-sm text-green-900">
                Your balance index of 0.94 is excellent. To maintain this, focus on contextual switching - enabling teams to shift between exploration and exploitation modes based on strategic priorities and market conditions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
