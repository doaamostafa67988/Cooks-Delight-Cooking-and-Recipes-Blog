// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import RecipesPage from "@/pages/RecipesPage";
export const Route = createFileRoute("/recipes")({
  head: () => ({ meta: [{ title: "Recipes — Cooks Delight" }] }),
  component: RecipesPage,
});
