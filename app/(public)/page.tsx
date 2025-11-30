import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="flex flex-col items-center justify-center px-8 py-16 text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Ambi_Sight
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <p className="text-xl text-gray-300 mb-4 max-w-2xl leading-relaxed">
          Privacy-preserving organisational ambidexterity diagnostic
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          Powered by federated learning, Ambi_Sight measures your organisation&apos;s
          exploration-exploitation balance without centralizing sensitive data.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/login">
            <Button size="lg" variant="primary">
              Enter Platform
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-white font-semibold mb-2">Diagnostic Insights</h3>
            <p className="text-gray-400 text-sm">
              Measure exploration, exploitation, and balance across key organizational drivers
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-white font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-400 text-sm">
              Federated learning ensures your data stays private while enabling cross-org insights
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-white font-semibold mb-2">Research-Backed</h3>
            <p className="text-gray-400 text-sm">
              Built on DBA research into structural, sequential, and contextual ambidexterity
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
