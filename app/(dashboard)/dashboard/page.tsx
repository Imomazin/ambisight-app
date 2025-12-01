'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">OA Analytics Dashboard</h1>
        <p className="text-neutral-600 mt-1">Welcome back! Here&apos;s your organizational ambidexterity overview</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Exploration Score</p>
                <p className="text-3xl font-bold text-primary-600 mt-1">72</p>
                <p className="text-xs text-success mt-1">+5% from last month</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Exploitation Score</p>
                <p className="text-3xl font-bold text-accent-purple mt-1">68</p>
                <p className="text-xs text-success mt-1">+2% from last month</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Balance Score</p>
                <p className="text-3xl font-bold text-accent-teal mt-1">70</p>
                <p className="text-xs text-success mt-1">Optimal range</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Active Units</p>
                <p className="text-3xl font-bold text-foreground mt-1">12</p>
                <p className="text-xs text-neutral-500 mt-1">Across 3 divisions</p>
              </div>
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>12-Month Trend</CardTitle>
            <CardDescription>Exploration vs Exploitation over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-primary-50 to-accent-purple/10 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Chart placeholder - Recharts integration pending</p>
            </div>
          </CardContent>
        </Card>

        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Top performing units</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Product Team', score: 85, color: 'bg-primary-500' },
                { name: 'Engineering', score: 78, color: 'bg-accent-teal' },
                { name: 'Marketing', score: 72, color: 'bg-accent-purple' },
                { name: 'Sales', score: 65, color: 'bg-accent-amber' },
              ].map((team) => (
                <div key={team.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-700">{team.name}</span>
                    <span className="font-medium">{team.score}</span>
                  </div>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${team.color} rounded-full transition-all duration-500`}
                      style={{ width: `${team.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="border-l-4 border-accent-amber">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <CardTitle>AI-Generated Insights</CardTitle>
          </div>
          <CardDescription>Strategic recommendations based on your data</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-accent-amber">•</span>
              <p className="text-sm text-neutral-700">Your exploration score shows strong innovation capability. Consider allocating 20% more resources to exploitation to balance short-term delivery.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-amber">•</span>
              <p className="text-sm text-neutral-700">Product Team demonstrates high ambidexterity balance. Use their practices as a model for other teams.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-amber">•</span>
              <p className="text-sm text-neutral-700">Market orientation dimension needs attention. Schedule strategy sessions to align exploration efforts with market needs.</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
