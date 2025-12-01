import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section - Microsoft Copilot Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden mica-surface">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 grid-background" />

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-400/20 to-accent-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-accent-teal/20 to-accent-green/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                <span className="text-sm font-medium text-neutral-700">Powered by AI  •  Research-Backed</span>
              </div>

              <h1 className="text-display text-foreground">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-purple">Organizational</span> Ambidexterity
              </h1>

              <p className="text-subtitle max-w-xl">
                Measure, analyze, and optimize the balance between exploration and exploitation.
                Enterprise-grade diagnostics with AI-powered insights.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/signup">
                  <Button size="lg" className="accent-glow">
                    Start Free Assessment
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-600">5 OA Dimensions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-600">100% Data Privacy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-accent-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-600">Enterprise-Ready</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Dashboard Preview */}
            <div className="relative hidden lg:block h-[600px] animate-fade-in">
              {/* Main Dashboard Card */}
              <Card variant="elevated" className="absolute top-0 right-0 w-96 p-6 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple" />
                      <div>
                        <div className="text-sm font-medium">Analysis Ready</div>
                        <div className="text-xs text-neutral-500">2 min ago</div>
                      </div>
                    </div>
                  </div>

                  {/* OA Score Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">72</div>
                      <div className="text-xs text-neutral-600">Exploration</div>
                    </div>
                    <div className="bg-accent-purple/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent-purple">68</div>
                      <div className="text-xs text-neutral-600">Exploitation</div>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-24 bg-gradient-to-br from-primary-50 to-accent-purple/10 rounded-lg flex items-end justify-around p-3 gap-1">
                    <div className="w-full h-12 bg-primary-400 rounded-sm" />
                    <div className="w-full h-20 bg-primary-500 rounded-sm" />
                    <div className="w-full h-16 bg-primary-400 rounded-sm" />
                    <div className="w-full h-24 bg-primary-600 rounded-sm" />
                    <div className="w-full h-14 bg-primary-400 rounded-sm" />
                  </div>
                </div>
              </Card>

              {/* Floating Icon Cards */}
              <Card variant="glass" className="absolute top-32 left-0 w-20 h-20 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <svg className="w-10 h-10 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </Card>

              <Card variant="glass" className="absolute bottom-32 left-10 w-20 h-20 flex items-center justify-center animate-float" style={{animationDelay: '2.5s'}}>
                <svg className="w-10 h-10 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Card>

              <Card variant="glass" className="absolute bottom-20 right-32 w-20 h-20 flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
                <svg className="w-10 h-10 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-hero text-foreground">
              Comprehensive OA Diagnostics
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Measure organizational ambidexterity across multiple dimensions with AI-powered insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="p-8 border-l-4 border-primary-500 hover:shadow-fluent-hover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle>Multi-Dimensional Analysis</CardTitle>
                <CardDescription>
                  Assess exploration, exploitation, and balance across leadership, culture, structure, and capabilities
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-l-4 border-accent-teal hover:shadow-fluent-hover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent-teal to-accent-green rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <CardTitle>Privacy-Preserving</CardTitle>
                <CardDescription>
                  Federated learning ensures your sensitive data never leaves your control while enabling insights
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-l-4 border-accent-purple hover:shadow-fluent-hover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle>Research-Backed</CardTitle>
                <CardDescription>
                  Built on doctoral research examining structural, sequential, and contextual approaches to OA
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 mica-surface relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-hero text-foreground">
            Ready to Measure Your Ambidexterity?
          </h2>
          <p className="text-subtitle">
            Join leading organizations using AmbiSight to balance exploration and exploitation
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="accent-glow">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="secondary" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
