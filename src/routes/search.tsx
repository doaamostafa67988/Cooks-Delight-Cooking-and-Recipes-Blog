// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import RecipesPage from "@/pages/RecipesPage";
export const Route = createFileRoute("/search")({
  head: () => ({ meta: [{ title: "Search — Cooks Delight" }] }),
  validateSearch: (s: Record<string, unknown>) => ({ search: (s.search as string) || "" }),
  component: RecipesPage,
});
