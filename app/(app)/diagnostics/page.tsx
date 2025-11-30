'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function DiagnosticsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Diagnostics</h1>
        <p className="text-gray-600 mt-2">
          Run and manage organizational ambidexterity assessments
        </p>
      </div>

      {/* Available Diagnostics */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Diagnostics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover>
            <CardHeader>
              <CardTitle>Full OA Assessment</CardTitle>
              <CardDescription>Comprehensive organizational ambidexterity analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Exploration & Exploitation scores</li>
                <li>✓ Balance assessment</li>
                <li>✓ Style profile (structural, sequential, contextual)</li>
                <li>✓ Driver analysis across 6 categories</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">~45 min to complete</span>
                <Button disabled>Start Assessment</Button>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle>Quick OA Scan</CardTitle>
              <CardDescription>Rapid ambidexterity snapshot</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Basic exploration & exploitation scores</li>
                <li>✓ High-level balance indicator</li>
                <li>✓ Simplified driver assessment</li>
              </ul>
              <div className="flex items-center justify-between mt-8">
                <span className="text-sm text-gray-500">~15 min to complete</span>
                <Button disabled>Start Scan</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Diagnostic History */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Diagnostic History</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8 text-gray-500">
              <div className="text-5xl mb-4">📋</div>
              <p>No diagnostics run yet</p>
              <p className="text-sm mt-2">Start your first assessment to see results here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
