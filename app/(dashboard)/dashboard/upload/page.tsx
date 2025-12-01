'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';

export default function UploadDataPage() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Upload Data</h1>
        <p className="text-neutral-600 mt-1">Import your organizational survey data for OA analysis</p>
      </div>

      {/* Upload Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upload CSV / Excel File</CardTitle>
            <CardDescription>
              Supported formats: CSV, XLSX, XLS (Max size: 50MB)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                dragActive
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-300 hover:border-primary-400'
              }`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <svg
                className="w-16 h-16 mx-auto text-neutral-400 mb-4"
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

              <h3 className="text-lg font-medium text-foreground mb-2">
                {file ? file.name : 'Drag and drop your file here'}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">or</p>

              <label htmlFor="file-upload">
                <Button variant="secondary" className="cursor-pointer">
                  Browse Files
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileInput}
                />
              </label>

              {file && (
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <div className="text-left">
                        <p className="text-sm font-medium text-foreground">{file.name}</p>
                        <p className="text-xs text-neutral-600">{(file.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setFile(null)}>
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {file && (
              <div className="mt-6">
                <Button className="w-full" size="lg">
                  Process & Map Columns →
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>Expected Columns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-primary-50 rounded-lg">
                <p className="text-sm font-medium text-foreground">Exploration</p>
                <p className="text-xs text-neutral-600 mt-1">Innovation, risk-taking, learning</p>
              </div>
              <div className="p-3 bg-accent-purple/10 rounded-lg">
                <p className="text-sm font-medium text-foreground">Exploitation</p>
                <p className="text-xs text-neutral-600 mt-1">Efficiency, refinement, execution</p>
              </div>
              <div className="p-3 bg-accent-teal/10 rounded-lg">
                <p className="text-sm font-medium text-foreground">Balance</p>
                <p className="text-xs text-neutral-600 mt-1">Strategic equilibrium</p>
              </div>
              <div className="p-3 bg-neutral-100 rounded-lg">
                <p className="text-sm font-medium text-foreground">Demographics</p>
                <p className="text-xs text-neutral-600 mt-1">Unit, role, tenure (optional)</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-800">
                <strong>Tip:</strong> Auto-mapping will detect columns based on headers and suggest mappings
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your uploaded datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Q4_2024_Survey.xlsx', date: '2 days ago', rows: 250, status: 'Processed' },
              { name: 'Innovation_Metrics.csv', date: '1 week ago', rows: 180, status: 'Processed' },
              { name: 'Team_Assessment_Nov.xlsx', date: '2 weeks ago', rows: 120, status: 'Processed' },
            ].map((upload, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">{upload.name}</p>
                    <p className="text-sm text-neutral-600">{upload.rows} rows • {upload.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-accent-green/20 text-accent-green text-xs font-medium rounded-full">
                    {upload.status}
                  </span>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
