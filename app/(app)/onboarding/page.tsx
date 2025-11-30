'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { mockDb } from '@/lib/stores/mockDb';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { Textarea } from '@/components/ui/Textarea';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Card, CardContent } from '@/components/ui/Card';
import type { OrgStructureType, DiagnosticGoal } from '@/lib/types';

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  // Step 2: Organisation details
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');

  // Step 3: Structure
  const [primaryStructure, setPrimaryStructure] = useState<OrgStructureType>('functional');
  const [structureDescription, setStructureDescription] = useState('');
  const [hasMultipleUnits, setHasMultipleUnits] = useState<string>('no');

  // Step 4: Goals
  const [primaryGoal, setPrimaryGoal] = useState<DiagnosticGoal>('balanced');
  const [goalNotes, setGoalNotes] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleComplete = () => {
    if (!user) return;

    const org = mockDb.getOrganisationById(user.organisationId);
    if (!org) return;

    // Save onboarding data
    mockDb.updateOnboardingData(user.organisationId, {
      organisationDetails: {
        name: org.name,
        size: org.size,
        sector,
        region,
        employeeCount: employeeCount ? parseInt(employeeCount) : undefined,
      },
      structureOverview: {
        primaryStructure,
        description: structureDescription,
        hasMultipleUnits: hasMultipleUnits === 'yes',
      },
      diagnosticGoals: {
        primaryGoal,
        notes: goalNotes,
      },
      completedSteps: [0, 1, 2, 3, 4],
      completedAt: new Date(),
    });

    // Mark onboarding as complete
    mockDb.completeOnboarding(user.id, user.organisationId);

    // Redirect to dashboard
    router.push('/dashboard');
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Ambi_Sight</h1>
          <p className="text-gray-600">Let&apos;s set up your organisation profile</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <ProgressBar value={progress} size="md" color="blue" showPercentage />
        </div>

        {/* Content Card */}
        <Card>
          <CardContent className="pt-8">
            {/* Step 0: Welcome */}
            {step === 0 && (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">🎯</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Let&apos;s Get Started
                </h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                  Ambi_Sight helps you measure and improve your organisation&apos;s balance between
                  exploration (innovation) and exploitation (efficiency). This setup will take about
                  5 minutes.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center mb-8">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">📋</div>
                    <div className="text-sm font-medium text-gray-700">Organisation Details</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">🏗️</div>
                    <div className="text-sm font-medium text-gray-700">Structure Overview</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-medium text-gray-700">Diagnostic Goals</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Organisation Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Organisation Details</h2>
                  <p className="text-gray-600 mb-6">Tell us more about your organisation</p>
                </div>

                <Select
                  label="Industry Sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  options={[
                    { value: 'technology', label: 'Technology & Software' },
                    { value: 'finance', label: 'Financial Services' },
                    { value: 'healthcare', label: 'Healthcare & Life Sciences' },
                    { value: 'manufacturing', label: 'Manufacturing & Industrial' },
                    { value: 'retail', label: 'Retail & Consumer Goods' },
                    { value: 'professional', label: 'Professional Services' },
                    { value: 'education', label: 'Education & Research' },
                    { value: 'other', label: 'Other' },
                  ]}
                  placeholder="Select your sector"
                  fullWidth
                  required
                />

                <Select
                  label="Geographic Region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  options={[
                    { value: 'north-america', label: 'North America' },
                    { value: 'europe', label: 'Europe' },
                    { value: 'asia-pacific', label: 'Asia Pacific' },
                    { value: 'latin-america', label: 'Latin America' },
                    { value: 'middle-east-africa', label: 'Middle East & Africa' },
                    { value: 'global', label: 'Global / Multi-Region' },
                  ]}
                  placeholder="Select your region"
                  fullWidth
                  required
                />

                <Input
                  type="number"
                  label="Approximate Employee Count"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(e.target.value)}
                  placeholder="e.g., 150"
                  fullWidth
                />
              </div>
            )}

            {/* Step 2: Structure */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Organisational Structure</h2>
                  <p className="text-gray-600 mb-6">How is your organisation structured?</p>
                </div>

                <RadioGroup
                  name="structure"
                  label="Primary Structure Type"
                  value={primaryStructure}
                  onChange={(value) => setPrimaryStructure(value as OrgStructureType)}
                  options={[
                    {
                      value: 'functional',
                      label: 'Functional',
                      description: 'Organized by departments (e.g., Sales, Marketing, Engineering)',
                    },
                    {
                      value: 'divisional',
                      label: 'Divisional',
                      description: 'Organized by products, services, or markets',
                    },
                    {
                      value: 'matrix',
                      label: 'Matrix',
                      description: 'Dual reporting - both functional and project-based',
                    },
                    {
                      value: 'network',
                      label: 'Network',
                      description: 'Decentralized, collaborative teams',
                    },
                    {
                      value: 'hybrid',
                      label: 'Hybrid',
                      description: 'Combination of multiple structures',
                    },
                  ]}
                />

                <RadioGroup
                  name="units"
                  label="Multiple Business Units?"
                  value={hasMultipleUnits}
                  onChange={setHasMultipleUnits}
                  options={[
                    { value: 'yes', label: 'Yes, we have multiple units or divisions' },
                    { value: 'no', label: 'No, we operate as a single unit' },
                  ]}
                  orientation="vertical"
                />

                <Textarea
                  label="Structure Description (Optional)"
                  value={structureDescription}
                  onChange={(e) => setStructureDescription(e.target.value)}
                  placeholder="Briefly describe your organizational structure..."
                  rows={3}
                  fullWidth
                />
              </div>
            )}

            {/* Step 3: Diagnostic Goals */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Diagnostic Goals</h2>
                  <p className="text-gray-600 mb-6">What are your primary ambidexterity goals?</p>
                </div>

                <RadioGroup
                  name="goal"
                  label="Primary Focus"
                  value={primaryGoal}
                  onChange={(value) => setPrimaryGoal(value as DiagnosticGoal)}
                  options={[
                    {
                      value: 'exploration_heavy',
                      label: 'Exploration-Heavy',
                      description: 'Focus on innovation, new markets, experimentation',
                    },
                    {
                      value: 'exploitation_heavy',
                      label: 'Exploitation-Heavy',
                      description: 'Focus on efficiency, optimization, current operations',
                    },
                    {
                      value: 'balanced',
                      label: 'Balanced Ambidexterity',
                      description: 'Equal focus on both exploration and exploitation',
                    },
                    {
                      value: 'situational',
                      label: 'Situational',
                      description: 'Varies by business unit or time period',
                    },
                  ]}
                />

                <Textarea
                  label="Additional Notes (Optional)"
                  value={goalNotes}
                  onChange={(e) => setGoalNotes(e.target.value)}
                  placeholder="Any specific challenges or goals you'd like to address..."
                  rows={4}
                  fullWidth
                />
              </div>
            )}

            {/* Step 4: Complete */}
            {step === 4 && (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  You&apos;re All Set!
                </h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                  Your organisation profile has been configured. You can now access the dashboard
                  and start running diagnostics to measure your organisational ambidexterity.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left max-w-md mx-auto">
                  <h3 className="font-semibold text-gray-900 mb-3">Next Steps:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>Explore your dashboard and OA metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>Invite team members to participate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      <span>Run your first diagnostic assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
              {step > 0 && step < TOTAL_STEPS - 1 && (
                <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
              )}
              {step < TOTAL_STEPS - 2 && (
                <Button type="button" variant="primary" onClick={handleNext} className="flex-1">
                  Continue
                </Button>
              )}
              {step === TOTAL_STEPS - 2 && (
                <Button type="button" variant="primary" onClick={handleNext} className="flex-1">
                  Complete Setup
                </Button>
              )}
              {step === TOTAL_STEPS - 1 && (
                <Button type="button" variant="primary" onClick={handleComplete} className="w-full">
                  Go to Dashboard →
                </Button>
              )}
            </div>

            {/* Skip Option */}
            {step < TOTAL_STEPS - 1 && (
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => router.push('/dashboard')}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Skip for now
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
