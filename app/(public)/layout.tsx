import Link from 'next/link';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-2xl font-semibold text-foreground">AmbiSight</span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-neutral-700 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="/about" className="text-neutral-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-neutral-700 hover:text-primary transition-colors">
                Pricing
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/signin" className="text-neutral-700 hover:text-primary transition-colors">
                Sign In
              </Link>
              <Link
                href="/signup"
                className="fluent-button-primary px-6 py-2 rounded-lg text-white font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-200 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">AmbiSight</h3>
              <p className="text-sm text-neutral-600">
                Precision diagnostics for organizational ambidexterity.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="/features" className="hover:text-primary">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-primary">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="#" className="hover:text-primary">Documentation</Link></li>
                <li><Link href="#" className="hover:text-primary">Research</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link href="#" className="hover:text-primary">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary">Privacy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-600">
            © 2025 AmbiSight. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
