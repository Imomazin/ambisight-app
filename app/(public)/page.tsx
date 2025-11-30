import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900">
      <main className="flex flex-col items-center justify-center px-8 py-16 text-center max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-medium">Research-Driven OA Diagnostics</span>
          </div>
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
            Ambi_Sight
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          <p className="text-2xl text-gray-200 mb-6 max-w-3xl leading-relaxed font-light">
            Unlock your organization&apos;s ambidexterity potential
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Measure the balance between <span className="text-blue-400 font-medium">exploration</span> and{' '}
            <span className="text-purple-400 font-medium">exploitation</span> across your organization.
            Privacy-preserving diagnostics powered by federated learning.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 flex-wrap justify-center mb-20">
          <Link href="/register">
            <Button size="lg" variant="primary" className="px-8 py-4 text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-shadow">
              Start Free Assessment →
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full max-w-5xl">
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-white text-xl font-semibold mb-3">Multi-Dimensional Diagnostics</h3>
            <p className="text-gray-400 leading-relaxed">
              Assess exploration, exploitation, and balance across leadership, culture, structure,
              market orientation, and dynamic capabilities
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-white text-xl font-semibold mb-3">Privacy-Preserving</h3>
            <p className="text-gray-400 leading-relaxed">
              Federated learning architecture ensures your sensitive organizational data
              never leaves your control, while still enabling cross-org insights
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-white text-xl font-semibold mb-3">DBA Research-Backed</h3>
            <p className="text-gray-400 leading-relaxed">
              Built on doctoral research examining structural, sequential, and contextual
              approaches to organizational ambidexterity
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-800 w-full max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-500">OA Dimensions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-500">Data Privacy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-sm text-gray-500">OA Styles</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
