import { Button } from '@/components/ui/button';
import { QueryProvider } from '@/lib/providers/query-provider';
import { useAppStore } from '@/store/app-store';
import { useEffect, useState } from 'react';

function App() {
  const { theme, toggleTheme } = useAppStore();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My App</h1>
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </header>
        <main>
          <div className="rounded-lg border border-border p-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to your React Boilerplate</h2>
            <p className="text-muted-foreground mb-4">
              This boilerplate includes React, TypeScript, Vite, ESLint, Prettier, TanStack Query,
              Zustand, and shadcn/ui. Version 2.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

// Wrap the app with necessary providers
export default function AppWithProviders() {
  return (
    <QueryProvider>
      <App />
    </QueryProvider>
  );
}
