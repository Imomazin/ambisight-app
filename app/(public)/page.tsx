import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AmbiSightLogo } from '@/components/branding/AmbiSightLogo';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <AmbiSightLogo size="md" showText />

          {/* Center Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium text-text-primary hover:text-fluent-blue transition-colors">
              Product
            </a>
            <a href="#research" className="text-sm font-medium text-text-primary hover:text-fluent-blue transition-colors">
              Research
            </a>
            <a href="#pricing" className="text-sm font-medium text-text-primary hover:text-fluent-blue transition-colors">
              Pricing
            </a>
            <a href="#resources" className="text-sm font-medium text-text-primary hover:text-fluent-blue transition-colors">
              Resources
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Microsoft Copilot Style */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 fluent-gradient-primary opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fluent-teal/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fluent-blue/10 rounded-full mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-fluent-blue animate-pulse"></div>
              <span className="text-sm font-medium text-fluent-blue">Research-Driven Organisational Diagnostics</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-tight animate-slide-up">
              AmbiSight
              <span className="block text-fluent-blue mt-2">
                Precision Diagnostics
              </span>
              <span className="block text-text-secondary text-4xl md:text-5xl mt-2">
                for Organisational Ambidexterity
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl leading-relaxed animate-slide-up">
              Measure the balance between <span className="text-fluent-blue font-semibold">exploration</span> and{' '}
              <span className="text-fluent-purple font-semibold">exploitation</span> across your organisation.
              Privacy-preserving diagnostics powered by federated learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in">
              <Link href="/register">
                <Button
                  size="lg"
                  variant="primary"
                  className="fluent-button-primary px-8 py-4 text-lg font-semibold"
                >
                  Start Free Assessment
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-border hover:border-fluent-blue hover:bg-fluent-blue/5 transition-all"
              >
                Book Expert Walkthrough
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-text-tertiary">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-fluent-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>5+ OA Dimensions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-fluent-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Data Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-fluent-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Research-Backed Framework</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Comprehensive Organisational Intelligence
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Built on rigorous doctoral research with multi-dimensional assessment capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fluent-card p-8 hover:shadow-fluent-lg transition-all group">
              <div className="w-14 h-14 rounded-fluent bg-gradient-to-br from-fluent-blue to-fluent-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Multi-Dimensional Diagnostics</h3>
              <p className="text-text-secondary leading-relaxed">
                Assess exploration, exploitation, and balance across leadership, culture, structure,
                market orientation, and dynamic capabilities
              </p>
            </div>

            <div className="fluent-card p-8 hover:shadow-fluent-lg transition-all group">
              <div className="w-14 h-14 rounded-fluent bg-gradient-to-br from-fluent-purple to-fluent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Privacy-Preserving</h3>
              <p className="text-text-secondary leading-relaxed">
                Federated learning architecture ensures your sensitive organisational data
                never leaves your control, while still enabling cross-org insights
              </p>
            </div>

            <div className="fluent-card p-8 hover:shadow-fluent-lg transition-all group">
              <div className="w-14 h-14 rounded-fluent bg-gradient-to-br from-fluent-teal to-fluent-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">DBA Research-Backed</h3>
              <p className="text-text-secondary leading-relaxed">
                Built on doctoral research examining structural, sequential, and contextual
                approaches to organisational ambidexterity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Credentials Section */}
      <section id="research" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fluent-purple/10 rounded-full mb-6">
              <svg className="w-5 h-5 text-fluent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-fluent-purple">Research-Backed Methodology</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Built on Rigorous Doctoral Research
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              AmbiSight is grounded in comprehensive doctoral research examining organisational ambidexterity across multiple dimensions. Our methodology has been validated through extensive interviews and survey data with industry leaders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-background-secondary rounded-fluent">
                <div className="text-3xl font-bold text-fluent-blue mb-2">250+</div>
                <div className="text-sm text-text-secondary">Research Participants</div>
              </div>
              <div className="p-6 bg-background-secondary rounded-fluent">
                <div className="text-3xl font-bold text-fluent-teal mb-2">5</div>
                <div className="text-sm text-text-secondary">OA Dimensions Assessed</div>
              </div>
              <div className="p-6 bg-background-secondary rounded-fluent">
                <div className="text-3xl font-bold text-fluent-purple mb-2">3</div>
                <div className="text-sm text-text-secondary">Ambidexterity Approaches</div>
              </div>
            </div>

            <Button variant="outline" size="lg">
              View Methodology →
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section id="product" className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How AmbiSight Works
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Three simple steps to unlock your organisation&apos;s ambidexterity potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="fluent-card p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fluent-blue to-fluent-teal flex items-center justify-center text-white font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Configure Your Diagnostic
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Set up your organisation profile and select your diagnostic template. Choose from structural, sequential, or contextual ambidexterity frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-fluent-blue/10 text-fluent-blue text-xs font-medium rounded-full">
                    Customizable
                  </span>
                  <span className="px-3 py-1 bg-fluent-teal/10 text-fluent-teal text-xs font-medium rounded-full">
                    5 min setup
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="fluent-card p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fluent-purple to-fluent-blue flex items-center justify-center text-white font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Launch Assessment
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Deploy your assessment across business units and collect responses. Our privacy-preserving federated learning ensures data stays within your control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-fluent-purple/10 text-fluent-purple text-xs font-medium rounded-full">
                    Secure
                  </span>
                  <span className="px-3 py-1 bg-fluent-blue/10 text-fluent-blue text-xs font-medium rounded-full">
                    Real-time
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="fluent-card p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fluent-teal to-fluent-purple flex items-center justify-center text-white font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Review Insights
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Analyze heatmaps, profiles, and AI-generated recommendations. Export board-ready reports and track progress over time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-fluent-teal/10 text-fluent-teal text-xs font-medium rounded-full">
                    AI-powered
                  </span>
                  <span className="px-3 py-1 bg-fluent-purple/10 text-fluent-purple text-xs font-medium rounded-full">
                    Actionable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 fluent-gradient-soft opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Ready to See Your Ambidexterity Profile?
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Join leading organisations using AmbiSight to balance exploration and exploitation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register">
              <Button size="lg" variant="primary" className="px-8 py-4 text-lg font-semibold">
                Start Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold">
              Talk to Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <AmbiSightLogo size="sm" showText />
            </div>
            <p className="text-sm text-text-tertiary">
              © {new Date().getFullYear()} AmbiSight. Precision diagnostics for organisational ambidexterity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
