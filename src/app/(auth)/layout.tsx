import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "~/components/providers";
import { Toaster } from "~/components/ui/sonner";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import Blobs from "~/components/shared/general/Blobs";

export const metadata: Metadata = {
  title: "Music Generator",
  description: "Music Generator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${geist.variable} flex min-h-svh flex-col bg-neutral-800/70`}
    >
      <Link
        href="/"
        className={buttonVariants({
          variant: "secondary",
          className: "absolute top-4 left-4",
        })}
      >
        Back to home
      </Link>
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Blobs />
      </div>
      <Providers>
        {children}
        <Toaster />
      </Providers>
    </div>
  );
}
