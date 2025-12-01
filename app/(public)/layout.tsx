'use client';

import Link from 'next/link';
import { AmbiSightLogo } from '@/components/branding/AmbiSightLogo';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const navigationLinks = [
  { name: 'Product', href: '/#product' },
  { name: 'Research', href: '/#research' },
  { name: 'Use cases', href: '/#use-cases' },
  { name: 'Pricing', href: '/#pricing' },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-ambi-bgPage">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-ambi-bgSurface/80 backdrop-blur-glass border-b border-ambi-borderSubtle shadow-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <AmbiSightLogo size="md" showText linkTo="/" />
            </div>

            {/* Center Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-ambi-textMuted hover:text-ambi-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/login')}
              >
                Sign in
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => router.push('/signup')}
                className="hidden sm:flex"
              >
                Start free diagnostic
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-ambi-bgSurface border-t border-ambi-borderSubtle mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="col-span-1">
              <AmbiSightLogo size="md" showText linkTo="/" />
              <p className="mt-4 text-sm text-ambi-textMuted">
                Strategic insights for organizational ambidexterity
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-sm font-semibold text-ambi-textMain mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#features" className="text-sm text-ambi-textMuted hover:text-ambi-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-sm text-ambi-textMuted hover:text-ambi-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/diagnostics" className="text-sm text-ambi-textMuted hover:text-ambi-primary transition-colors">
                    Diagnostics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Research Column */}
            <div>
              <h3 className="text-sm font-semibold text-ambi-textMain mb-4">Research</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#research" className="text-sm text-ambi-textMuted hover:text-ambi-primary transition-colors">
                    Methodology
                  </Link>
                </li>
                <li>
                  <Link href="/#research" className="text-sm text-ambi-textMuted hover:text-ambi-primary transition-colors">
                    Publications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-ambi-textMain mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#about" className="text-sm text-ambi-textMuted hover:text-ambi-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-sm text-ambi-textMuted hover:text-ambi-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-ambi-borderSubtle">
            <p className="text-sm text-ambi-textSoft text-center">
              © {new Date().getFullYear()} AmbiSight. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
