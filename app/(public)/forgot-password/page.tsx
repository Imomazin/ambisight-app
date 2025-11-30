import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ambi_Sight</h1>
          </Link>
          <p className="text-gray-600">Password reset</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>Password reset feature coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Feature In Development</h3>
              <p className="text-gray-600 mb-6">
                Password reset functionality will be available once we integrate a production auth provider.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                For now, please use the demo credentials on the login page.
              </p>
              <Link href="/login">
                <Button variant="primary">
                  Back to Login
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
