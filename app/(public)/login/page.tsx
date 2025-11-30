'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { AmbiSightLogo } from '@/components/branding/AmbiSightLogo';
import { mockDb } from '@/lib/stores/mockDb';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user) {
      // Check if onboarding is complete
      const dbUser = mockDb.getUserById(user.id);
      if (dbUser && !dbUser.onboardingCompleted) {
        router.push('/onboarding');
      } else {
        router.push('/dashboard');
      }
    }
  }, [isAuthenticated, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      // Navigation handled by useEffect above
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-secondary px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8 animate-fade-in">
          <Link href="/">
            <AmbiSightLogo size="lg" showText />
          </Link>
        </div>

        <Card className="shadow-fluent-lg animate-slide-up">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Sign in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                fullWidth
                disabled={isLoading}
                autoComplete="email"
              />

              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                fullWidth
                disabled={isLoading}
                autoComplete="current-password"
              />

              <div className="flex items-center justify-between">
                <Checkbox
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                />
                <Link
                  href="/forgot-password"
                  className="text-sm text-fluent-blue hover:text-blue-700 font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-fluent text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="bg-fluent-blue/10 border border-fluent-blue/20 rounded-fluent p-3 text-sm text-fluent-blue">
                <p className="font-medium mb-1">Demo Credentials:</p>
                <p className="text-xs">Admin: admin@example.com / admin123</p>
                <p className="text-xs">Viewer: viewer@example.com / viewer123</p>
              </div>

              <Button type="submit" fullWidth disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-text-secondary">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-fluent-blue hover:text-blue-700 font-medium transition-colors">
                  Create an account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
