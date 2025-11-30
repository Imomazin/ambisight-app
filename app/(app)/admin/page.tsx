'use client';

import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminPage() {
  const { user, hasAnyRole } = useAuth();

  // Check if user has admin access
  const hasAccess = hasAnyRole(['org_admin', 'org_super_admin', 'platform_admin'] as never[]);

  if (!hasAccess) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600">You don&apos;t have permission to access this page.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Console</h1>
        <p className="text-gray-600 mt-2">
          Manage your organization settings and users
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Organisation Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Organisation Settings</CardTitle>
            <CardDescription>Configure your organisation profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organisation Name
                </label>
                <p className="text-gray-900">Acme Corporation</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <p className="text-gray-900">Technology</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organisation Size
                </label>
                <p className="text-gray-900">50-200 employees</p>
              </div>
              <Button variant="outline" size="sm" disabled>
                Edit Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage team members and roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <div>
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {user?.role.replace(/_/g, ' ')}
                </span>
              </div>
              <Button variant="outline" size="sm" disabled>
                Invite Users
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Integration Settings */}
        <Card>
          <CardHeader>
            <CardTitle>ML Backend Integration</CardTitle>
            <CardDescription>Configure Python ML service connection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  API Endpoint
                </label>
                <p className="text-sm text-gray-500 font-mono">Not configured</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-gray-600">Disconnected</span>
                </div>
              </div>
              <Button variant="outline" size="sm" disabled>
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Federated Learning */}
        <Card>
          <CardHeader>
            <CardTitle>Federated Learning</CardTitle>
            <CardDescription>Privacy-preserving cross-org learning settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Participation
                </label>
                <p className="text-sm text-gray-600">Opt-in to federated learning network</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  disabled
                  className="rounded border-gray-300"
                />
                <label className="text-sm text-gray-700">
                  Share anonymized insights
                </label>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                <p className="font-medium">Coming Soon</p>
                <p className="text-xs mt-1">Federated learning features will be available in a future release</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
