'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

type Step = 'setup' | 'audience' | 'review';

const templates = [
  { id: 'full', name: 'Full OA Assessment', questions: 45, duration: '~45 min' },
  { id: 'quick', name: 'Quick OA Scan', questions: 15, duration: '~15 min' },
  { id: 'leadership', name: 'Leadership Diagnostic', questions: 25, duration: '~25 min' },
];

const departments = [
  'Engineering',
  'Product',
  'Marketing',
  'Sales',
  'Finance',
  'HR',
  'Operations',
  'Customer Success',
];

const roles = [
  'Executive',
  'Director',
  'Manager',
  'Senior Individual Contributor',
  'Individual Contributor',
];

export default function NewDiagnosticWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('setup');
  const [diagnosticName, setDiagnosticName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('full');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [targetResponses, setTargetResponses] = useState(100);

  const handleNext = () => {
    if (currentStep === 'setup') setCurrentStep('audience');
    else if (currentStep === 'audience') setCurrentStep('review');
  };

  const handleBack = () => {
    if (currentStep === 'review') setCurrentStep('audience');
    else if (currentStep === 'audience') setCurrentStep('setup');
  };

  const handleLaunch = () => {
    // Mock: In real implementation, would create diagnostic run
    alert('Diagnostic launched successfully!');
    router.push('/diagnostics');
  };

  const toggleDepartment = (dept: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const toggleRole = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const getStepNumber = (step: Step): number => {
    if (step === 'setup') return 1;
    if (step === 'audience') return 2;
    return 3;
  };

  const isStepComplete = (step: Step): boolean => {
    if (step === 'setup') return diagnosticName !== '' && selectedTemplate !== '';
    if (step === 'audience') return selectedDepartments.length > 0 || selectedRoles.length > 0;
    return true;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => router.push('/diagnostics')}
            className="text-ambi-textMuted hover:text-ambi-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h1 className="text-h1 text-ambi-textMain">New Diagnostic</h1>
        </div>
        <p className="text-body-lg text-ambi-textMuted">
          Set up a new OA diagnostic assessment for your organization
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          {(['setup', 'audience', 'review'] as Step[]).map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    getStepNumber(currentStep) > getStepNumber(step)
                      ? 'bg-ambi-primary text-white'
                      : getStepNumber(currentStep) === getStepNumber(step)
                      ? 'bg-ambi-primary text-white'
                      : 'bg-ambi-bgPage text-ambi-textMuted'
                  }`}
                >
                  {getStepNumber(currentStep) > getStepNumber(step) ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    getStepNumber(step)
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium text-ambi-textMain capitalize">
                    {step}
                  </div>
                  <div className="text-xs text-ambi-textMuted">
                    {step === 'setup' && 'Name and template'}
                    {step === 'audience' && 'Target audience'}
                    {step === 'review' && 'Review and launch'}
                  </div>
                </div>
              </div>
              {index < 2 && (
                <div className="flex-1 h-px bg-ambi-borderSubtle mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="premium-card p-8 mb-8">
        {currentStep === 'setup' && (
          <div>
            <h2 className="text-h2 text-ambi-textMain mb-6">Setup Diagnostic</h2>

            {/* Diagnostic Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-ambi-textMain mb-2">
                Diagnostic Name *
              </label>
              <input
                type="text"
                value={diagnosticName}
                onChange={(e) => setDiagnosticName(e.target.value)}
                placeholder="e.g., Q1 2025 OA Assessment"
                className="w-full px-4 py-3 bg-white border border-ambi-borderSubtle rounded-fluent text-ambi-textMain focus:outline-none focus:border-ambi-primary transition-colors"
              />
            </div>

            {/* Template Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-ambi-textMain mb-3">
                Select Template *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 border-2 rounded-fluent cursor-pointer transition-all ${
                      selectedTemplate === template.id
                        ? 'border-ambi-primary bg-ambi-primarySoft/30'
                        : 'border-ambi-borderSubtle hover:border-ambi-primary/40'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-ambi-textMain">{template.name}</h3>
                      {selectedTemplate === template.id && (
                        <div className="w-5 h-5 rounded-full bg-ambi-primary flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-ambi-textMuted mb-2">
                      {template.questions} questions
                    </div>
                    <div className="text-xs text-ambi-textSoft">{template.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 'audience' && (
          <div>
            <h2 className="text-h2 text-ambi-textMain mb-6">Target Audience</h2>

            {/* Department Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-ambi-textMain mb-3">
                Departments
              </label>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => toggleDepartment(dept)}
                    className={`px-4 py-2 rounded-pill text-sm font-medium transition-all ${
                      selectedDepartments.includes(dept)
                        ? 'bg-ambi-primary text-white'
                        : 'bg-ambi-bgPage text-ambi-textMain hover:bg-ambi-primarySoft'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Role Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-ambi-textMain mb-3">
                Roles
              </label>
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => toggleRole(role)}
                    className={`px-4 py-2 rounded-pill text-sm font-medium transition-all ${
                      selectedRoles.includes(role)
                        ? 'bg-ambi-accentPurple text-white'
                        : 'bg-ambi-bgPage text-ambi-textMain hover:bg-purple-50'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Responses */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-ambi-textMain mb-2">
                Target Responses
              </label>
              <input
                type="number"
                value={targetResponses}
                onChange={(e) => setTargetResponses(parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-white border border-ambi-borderSubtle rounded-fluent text-ambi-textMain focus:outline-none focus:border-ambi-primary transition-colors"
              />
            </div>
          </div>
        )}

        {currentStep === 'review' && (
          <div>
            <h2 className="text-h2 text-ambi-textMain mb-6">Review & Launch</h2>

            <div className="space-y-6">
              {/* Diagnostic Details */}
              <div className="p-4 bg-ambi-bgSurfaceSubtle rounded-fluent">
                <h3 className="text-sm font-semibold text-ambi-textMain mb-3">
                  Diagnostic Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-ambi-textMuted mb-1">Name</div>
                    <div className="text-sm font-medium text-ambi-textMain">
                      {diagnosticName}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-ambi-textMuted mb-1">Template</div>
                    <div className="text-sm font-medium text-ambi-textMain">
                      {templates.find((t) => t.id === selectedTemplate)?.name}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-ambi-textMuted mb-1">Questions</div>
                    <div className="text-sm font-medium text-ambi-textMain">
                      {templates.find((t) => t.id === selectedTemplate)?.questions}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-ambi-textMuted mb-1">
                      Target Responses
                    </div>
                    <div className="text-sm font-medium text-ambi-textMain">
                      {targetResponses}
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="p-4 bg-ambi-bgSurfaceSubtle rounded-fluent">
                <h3 className="text-sm font-semibold text-ambi-textMain mb-3">
                  Target Audience
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-ambi-textMuted mb-2">Departments</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedDepartments.length > 0 ? (
                        selectedDepartments.map((dept) => (
                          <Badge key={dept} variant="primary" size="sm">
                            {dept}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-sm text-ambi-textMuted">All departments</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-ambi-textMuted mb-2">Roles</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRoles.length > 0 ? (
                        selectedRoles.map((role) => (
                          <Badge key={role} variant="purple" size="sm">
                            {role}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-sm text-ambi-textMuted">All roles</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Launch Info */}
              <div className="p-4 bg-blue-50 rounded-fluent border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
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
                    <div className="text-sm font-medium text-blue-900 mb-1">
                      Ready to launch
                    </div>
                    <div className="text-sm text-blue-700">
                      Once launched, invitation emails will be sent to all selected participants.
                      You can monitor progress from the Diagnostics Console.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="lg"
          onClick={handleBack}
          disabled={currentStep === 'setup'}
        >
          ← Back
        </Button>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="lg" onClick={() => router.push('/diagnostics')}>
            Cancel
          </Button>
          {currentStep !== 'review' ? (
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              disabled={!isStepComplete(currentStep)}
            >
              Next →
            </Button>
          ) : (
            <Button variant="primary" size="lg" onClick={handleLaunch}>
              Launch Diagnostic
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
