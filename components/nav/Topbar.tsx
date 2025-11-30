'use client';

import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { mockDb } from '@/lib/stores/mockDb';

export function Topbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const org = user ? mockDb.getOrganisationById(user.organisationId) : null;

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1">
          {/* Organisation Selector */}
          {org && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">
                {org.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{org.name}</div>
                <div className="text-xs text-gray-500 capitalize">{org.size} • {org.sector || 'General'}</div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <div className="text-sm text-gray-600 flex items-center gap-3">
                <div className="text-right">
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500 capitalize">
                    {user.role.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
