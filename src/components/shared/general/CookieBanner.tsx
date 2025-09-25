"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 max-w-md">
      <Card className="rounded-xl border border-gray-300 bg-white shadow-lg dark:bg-neutral-900">
        <CardContent className="flex flex-col gap-3 p-4">
          <p className="text-center text-xs text-gray-700 dark:text-gray-300">
            Usamos cookies para mejorar la experiencia de usuario 🍪{" "}
            <a
              href="/cookies"
              className="underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Más info
            </a>
          </p>
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => handleConsent("rejected")}
            >
              Rechazar
            </Button>
            <Button
              size="sm"
              className="text-xs"
              onClick={() => handleConsent("accepted")}
            >
              Aceptar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
