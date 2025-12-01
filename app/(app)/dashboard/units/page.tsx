'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Mock data for org units
const mockUnits = [
  {
    id: 'eng',
    name: 'Engineering',
    exploration: 78,
    exploitation: 65,
    balance: 0.83,
    employees: 124,
    trend: 'up',
  },
  {
    id: 'product',
    name: 'Product',
    exploration: 82,
    exploitation: 71,
    balance: 0.87,
    employees: 45,
    trend: 'up',
  },
  {
    id: 'sales',
    name: 'Sales',
    exploration: 64,
    exploitation: 79,
    balance: 0.81,
    employees: 89,
    trend: 'neutral',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    exploration: 75,
    exploitation: 68,
    balance: 0.91,
    employees: 52,
    trend: 'up',
  },
  {
    id: 'finance',
    name: 'Finance',
    exploration: 58,
    exploitation: 84,
    balance: 0.69,
    employees: 34,
    trend: 'down',
  },
  {
    id: 'hr',
    name: 'HR',
    exploration: 71,
    exploitation: 76,
    balance: 0.93,
    employees: 28,
    trend: 'up',
  },
];

export default function UnitsComparisonPage() {
  const [sortBy, setSortBy] = useState<'exploration' | 'exploitation' | 'balance'>('balance');
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);

  const sortedUnits = [...mockUnits].sort((a, b) => b[sortBy] - a[sortBy]);

  const toggleUnitSelection = (unitId: string) => {
    setSelectedUnits((prev) =>
      prev.includes(unitId) ? prev.filter((id) => id !== unitId) : [...prev, unitId]
    );
  };

  const getBalanceColor = (balance: number) => {
    if (balance >= 0.85) return 'text-green-600 bg-green-50';
    if (balance >= 0.75) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up')
      return (
        <svg
          className="w-4 h-4 text-green-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    if (trend === 'down')
      return (
        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    return (
      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-h1 text-ambi-textMain mb-2">Organizational Unit Comparison</h1>
        <p className="text-body-lg text-ambi-textMuted">
          Compare OA scores across business units to identify strengths and opportunities
        </p>
      </div>

      {/* Sort Controls */}
      <div className="premium-card p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-h4 text-ambi-textMain mb-2">Sort By</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('exploration')}
                className={`px-4 py-2 rounded-fluent text-sm font-medium transition-all ${
                  sortBy === 'exploration'
                    ? 'bg-ambi-primary text-white'
                    : 'bg-ambi-bgPage text-ambi-textMain hover:bg-ambi-primarySoft'
                }`}
              >
                Exploration
              </button>
              <button
                onClick={() => setSortBy('exploitation')}
                className={`px-4 py-2 rounded-fluent text-sm font-medium transition-all ${
                  sortBy === 'exploitation'
                    ? 'bg-ambi-accentPurple text-white'
                    : 'bg-ambi-bgPage text-ambi-textMain hover:bg-purple-50'
                }`}
              >
                Exploitation
              </button>
              <button
                onClick={() => setSortBy('balance')}
                className={`px-4 py-2 rounded-fluent text-sm font-medium transition-all ${
                  sortBy === 'balance'
                    ? 'bg-ambi-accentTeal text-white'
                    : 'bg-ambi-bgPage text-ambi-textMain hover:bg-teal-50'
                }`}
              >
                Balance
              </button>
            </div>
          </div>
          <div>
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
              Export Report
            </Button>
          </div>
        </div>
      </div>

      {/* Ranked Bar Chart */}
      <div className="premium-card p-8 mb-8">
        <h2 className="text-h2 text-ambi-textMain mb-6">Unit Rankings</h2>
        <div className="space-y-6">
          {sortedUnits.map((unit, index) => (
            <div key={unit.id} className="flex items-center gap-4">
              {/* Rank Number */}
              <div className="w-8 h-8 rounded-full bg-ambi-primarySoft flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-ambi-primary">{index + 1}</span>
              </div>

              {/* Unit Info */}
              <div className="w-48 flex-shrink-0">
                <div className="font-medium text-ambi-textMain">{unit.name}</div>
                <div className="text-xs text-ambi-textMuted">{unit.employees} employees</div>
              </div>

              {/* Bar Chart */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 h-8 bg-ambi-bgPage rounded-fluent overflow-hidden relative">
                    {/* Exploration Bar */}
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-ambi-primary to-ambi-primary/80 transition-all duration-500"
                      style={{ width: `${unit.exploration}%` }}
                    />
                    {/* Exploitation Bar (overlaid with transparency) */}
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-ambi-accentPurple/60 to-ambi-accentPurple/40 transition-all duration-500"
                      style={{ width: `${unit.exploitation}%` }}
                    />
                  </div>
                  {getTrendIcon(unit.trend)}
                </div>
                <div className="flex items-center justify-between text-xs text-ambi-textMuted">
                  <span>Explore: {unit.exploration}</span>
                  <span>Exploit: {unit.exploitation}</span>
                  <span className={`px-2 py-0.5 rounded-pill font-medium ${getBalanceColor(unit.balance)}`}>
                    Balance: {unit.balance.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="flex-shrink-0">
                <input
                  type="checkbox"
                  checked={selectedUnits.includes(unit.id)}
                  onChange={() => toggleUnitSelection(unit.id)}
                  className="w-5 h-5 rounded border-ambi-borderSubtle text-ambi-primary focus:ring-ambi-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="premium-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-h2 text-ambi-textMain">Detailed Comparison</h2>
          {selectedUnits.length > 0 && (
            <Badge variant="primary" size="md">
              {selectedUnits.length} selected
            </Badge>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-ambi-borderSubtle">
                <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Unit
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Employees
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Exploration
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Exploitation
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Balance
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Trend
                </th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUnits.map((unit) => (
                <tr
                  key={unit.id}
                  className={`border-b border-ambi-borderSubtle transition-colors ${
                    selectedUnits.includes(unit.id)
                      ? 'bg-ambi-primarySoft/30'
                      : 'hover:bg-ambi-bgSurfaceSubtle'
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="font-medium text-ambi-textMain">{unit.name}</div>
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-ambi-textMuted">
                    {unit.employees}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-medium text-ambi-primary">
                      {unit.exploration}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-medium text-ambi-accentPurple">
                      {unit.exploitation}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-pill text-xs font-medium ${getBalanceColor(unit.balance)}`}
                    >
                      {unit.balance.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">{getTrendIcon(unit.trend)}</div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {unit.balance >= 0.85 ? (
                      <Badge variant="teal" size="sm">
                        Healthy
                      </Badge>
                    ) : unit.balance >= 0.75 ? (
                      <Badge variant="amber" size="sm">
                        Attention
                      </Badge>
                    ) : (
                      <Badge variant="neutral" size="sm">
                        At Risk
                      </Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
