"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";

export default function Upgrade() {
  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "cc849e9b-6b45-403b-b733-730a3f49f040",
        "952ba74b-f042-4330-b224-bc5835e162a4",
        "d2cd34e1-bcbe-4149-a55c-7d38e5d60440",
      ],
    });
  };
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-2 cursor-pointer text-orange-400"
      onClick={upgrade}
    >
      Upgrade
    </Button>
  );
}
