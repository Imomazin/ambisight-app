'use client';

import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export function Topbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1">
          {/* Breadcrumbs or page title could go here */}
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">{user.name}</span>
                <span className="mx-2">•</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {user.role.replace(/_/g, ' ')}
                </span>
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
