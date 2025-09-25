"use client";

import { ModeToggle } from "~/components/theme/ModeToggle";

import MainWrapper from "../general/MainWrapper";
import Logo from "../general/Logo";
import NavbarRoutes from "./NavbarRoutes";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";
import { UserDropdown } from "./UserDropdown";

function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="bg-card sticky top-0 z-40 h-20 border-b">
      <MainWrapper className="flex h-full items-center justify-between">
        <div className="flex items-center gap-x-12">
          <Logo />
          <NavbarRoutes />
        </div>
        <div className="flex items-center gap-x-4">
          <Sidebar />
          {isPending ? null : session ? (
            <>
              <UserDropdown
                name={
                  session?.user.name && session.user.name.length > 0
                    ? session.user.name
                    : (session?.user.email?.split("@")[0] ?? "")
                }
                email={session.user.email}
                image={
                  session?.user.image ??
                  `https://avatar.vercel.sh/${session?.user.email}`
                }
              />
            </>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className={buttonVariants({ variant: "default" })}
              >
                Login
              </Link>
              <Link
                href="/auth/sign-up"
                className={buttonVariants({ variant: "outline" })}
              >
                Register
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
      </MainWrapper>
    </header>
  );
}
export default Navbar;
