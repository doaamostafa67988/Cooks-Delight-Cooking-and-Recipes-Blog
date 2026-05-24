// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "@/pages/AboutUs";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us — Cooks Delight" }] }),
  component: AboutUs,
});
