"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function LogOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/auth/sign-in");
  };

  return <Button onClick={handleSignOut}>LogOut</Button>;
}
export default LogOut;
