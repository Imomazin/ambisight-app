'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';

const STEPS = ['Account', 'Organisation', 'Complete'];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  // Step 1: Account details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 2: Organisation details
  const [orgName, setOrgName] = useState('');
  const [orgSize, setOrgSize] = useState<'small' | 'medium' | 'large' | 'enterprise'>('medium');

  const handleNext = () => {
    setError('');

    if (step === 0) {
      if (!name || !email || !password) {
        setError('Please fill in all fields');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      setStep(1);
    } else if (step === 1) {
      if (!orgName) {
        setError('Please enter your organisation name');
        return;
      }
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');

    try {
      await register(email, password, name, orgName, orgSize);
      setStep(2);
      // Redirect to onboarding after a brief delay
      setTimeout(() => {
        router.push('/onboarding');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      setIsLoading(false);
    }
  };

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ambi_Sight</h1>
          </Link>
          <p className="text-gray-600">Create your account</p>
        </div>

        <Card>
          <CardHeader>
            <div className="mb-4">
              <ProgressBar value={progress} size="sm" color="blue" />
              <p className="text-xs text-gray-500 mt-2 text-center">
                Step {step + 1} of {STEPS.length}: {STEPS[step]}
              </p>
            </div>
            <CardTitle>{step === 0 ? 'Account Details' : step === 1 ? 'Organisation Details' : 'Welcome!'}</CardTitle>
            <CardDescription>
              {step === 0 && 'Create your personal account'}
              {step === 1 && 'Tell us about your organisation'}
              {step === 2 && 'Your account has been created successfully'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 0 && (
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
                <Input
                  type="text"
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  fullWidth
                  disabled={isLoading}
                />

                <Input
                  type="email"
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
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
                  autoComplete="new-password"
                />

                <Input
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  fullWidth
                  disabled={isLoading}
                  autoComplete="new-password"
                />

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                    {error}
                  </div>
                )}

                <Button type="submit" fullWidth disabled={isLoading}>
                  Continue
                </Button>
              </form>
            )}

            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
                <Input
                  type="text"
                  label="Organisation Name"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Acme Corporation"
                  required
                  fullWidth
                  disabled={isLoading}
                />

                <Select
                  label="Organisation Size"
                  value={orgSize}
                  onChange={(e) => setOrgSize(e.target.value as typeof orgSize)}
                  options={[
                    { value: 'small', label: 'Small (1-49 employees)' },
                    { value: 'medium', label: 'Medium (50-249 employees)' },
                    { value: 'large', label: 'Large (250-999 employees)' },
                    { value: 'enterprise', label: 'Enterprise (1000+ employees)' },
                  ]}
                  fullWidth
                  disabled={isLoading}
                />

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                    {error}
                  </div>
                )}

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(0)} disabled={isLoading} fullWidth>
                    Back
                  </Button>
                  <Button type="submit" fullWidth disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Created!</h3>
                <p className="text-gray-600 mb-6">
                  Redirecting you to complete your organisation setup...
                </p>
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              </div>
            )}

            {step < 2 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
