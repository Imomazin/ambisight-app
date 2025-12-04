import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        AmbiSight UI Refresh Test
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl text-center">
        This is a simplified AmbiSight landing page used to verify the new Git + PR workflow
        and deployment pipeline.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/register">
          <Button size="lg" variant="primary" className="px-8">
            Start Free Assessment
          </Button>
        </Link>

        <Button size="lg" variant="outline" className="px-8">
          Talk to Us
        </Button>
      </div>
    </main>
  );
}
