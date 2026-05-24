// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import RecipeDetails from "@/pages/RecipeDetails";
export const Route = createFileRoute("/recipe/$id")({
  head: () => ({ meta: [{ title: "Recipe — Cooks Delight" }] }),
  component: RecipeDetails,
});
