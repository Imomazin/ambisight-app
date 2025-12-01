import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section - Microsoft Summit Style with Floating Cards */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
        {/* Ambient Gradient Blobs */}
        <div className="ambient-blob w-96 h-96 bg-primary top-20 right-20" style={{ animationDelay: '0s' }}></div>
        <div className="ambient-blob w-80 h-80 bg-accent-teal bottom-40 left-10" style={{ animationDelay: '2s' }}></div>
        <div className="ambient-blob w-64 h-64 bg-accent-purple top-1/2 left-1/3" style={{ animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="max-w-xl">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-pill mb-6 animate-fade-in border border-border-light">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-eyebrow text-primary">Research-Driven Diagnostics</span>
              </div>

              {/* Headline */}
              <h1 className="text-hero font-semibold text-text-main mb-6 leading-tight animate-slide-up">
                AmbiSight
                <span className="block text-primary mt-1">
                  Precision Diagnostics
                </span>
                <span className="block text-text-muted text-h2 mt-2 font-medium">
                  for Organisational Ambidexterity
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-text-secondary mb-8 leading-relaxed animate-slide-up">
                Measure the balance between <span className="text-primary font-semibold">exploration</span> and{' '}
                <span className="text-accent-purple font-semibold">exploitation</span> across your organisation.
                Privacy-preserving diagnostics powered by federated learning.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="primary"
                    className="px-8 py-3 font-semibold hover:scale-105 hover:shadow-fluent-hover transition-all"
                  >
                    Start Free Assessment
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 font-semibold hover:scale-105 transition-all"
                >
                  Book Expert Walkthrough
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-text-soft">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5+ OA Dimensions</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Data Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Research-Backed</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Cards Visual */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Main Hero Card - Complex Visual */}
              <div className="absolute top-10 right-0 w-96 glass-card rounded-card p-6 float-card" style={{ animationDelay: '0s' }}>
                {/* Mini Chat Row */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border-light">
                  <div className="w-8 h-8 rounded-full bg-gradient-pill"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-text-primary">AI Insights Ready</div>
                    <div className="text-xs text-text-muted">Analysis complete • 2 min ago</div>
                  </div>
                </div>

                {/* Stat Chips */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="px-4 py-3 bg-primary-soft rounded-fluent">
                    <div className="text-2xl font-bold text-primary">72</div>
                    <div className="text-xs text-text-muted">Exploration</div>
                  </div>
                  <div className="px-4 py-3 bg-accent-purple/10 rounded-fluent">
                    <div className="text-2xl font-bold text-accent-purple">68</div>
                    <div className="text-xs text-text-muted">Exploitation</div>
                  </div>
                </div>

                {/* Mini Chart Placeholder */}
                <div className="h-24 bg-gradient-card rounded-fluent flex items-end justify-around p-3 gap-1">
                  <div className="w-full h-12 bg-primary/40 rounded-sm"></div>
                  <div className="w-full h-20 bg-primary/60 rounded-sm"></div>
                  <div className="w-full h-16 bg-primary/50 rounded-sm"></div>
                  <div className="w-full h-24 bg-primary/70 rounded-sm"></div>
                  <div className="w-full h-14 bg-primary/40 rounded-sm"></div>
                </div>
              </div>

              {/* Floating Icon Tile 1 - Shield */}
              <div className="absolute top-32 left-0 w-20 h-20 glass-card rounded-fluent flex items-center justify-center float-card" style={{ animationDelay: '1s' }}>
                <svg className="w-10 h-10 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* Floating Icon Tile 2 - Chart */}
              <div className="absolute top-80 left-10 w-20 h-20 glass-card rounded-fluent flex items-center justify-center float-card" style={{ animationDelay: '2s' }}>
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>

              {/* Floating Icon Tile 3 - Clipboard */}
              <div className="absolute bottom-20 right-32 w-20 h-20 glass-card rounded-fluent flex items-center justify-center float-card" style={{ animationDelay: '3s' }}>
                <svg className="w-10 h-10 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>

              {/* Floating Icon Tile 4 - Spark */}
              <div className="absolute bottom-32 left-24 w-20 h-20 glass-card rounded-fluent flex items-center justify-center float-card" style={{ animationDelay: '4s' }}>
                <svg className="w-10 h-10 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AmbiSight - Premium Feature Section */}
      <section className="py-20 bg-bg-page">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-eyebrow text-primary mb-3">WHY AMBISIGHT</div>
            <h2 className="text-h1 text-text-main mb-4">
              Comprehensive Organisational Intelligence
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Built on rigorous doctoral research with multi-dimensional assessment capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 - Multi-Dimensional */}
            <div className="premium-card p-8 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary-soft rounded-pill text-xs font-medium text-primary">
                  <span>5 Dimensions</span>
                </div>
              </div>
              <h3 className="text-h3 text-text-main mb-3">Multi-Dimensional Diagnostics</h3>
              <p className="text-text-secondary leading-relaxed">
                Assess exploration, exploitation, and balance across leadership, culture, structure,
                market orientation, and dynamic capabilities.
              </p>
            </div>

            {/* Feature 2 - Privacy */}
            <div className="premium-card p-8 border-l-4 border-accent-teal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-accent-teal to-accent-purple flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent-teal/10 rounded-pill text-xs font-medium text-accent-teal">
                  <span>Enterprise-Ready</span>
                </div>
              </div>
              <h3 className="text-h3 text-text-main mb-3">Privacy-Preserving Architecture</h3>
              <p className="text-text-secondary leading-relaxed">
                Federated learning ensures your sensitive organisational data
                never leaves your control, while still enabling cross-org insights.
              </p>
            </div>

            {/* Feature 3 - Research */}
            <div className="premium-card p-8 border-l-4 border-accent-purple">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-fluent bg-gradient-to-br from-accent-purple to-primary flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent-purple/10 rounded-pill text-xs font-medium text-accent-purple">
                  <span>Research-Backed</span>
                </div>
              </div>
              <h3 className="text-h3 text-text-main mb-3">DBA Research Foundation</h3>
              <p className="text-text-secondary leading-relaxed">
                Built on doctoral research examining structural, sequential, and contextual
                approaches to organisational ambidexterity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Methodology - Two Column */}
      <section id="research" className="py-20 bg-bg-elevated">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="text-eyebrow text-accent-purple mb-3">RESEARCH & METHODOLOGY</div>
              <h2 className="text-h1 text-text-main mb-6">
                Built on Rigorous Doctoral Research
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                AmbiSight is grounded in comprehensive doctoral research examining organisational ambidexterity across multiple dimensions. Our methodology has been validated through extensive interviews and survey data with industry leaders.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-primary-soft rounded-fluent text-center">
                  <div className="text-2xl font-bold text-primary mb-1">250+</div>
                  <div className="text-xs text-text-muted">Research Participants</div>
                </div>
                <div className="p-4 bg-accent-teal/10 rounded-fluent text-center">
                  <div className="text-2xl font-bold text-accent-teal mb-1">5</div>
                  <div className="text-xs text-text-muted">OA Dimensions</div>
                </div>
                <div className="p-4 bg-accent-purple/10 rounded-fluent text-center">
                  <div className="text-2xl font-bold text-accent-purple mb-1">3</div>
                  <div className="text-xs text-text-muted">OA Approaches</div>
                </div>
              </div>

              <Button variant="outline" size="lg">
                View Full Methodology →
              </Button>
            </div>

            {/* Right: Timeline Card */}
            <div className="premium-card p-8">
              <h3 className="text-h3 text-text-main mb-6">Research Timeline</h3>
              <div className="space-y-6">
                {/* Timeline Item 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-fluent bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-main mb-1">Literature Review</div>
                    <div className="text-sm text-text-secondary">Comprehensive analysis of OA frameworks and empirical studies</div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-fluent bg-gradient-to-br from-accent-teal to-accent-purple flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-main mb-1">Qualitative Interviews</div>
                    <div className="text-sm text-text-secondary">In-depth interviews with 50+ industry leaders across sectors</div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-fluent bg-gradient-to-br from-accent-purple to-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-main mb-1">Survey Validation</div>
                    <div className="text-sm text-text-secondary">Large-scale survey with 250+ participants validating the framework</div>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-fluent bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-main mb-1">Platform Development</div>
                    <div className="text-sm text-text-secondary">Building AmbiSight with privacy-preserving federated learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screens Strip */}
      <section id="product" className="py-20 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-eyebrow text-primary mb-3">PRODUCT SHOWCASE</div>
            <h2 className="text-h1 text-text-main mb-4">
              See AmbiSight in Action
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore our intuitive interface designed for clarity and actionable insights
            </p>
          </div>

          {/* Horizontally Scrollable Cards */}
          <div className="overflow-x-auto pb-6 -mx-6 px-6">
            <div className="flex gap-6 min-w-max">
              {/* Screen 1 - Dashboard */}
              <div className="premium-card p-6 w-96">
                <div className="h-56 bg-gradient-card rounded-fluent mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div className="text-sm font-medium text-text-muted">Dashboard Overview</div>
                  </div>
                </div>
                <h3 className="text-h3 text-text-main mb-2">Real-Time Dashboard</h3>
                <p className="text-sm text-text-secondary">Track KPIs, trends, and AI insights across all business units in one unified view.</p>
              </div>

              {/* Screen 2 - Heatmap */}
              <div className="premium-card p-6 w-96">
                <div className="h-56 bg-gradient-card rounded-fluent mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-accent-teal mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <div className="text-sm font-medium text-text-muted">Unit Heatmap</div>
                  </div>
                </div>
                <h3 className="text-h3 text-text-main mb-2">Interactive Heatmaps</h3>
                <p className="text-sm text-text-secondary">Visualize ambidexterity profiles across departments with color-coded heatmaps.</p>
              </div>

              {/* Screen 3 - Reports */}
              <div className="premium-card p-6 w-96">
                <div className="h-56 bg-gradient-card rounded-fluent mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-accent-purple mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="text-sm font-medium text-text-muted">Reports & Export</div>
                  </div>
                </div>
                <h3 className="text-h3 text-text-main mb-2">Board-Ready Reports</h3>
                <p className="text-sm text-text-secondary">Export comprehensive reports with executive summaries and actionable recommendations.</p>
              </div>

              {/* Screen 4 - Assessment */}
              <div className="premium-card p-6 w-96">
                <div className="h-56 bg-gradient-card rounded-fluent mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-accent-amber mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <div className="text-sm font-medium text-text-muted">Assessment Builder</div>
                  </div>
                </div>
                <h3 className="text-h3 text-text-main mb-2">Custom Assessments</h3>
                <p className="text-sm text-text-secondary">Build tailored diagnostics with our flexible framework and question bank.</p>
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

    </>
  );
}
