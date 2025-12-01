'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function DataHubPage() {
  const router = useRouter();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (_file: File) => {
    // Mock: In real implementation, would upload and process the file
    // For now, navigate to column mapping with a mock dataset ID
    const mockDatasetId = `ds_${Date.now()}`;
    router.push(`/data/${mockDatasetId}`);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-h1 text-ambi-textMain">Data Input Hub</h1>
          <Badge variant="primary" size="sm">
            Beta
          </Badge>
        </div>
        <p className="text-body-lg text-ambi-textMuted">
          Upload survey data, connect to data sources, or manage existing datasets
        </p>
      </div>

      {/* Three Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Upload CSV Card */}
        <div
          className={`premium-card p-8 cursor-pointer transition-all ${
            dragActive ? 'border-ambi-primary bg-ambi-primarySoft/30' : ''
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-fluent bg-gradient-to-br from-ambi-primary to-ambi-accentTeal flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-h3 text-ambi-textMain mb-2">Upload CSV</h3>
            <p className="text-sm text-ambi-textMuted mb-6">
              Drag and drop your survey data CSV file or click to browse
            </p>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileInput}
              className="hidden"
              id="csv-upload"
            />
            <label htmlFor="csv-upload">
              <Button variant="primary" size="md" className="cursor-pointer">
                Choose File
              </Button>
            </label>
            <div className="mt-4 text-xs text-ambi-textSoft">
              Supports CSV files up to 50MB
            </div>
          </div>
        </div>

        {/* Connect to Data Source Card */}
        <div className="premium-card p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-fluent bg-gradient-to-br from-ambi-accentPurple to-ambi-primary flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <h3 className="text-h3 text-ambi-textMain mb-2">Connect Source</h3>
            <p className="text-sm text-ambi-textMuted mb-6">
              Connect to Qualtrics, SurveyMonkey, or other survey platforms
            </p>
            <Button variant="outline" size="md">
              Configure
            </Button>
            <div className="mt-4 flex items-center gap-2">
              <Badge variant="neutral" size="sm">
                Coming Soon
              </Badge>
            </div>
          </div>
        </div>

        {/* View Existing Datasets Card */}
        <div
          className="premium-card p-8 cursor-pointer hover:border-ambi-primary/40 transition-all"
          onClick={() => {
            // Mock navigation to datasets list
            alert('Datasets list view - coming soon!');
          }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-fluent bg-gradient-to-br from-ambi-accentTeal to-ambi-accentPurple flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-h3 text-ambi-textMain mb-2">View Datasets</h3>
            <p className="text-sm text-ambi-textMuted mb-6">
              Browse, manage, and analyze your uploaded datasets
            </p>
            <Button variant="ghost" size="md">
              View All
            </Button>
            <div className="mt-4 text-xs text-ambi-textSoft">3 datasets</div>
          </div>
        </div>
      </div>

      {/* Recent Datasets Table */}
      <div className="premium-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-h2 text-ambi-textMain">Recent Datasets</h2>
            <p className="text-sm text-ambi-textMuted">
              Your recently uploaded and processed datasets
            </p>
          </div>
          <Button variant="ghost" size="sm">
            View All →
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-ambi-borderSubtle">
                <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Dataset Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Rows
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Uploaded
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-ambi-textMain">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Mock data rows */}
              <tr className="border-b border-ambi-borderSubtle hover:bg-ambi-bgSurfaceSubtle transition-colors">
                <td className="py-4 px-4">
                  <div className="font-medium text-ambi-textMain">
                    Q4_2024_Survey.csv
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="primary" size="sm">
                    Ready
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-ambi-textMuted">
                  1,247
                </td>
                <td className="py-4 px-4 text-sm text-ambi-textMuted">
                  2 days ago
                </td>
                <td className="py-4 px-4">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </td>
              </tr>
              <tr className="border-b border-ambi-borderSubtle hover:bg-ambi-bgSurfaceSubtle transition-colors">
                <td className="py-4 px-4">
                  <div className="font-medium text-ambi-textMain">
                    Leadership_Assessment.csv
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="teal" size="sm">
                    Mapped
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-ambi-textMuted">892</td>
                <td className="py-4 px-4 text-sm text-ambi-textMuted">
                  1 week ago
                </td>
                <td className="py-4 px-4">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-ambi-bgSurfaceSubtle transition-colors">
                <td className="py-4 px-4">
                  <div className="font-medium text-ambi-textMain">
                    Culture_Diagnostic_2024.csv
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="amber" size="sm">
                    Processing
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-ambi-textMuted">
                  2,156
                </td>
                <td className="py-4 px-4 text-sm text-ambi-textMuted">
                  2 weeks ago
                </td>
                <td className="py-4 px-4">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 p-6 bg-ambi-primarySoft rounded-fluent border border-ambi-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-fluent bg-ambi-primary flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-h4 text-ambi-textMain mb-2">
              Need help formatting your data?
            </h3>
            <p className="text-sm text-ambi-textMuted mb-4">
              Our data upload wizard supports standard CSV formats from major
              survey platforms. For custom formats, refer to our documentation.
            </p>
            <Button variant="ghost" size="sm">
              View Documentation →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
