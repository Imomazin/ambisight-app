'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

type Tab = 'active' | 'completed' | 'templates';

// Mock data
const mockActiveRuns = [
  {
    id: 'run_001',
    name: 'Q4 2024 OA Assessment',
    status: 'in_progress',
    progress: 67,
    startedAt: '2024-11-28',
    responses: 156,
    targetResponses: 250,
  },
  {
    id: 'run_002',
    name: 'Leadership Team Diagnostic',
    status: 'pending',
    progress: 0,
    startedAt: '2024-12-01',
    responses: 0,
    targetResponses: 12,
  },
];

const mockCompletedRuns = [
  {
    id: 'run_003',
    name: 'Q3 2024 Full Assessment',
    completedAt: '2024-10-15',
    responses: 312,
    explorationScore: 72,
    exploitationScore: 68,
  },
  {
    id: 'run_004',
    name: 'Engineering OA Scan',
    completedAt: '2024-09-20',
    responses: 89,
    explorationScore: 78,
    exploitationScore: 65,
  },
];

const mockTemplates = [
  {
    id: 'tmpl_001',
    name: 'Full OA Assessment',
    description: 'Comprehensive organizational ambidexterity analysis across all dimensions',
    questions: 45,
    duration: '~45 min',
    dimensions: ['Exploration', 'Exploitation', 'Balance', 'Leadership', 'Culture', 'Structure'],
  },
  {
    id: 'tmpl_002',
    name: 'Quick OA Scan',
    description: 'Rapid snapshot of ambidexterity with core questions only',
    questions: 15,
    duration: '~15 min',
    dimensions: ['Exploration', 'Exploitation', 'Balance'],
  },
  {
    id: 'tmpl_003',
    name: 'Leadership Diagnostic',
    description: 'Focused assessment on leadership approaches to ambidexterity',
    questions: 25,
    duration: '~25 min',
    dimensions: ['Leadership', 'Decision Making', 'Resource Allocation'],
  },
];

export default function DiagnosticsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('active');

  const handleNewDiagnostic = () => {
    router.push('/diagnostics/new');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_progress':
        return <Badge variant="primary">In Progress</Badge>;
      case 'pending':
        return <Badge variant="amber">Pending</Badge>;
      case 'completed':
        return <Badge variant="teal">Completed</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-h1 text-ambi-textMain mb-2">Diagnostics Console</h1>
          <p className="text-body-lg text-ambi-textMuted">
            Run and manage OA diagnostic assessments across your organization
          </p>
        </div>
        <Button variant="primary" size="lg" onClick={handleNewDiagnostic}>
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Diagnostic
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-ambi-borderSubtle mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('active')}
            className={`pb-4 px-1 text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'active'
                ? 'border-ambi-primary text-ambi-primary'
                : 'border-transparent text-ambi-textMuted hover:text-ambi-textMain'
            }`}
          >
            Active Runs
            {mockActiveRuns.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-ambi-primarySoft text-ambi-primary rounded-pill text-xs">
                {mockActiveRuns.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-4 px-1 text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'completed'
                ? 'border-ambi-primary text-ambi-primary'
                : 'border-transparent text-ambi-textMuted hover:text-ambi-textMain'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`pb-4 px-1 text-sm font-medium transition-colors border-b-2 ${
              activeTab === 'templates'
                ? 'border-ambi-primary text-ambi-primary'
                : 'border-transparent text-ambi-textMuted hover:text-ambi-textMain'
            }`}
          >
            Templates
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'active' && (
        <div className="premium-card p-6">
          <h2 className="text-h2 text-ambi-textMain mb-6">Active Diagnostic Runs</h2>
          <div className="space-y-4">
            {mockActiveRuns.map((run) => (
              <div
                key={run.id}
                className="p-6 bg-ambi-bgSurfaceSubtle rounded-fluent border border-ambi-borderSubtle hover:border-ambi-primary/40 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-h3 text-ambi-textMain">{run.name}</h3>
                      {getStatusBadge(run.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-ambi-textMuted">
                      <span>Started: {run.startedAt}</span>
                      <span>•</span>
                      <span>
                        Responses: {run.responses} / {run.targetResponses}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
                {run.status === 'in_progress' && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-ambi-textMain">
                        Progress
                      </span>
                      <span className="text-sm text-ambi-textMuted">
                        {run.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-ambi-bgPage rounded-pill h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-ambi-primary to-ambi-accentTeal transition-all duration-500"
                        style={{ width: `${run.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'completed' && (
        <div className="premium-card p-6">
          <h2 className="text-h2 text-ambi-textMain mb-6">Completed Diagnostics</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ambi-borderSubtle">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                    Diagnostic Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                    Completed
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                    Responses
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                    Explore Score
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                    Exploit Score
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockCompletedRuns.map((run) => (
                  <tr
                    key={run.id}
                    className="border-b border-ambi-borderSubtle hover:bg-ambi-bgSurfaceSubtle transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-ambi-textMain">{run.name}</div>
                    </td>
                    <td className="py-4 px-4 text-sm text-ambi-textMuted">
                      {run.completedAt}
                    </td>
                    <td className="py-4 px-4 text-sm text-ambi-textMuted">
                      {run.responses}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-ambi-primary">
                          {run.explorationScore}
                        </span>
                        <div className="w-16 bg-ambi-bgPage rounded-pill h-1.5 overflow-hidden">
                          <div
                            className="h-full bg-ambi-primary"
                            style={{ width: `${run.explorationScore}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-ambi-accentPurple">
                          {run.exploitationScore}
                        </span>
                        <div className="w-16 bg-ambi-bgPage rounded-pill h-1.5 overflow-hidden">
                          <div
                            className="h-full bg-ambi-accentPurple"
                            style={{ width: `${run.exploitationScore}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => router.push('/dashboard')}
                        >
                          View Results
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'templates' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTemplates.map((template) => (
              <div key={template.id} className="premium-card p-6">
                <div className="mb-4">
                  <h3 className="text-h3 text-ambi-textMain mb-2">{template.name}</h3>
                  <p className="text-sm text-ambi-textMuted">{template.description}</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ambi-textMuted">Questions</span>
                    <span className="font-medium text-ambi-textMain">
                      {template.questions}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ambi-textMuted">Duration</span>
                    <span className="font-medium text-ambi-textMain">
                      {template.duration}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-xs font-medium text-ambi-textMuted mb-2">
                    Dimensions
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {template.dimensions.map((dim) => (
                      <Badge key={dim} variant="neutral" size="sm">
                        {dim}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={handleNewDiagnostic}
                >
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
