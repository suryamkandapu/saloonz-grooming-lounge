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
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { WhatsAppFab } from "../components/site/WhatsAppFab";
import { Loader } from "../components/site/Loader";
import { CustomCursor } from "../components/site/CustomCursor";

function NotFoundComponent() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a", color: "#f5f0eb", textAlign: "center", padding: 24 }}>
      <div>
        <h1 className="display" style={{ fontSize: 96, color: "#c9a84c" }}>404</h1>
        <p style={{ marginTop: 12, opacity: .7 }}>This page slipped past the chair.</p>
        <Link to="/" className="btn" style={{ marginTop: 28 }}>Return Home</Link>
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
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a", color: "#f5f0eb", textAlign: "center", padding: 24 }}>
      <div>
        <h1 className="display" style={{ fontSize: 48, color: "#c9a84c" }}>Something broke the mirror.</h1>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => { router.invalidate(); reset(); }} className="btn">Try again</button>
          <a href="/" className="btn btn-ghost">Go home</a>
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
      { title: "Saloonz — The Grooming Lounge" },
      { name: "description", content: "Premium Indian salon & grooming lounge. Cinematic haircuts, royal beard rituals, bridal grooming and skin care. Est. 2010." },
      { name: "author", content: "Saloonz" },
      { property: "og:title", content: "Saloonz — The Grooming Lounge" },
      { property: "og:description", content: "A luxury Indian grooming lounge. Cinematic, editorial, premium." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <Loader />
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
