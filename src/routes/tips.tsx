// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import CookingTips from "@/pages/CookingTips";
export const Route = createFileRoute("/tips")({
  head: () => ({ meta: [{ title: "Cooking Tips — Cooks Delight" }] }),
  component: CookingTips,
});
