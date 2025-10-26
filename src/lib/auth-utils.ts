import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import { siteConfig } from "~/config/site-config";

export const requireAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return session;
};

export const requireUnAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect(siteConfig.panelPath);
  }

  return session;
};
