'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Mock CSV data
const mockCsvPreview = {
  columns: ['respondent_id', 'Q1_explore', 'Q2_exploit', 'Q3_balance', 'Q4_leadership', 'Q5_culture', 'department', 'role'],
  rows: [
    ['001', '7', '8', '6', '9', '7', 'Engineering', 'Manager'],
    ['002', '6', '7', '8', '7', '8', 'Marketing', 'Director'],
    ['003', '8', '6', '7', '8', '7', 'Sales', 'Representative'],
    ['004', '9', '8', '7', '9', '8', 'Engineering', 'Senior Engineer'],
    ['005', '7', '7', '9', '8', '9', 'Product', 'Product Manager'],
  ],
};

// OA Constructs for mapping
const oaConstructs = [
  { id: 'exploration', label: 'Exploration', description: 'Innovation, experimentation, risk-taking' },
  { id: 'exploitation', label: 'Exploitation', description: 'Efficiency, refinement, execution' },
  { id: 'balance', label: 'Ambidexterity Balance', description: 'Balance between explore/exploit' },
  { id: 'leadership', label: 'Leadership Dimension', description: 'Leadership approach to OA' },
  { id: 'culture', label: 'Culture Dimension', description: 'Organizational culture alignment' },
  { id: 'structure', label: 'Structure Dimension', description: 'Structural enablers' },
  { id: 'market', label: 'Market Orientation', description: 'External market focus' },
  { id: 'capabilities', label: 'Dynamic Capabilities', description: 'Organizational capabilities' },
  { id: 'demographic', label: 'Demographic Data', description: 'Department, role, tenure, etc.' },
  { id: 'identifier', label: 'Identifier', description: 'Respondent ID or unique key' },
];

export default function ColumnMappingPage() {
  const router = useRouter();
  const params = useParams();
  const datasetId = params?.datasetId as string;

  const [columnMappings, setColumnMappings] = useState<Record<string, string>>({
    respondent_id: 'identifier',
    Q1_explore: 'exploration',
    Q2_exploit: 'exploitation',
    Q3_balance: 'balance',
    Q4_leadership: 'leadership',
    Q5_culture: 'culture',
    department: 'demographic',
    role: 'demographic',
  });

  const handleMappingChange = (csvColumn: string, oaConstruct: string) => {
    setColumnMappings((prev) => ({
      ...prev,
      [csvColumn]: oaConstruct,
    }));
  };

  const handleSaveMappings = () => {
    // Mock: In real implementation, would save mappings to backend
    alert('Mappings saved successfully!');
    router.push('/data');
  };

  const getMappedCount = () => {
    return Object.values(columnMappings).filter((v) => v && v !== 'unmapped').length;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => router.push('/data')}
            className="text-ambi-textMuted hover:text-ambi-primary transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h1 className="text-h1 text-ambi-textMain">Column Mapping</h1>
        </div>
        <p className="text-body-lg text-ambi-textMuted">
          Map your CSV columns to AmbiSight OA constructs • Dataset: {datasetId}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="premium-card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-h3 text-ambi-textMain mb-1">Mapping Progress</div>
            <div className="text-sm text-ambi-textMuted">
              {getMappedCount()} of {mockCsvPreview.columns.length} columns mapped
            </div>
          </div>
          <Badge variant="primary" size="md">
            {Math.round((getMappedCount() / mockCsvPreview.columns.length) * 100)}%
          </Badge>
        </div>
        <div className="w-full bg-ambi-bgPage rounded-pill h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-ambi-primary to-ambi-accentTeal transition-all duration-500"
            style={{ width: `${(getMappedCount() / mockCsvPreview.columns.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: CSV Preview */}
        <div>
          <div className="premium-card p-6">
            <h2 className="text-h2 text-ambi-textMain mb-4">CSV Preview</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ambi-borderSubtle">
                    {mockCsvPreview.columns.map((col) => (
                      <th
                        key={col}
                        className="text-left py-2 px-3 font-semibold text-ambi-textMain"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockCsvPreview.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-ambi-borderSubtle hover:bg-ambi-bgSurfaceSubtle transition-colors"
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="py-2 px-3 text-ambi-textMuted">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-ambi-textSoft">
              Showing first 5 rows of {mockCsvPreview.rows.length} total rows
            </div>
          </div>
        </div>

        {/* Right: Mapping Interface */}
        <div>
          <div className="premium-card p-6">
            <h2 className="text-h2 text-ambi-textMain mb-4">Map Columns</h2>
            <div className="space-y-4">
              {mockCsvPreview.columns.map((csvColumn) => (
                <div
                  key={csvColumn}
                  className="p-4 bg-ambi-bgSurfaceSubtle rounded-fluent border border-ambi-borderSubtle"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-ambi-textMain">{csvColumn}</div>
                    {columnMappings[csvColumn] && columnMappings[csvColumn] !== 'unmapped' && (
                      <Badge variant="teal" size="sm">
                        Mapped
                      </Badge>
                    )}
                  </div>
                  <select
                    value={columnMappings[csvColumn] || 'unmapped'}
                    onChange={(e) => handleMappingChange(csvColumn, e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-ambi-borderSubtle rounded-fluent text-sm text-ambi-textMain focus:outline-none focus:border-ambi-primary transition-colors"
                  >
                    <option value="unmapped">Select OA construct...</option>
                    {oaConstructs.map((construct) => (
                      <option key={construct.id} value={construct.id}>
                        {construct.label} - {construct.description}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <Button variant="primary" size="lg" onClick={handleSaveMappings} className="flex-1">
              Save Mappings
            </Button>
            <Button variant="ghost" size="lg" onClick={() => router.push('/data')}>
              Cancel
            </Button>
          </div>
        </div>
      </div>

      {/* OA Construct Reference Card */}
      <div className="mt-8 premium-card p-6">
        <h3 className="text-h3 text-ambi-textMain mb-4">OA Construct Reference</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {oaConstructs.slice(0, 8).map((construct) => (
            <div
              key={construct.id}
              className="p-4 bg-ambi-bgSurfaceSubtle rounded-fluent border border-ambi-borderSubtle"
            >
              <div className="font-medium text-ambi-textMain mb-1">
                {construct.label}
              </div>
              <div className="text-xs text-ambi-textMuted">{construct.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
