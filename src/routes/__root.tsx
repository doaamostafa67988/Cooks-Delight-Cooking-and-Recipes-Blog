// @ts-nocheck
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import Navbar from "@/features/recipes/components/Navbar";

function NotFoundComponent() {
  return (
    <div className="site-shell">
      <div className="not-found-page">
        <div className="not-found-inner">
          <h1>Page Not Found</h1>
          <a href="/" className="button button-primary">Back home</a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="site-shell" style={{ textAlign: "center", padding: 40 }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button
        className="button button-primary"
        onClick={() => { router.invalidate(); reset(); }}
      >
        Try again
      </button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cooks Delight" },
      { name: "description", content: "Cooks Delight — explore handcrafted recipes, cooking tips, and culinary inspiration." },
      { property: "og:title", content: "Cooks Delight" },
      { property: "og:description", content: "Explore handcrafted recipes, cooking tips, and culinary inspiration." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
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
      <div className="nav-shell">
        <Navbar />
      </div>
      <Outlet />
    </QueryClientProvider>
  );
}
