'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Mock data for OA dimensions
const dimensions = [
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Leadership approach to ambidexterity',
    exploration: 75,
    exploitation: 70,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'Organizational culture alignment',
    exploration: 82,
    exploitation: 65,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 'structure',
    name: 'Structure',
    description: 'Organizational structure enablers',
    exploration: 68,
    exploitation: 78,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: 'market',
    name: 'Market Orientation',
    description: 'External market focus',
    exploration: 79,
    exploitation: 72,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 'capabilities',
    name: 'Dynamic Capabilities',
    description: 'Organizational capabilities',
    exploration: 73,
    exploitation: 76,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 'resources',
    name: 'Resource Allocation',
    description: 'Strategic resource deployment',
    exploration: 71,
    exploitation: 74,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function CapabilitiesDashboardPage() {
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);

  const getBalanceScore = (explore: number, exploit: number) => {
    const min = Math.min(explore, exploit);
    const max = Math.max(explore, exploit);
    return max > 0 ? min / max : 0;
  };

  const getBalanceColor = (balance: number) => {
    if (balance >= 0.85) return 'bg-green-500';
    if (balance >= 0.75) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-h1 text-ambi-textMain mb-2">
          Culture & Capability Dimensions
        </h1>
        <p className="text-body-lg text-ambi-textMuted">
          Analyze ambidexterity across organizational dimensions
        </p>
      </div>

      {/* Dimension Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {dimensions.map((dimension) => {
          const balance = getBalanceScore(dimension.exploration, dimension.exploitation);
          return (
            <div
              key={dimension.id}
              onClick={() => setSelectedDimension(dimension.id)}
              className={`premium-card p-6 cursor-pointer transition-all ${
                selectedDimension === dimension.id
                  ? 'border-ambi-primary bg-ambi-primarySoft/30 shadow-lg'
                  : 'hover:border-ambi-primary/40'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-ambi-primary to-ambi-accentTeal flex items-center justify-center text-white">
                  <div className="w-6 h-6">{dimension.icon}</div>
                </div>
                <div className={`w-3 h-3 rounded-full ${getBalanceColor(balance)}`} />
              </div>

              <h3 className="text-h3 text-ambi-textMain mb-2">{dimension.name}</h3>
              <p className="text-sm text-ambi-textMuted mb-4">{dimension.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ambi-textMuted">Exploration</span>
                  <span className="font-medium text-ambi-primary">
                    {dimension.exploration}
                  </span>
                </div>
                <div className="w-full bg-ambi-bgPage rounded-pill h-2 overflow-hidden">
                  <div
                    className="h-full bg-ambi-primary transition-all duration-500"
                    style={{ width: `${dimension.exploration}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm pt-2">
                  <span className="text-ambi-textMuted">Exploitation</span>
                  <span className="font-medium text-ambi-accentPurple">
                    {dimension.exploitation}
                  </span>
                </div>
                <div className="w-full bg-ambi-bgPage rounded-pill h-2 overflow-hidden">
                  <div
                    className="h-full bg-ambi-accentPurple transition-all duration-500"
                    style={{ width: `${dimension.exploitation}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Radar Chart Visualization */}
      <div className="premium-card p-8 mb-8">
        <h2 className="text-h2 text-ambi-textMain mb-6">Ambidexterity Radar</h2>
        <div className="aspect-square max-w-xl mx-auto bg-gradient-mesh rounded-fluent flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-20 h-20 text-ambi-primary mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <p className="text-sm font-medium text-ambi-textMuted">
              Interactive Radar Chart
            </p>
            <p className="text-xs text-ambi-textSoft mt-1">
              Visualization coming soon
            </p>
          </div>
        </div>
      </div>

      {/* Cluster Analysis */}
      <div className="premium-card p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-h2 text-ambi-textMain">Dimension Clusters</h2>
            <p className="text-sm text-ambi-textMuted">
              Grouped by ambidexterity profile similarity
            </p>
          </div>
          <Button variant="outline" size="md">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export Analysis
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exploration-Dominant Cluster */}
          <div className="p-6 bg-blue-50 rounded-fluent border border-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-ambi-primary" />
              <h3 className="text-h4 text-ambi-textMain">Exploration-Dominant</h3>
            </div>
            <div className="space-y-2">
              <Badge variant="primary" size="sm">
                Culture
              </Badge>
              <Badge variant="primary" size="sm">
                Market Orientation
              </Badge>
            </div>
            <p className="text-sm text-ambi-textMuted mt-4">
              High innovation focus, external orientation
            </p>
          </div>

          {/* Balanced Cluster */}
          <div className="p-6 bg-green-50 rounded-fluent border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="text-h4 text-ambi-textMain">Balanced</h3>
            </div>
            <div className="space-y-2">
              <Badge variant="teal" size="sm">
                Leadership
              </Badge>
              <Badge variant="teal" size="sm">
                Dynamic Capabilities
              </Badge>
              <Badge variant="teal" size="sm">
                Resources
              </Badge>
            </div>
            <p className="text-sm text-ambi-textMuted mt-4">
              Equal emphasis on explore/exploit
            </p>
          </div>

          {/* Exploitation-Dominant Cluster */}
          <div className="p-6 bg-purple-50 rounded-fluent border border-purple-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-ambi-accentPurple" />
              <h3 className="text-h4 text-ambi-textMain">Exploitation-Dominant</h3>
            </div>
            <div className="space-y-2">
              <Badge variant="purple" size="sm">
                Structure
              </Badge>
            </div>
            <p className="text-sm text-ambi-textMuted mt-4">
              Process-oriented, efficiency focus
            </p>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-8 p-6 bg-ambi-bgSurfaceSubtle rounded-fluent">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-ambi-primary flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="text-sm font-semibold text-ambi-textMain mb-2">
                Key Insight
              </h4>
              <p className="text-sm text-ambi-textMuted">
                Your organization shows strong exploration capabilities in Culture and
                Market Orientation, while Structure leans toward exploitation. This
                suggests a contextual ambidexterity approach where different dimensions
                play distinct strategic roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
