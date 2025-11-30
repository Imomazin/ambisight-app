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
    <header className="bg-white border-b border-border shadow-fluent-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1">
          {/* Organisation Selector */}
          {org && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-fluent bg-gradient-to-br from-fluent-blue to-fluent-teal flex items-center justify-center text-white font-semibold text-sm shadow-fluent-sm">
                {org.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-medium text-text-primary">{org.name}</div>
                <div className="text-xs text-text-tertiary capitalize">{org.size} • {org.sector || 'General'}</div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <div className="text-sm text-text-secondary flex items-center gap-3">
                <div className="text-right">
                  <div className="font-medium text-text-primary">{user.name}</div>
                  <div className="text-xs text-text-tertiary capitalize">
                    {user.role.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fluent-blue to-fluent-purple flex items-center justify-center text-white font-semibold shadow-fluent-sm">
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
