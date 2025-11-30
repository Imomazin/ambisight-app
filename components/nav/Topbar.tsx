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
    <header className="bg-bg-elevated border-b border-border-subtle shadow-soft">
      <div className="flex items-center justify-between px-6 py-4 gap-6">
        <div className="flex items-center gap-6 flex-1">
          {/* Organisation Selector */}
          {org && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-fluent bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center text-white font-semibold text-sm shadow-soft">
                {org.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-medium text-text-primary">{org.name}</div>
                <div className="text-xs text-text-muted capitalize">{org.size} • {org.sector || 'General'}</div>
              </div>
            </div>
          )}

          {/* Search Input */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-bg-page rounded-fluent border border-border-light max-w-md flex-1">
            <svg className="w-4 h-4 text-text-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-text-primary placeholder-text-soft flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Help Icon */}
          <button className="w-9 h-9 rounded-fluent hover:bg-bg-page transition-colors flex items-center justify-center text-text-soft hover:text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          {user && (
            <>
              <div className="text-sm text-text-secondary flex items-center gap-3">
                <div className="text-right hidden lg:block">
                  <div className="font-medium text-text-primary">{user.name}</div>
                  <div className="text-xs text-text-muted capitalize">
                    {user.role.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white font-semibold shadow-soft">
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
