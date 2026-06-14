import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Background } from "@/components/site/Background";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <Background />
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <div className="font-display text-7xl font-black text-gradient">404</div>
        <h2 className="mt-4 text-xl font-semibold">Lost in the network</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This route doesn't exist. Let's get you back to building.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet to-magenta px-5 py-2.5 text-sm font-medium text-white"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <Background />
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="font-display text-2xl font-bold">Something didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A transient error occurred. Try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-xl bg-gradient-to-r from-violet to-magenta px-4 py-2 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ITTS — Engineering Technology That Accelerates Growth" },
      {
        name: "description",
        content:
          "I Trust Techno Solutions builds scalable software, AI, mobile, cloud and blockchain platforms for ambitious businesses.",
      },
      { name: "author", content: "ITTS" },
      { property: "og:title", content: "ITTS — Engineering Technology That Accelerates Growth" },
      {
        property: "og:description",
        content: "Custom software, AI, mobile, cloud and blockchain — engineered to accelerate growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ITTS — Engineering Technology That Accelerates Growth" },
      { name: "description", content: "ITTS builds scalable software platforms, mobile applications, AI-powered solutions, cloud infrastructure and enterprise systems for ambitious businesses." },
      { property: "og:description", content: "ITTS builds scalable software platforms, mobile applications, AI-powered solutions, cloud infrastructure and enterprise systems for ambitious businesses." },
      { name: "twitter:description", content: "ITTS builds scalable software platforms, mobile applications, AI-powered solutions, cloud infrastructure and enterprise systems for ambitious businesses." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b9f74576-1cbb-4c83-88d7-37143209e75a" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b9f74576-1cbb-4c83-88d7-37143209e75a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Background />
      <Header />
      <main className="relative pt-24">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
