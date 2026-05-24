// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import Login from "@/pages/Login";
export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Log In — Cooks Delight" }] }),
  component: Login,
});
