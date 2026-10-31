import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos/transparencia")({
  beforeLoad: () => { throw redirect({ to: "/quem-somos/parcerias-e-transparencia", statusCode: 301 }); },
});
