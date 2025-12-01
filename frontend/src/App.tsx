import React from "react";
import { apiEndpoints } from "./config/endpoints";
import type { ApiEndpoint } from "./types/api";
import { EndpointCard } from "./components/EndpointCard";
import { ApiDialog } from "./components/ApiDialog";

// Top-level application shell rendering the landing page and endpoint grid.
export default function App() {
  const [selected, setSelected] = React.useState<ApiEndpoint | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleOpen = (endpoint: ApiEndpoint) => {
    setSelected(endpoint);
    setDialogOpen(true);
  };

  const handleDialogChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setSelected(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-gradient-radial opacity-70" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-4 pb-16 pt-12 md:px-8 md:pt-16">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700/70 backdrop-blur-xs">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.55)]" />
              FastAPI · OpenAI · Vercel-ready
            </p>
            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                My First LLM-powered Application with Vercel
              </h1>
              <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
                A clean, modern control surface for your supportive mental coach
                backend. Explore each API endpoint, inspect responses, and feel
                confident it&apos;s ready to ship.
              </p>
            </div>
          </div>
          <div className="glass-surface animate-float-slow w-full max-w-xs rounded-3xl p-4 text-xs text-slate-200 md:text-sm">
            <p className="font-semibold text-slate-100">
              Backend connection
            </p>
            <p className="mt-1 text-slate-300">
              This UI talks to your FastAPI server running at:
            </p>
            <p className="mt-2 font-mono text-[11px] text-emerald-300">
              {import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000"}
            </p>
            <p className="mt-3 text-[11px] text-slate-400">
              Make sure the backend is running before you click any of the
              endpoint cards.
            </p>
          </div>
        </header>

        <main className="space-y-4">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Backend endpoints, TRY ME!
            </h2>
            <p className="text-sm text-slate-300">Click on the endpoint you want to try and see the response.</p>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {apiEndpoints.map((endpoint) => (
              <EndpointCard
                key={endpoint.id}
                endpoint={endpoint}
                onClick={() => handleOpen(endpoint)}
              />
            ))}
          </section>
        </main>

        <footer className="mt-auto border-t border-slate-800/70 pt-4 text-[11px] text-slate-500 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <p>
            Built with React, Vite, TailwindCSS, and shadcn-inspired components.
            Ready to be deployed on Vercel once your backend is live.
          </p>
          <p className="text-[10px] tracking-[0.24em] uppercase text-slate-500/70">
            by{" "}
            <span className="font-semibold text-slate-300/80">
              Bharath Markande
            </span>
          </p>
        </footer>

        <ApiDialog
          open={dialogOpen}
          onOpenChange={handleDialogChange}
          endpoint={selected}
        />
      </div>
    </div>
  );
}


