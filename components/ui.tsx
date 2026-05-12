import Link from 'next/link';
import { ReactNode } from 'react';

export const Card = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="rounded-lg border border-border bg-white p-4 shadow-sm">
    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate">{title}</h3>
    {children}
  </section>
);

export const Shell = ({ children }: { children: ReactNode }) => (
  <main className="mx-auto max-w-7xl space-y-4 p-6">
    <header className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-2xl font-semibold">Manifest ProjectOS</h1>
      <nav className="flex flex-wrap gap-2 text-sm">
        {['/', '/flynn', '/manifest', '/opportunities', '/agreements', '/milestones', '/compliance', '/relationships', '/finance-lite'].map((href) => (
          <Link key={href} className="rounded border border-border px-2 py-1 hover:bg-slate-100" href={href}>
            {href === '/' ? 'Executive' : href.replace('/', '')}
          </Link>
        ))}
      </nav>
    </header>
    {children}
  </main>
);
