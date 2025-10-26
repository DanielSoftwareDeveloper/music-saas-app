"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";

function VerificationMessage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 space-y-8 w-full">
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Gmail"
          title="Go to Gmail"
          className={`${buttonVariants({ variant: "outline" })} w-full flex items-center justify-center gap-2`}
        >
          Open Gmail
        </Link>
        <Link
          href="https://outlook.live.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Outlook"
          title="Go to Outlook"
          className={`${buttonVariants({ variant: "outline" })} w-full flex items-center justify-center gap-2`}
        >
          Open Outlook
        </Link>
        <Link
          href="https://www.icloud.com/mail"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to iCloud Mail"
          title="Go to iCloud Mail"
          className={`${buttonVariants({ variant: "outline" })} w-full flex items-center justify-center gap-2`}
        >
          Open iCloud Mail
        </Link>
        <Link
          href="https://proton.me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Proton Mail"
          title="Go to Proton Mail"
          className={`${buttonVariants({ variant: "outline" })} w-full flex items-center justify-center gap-2`}
        >
          Open Proton Mail
        </Link>
      </div>
      <p className="text-sm text-muted-foreground">
        If you don&apos;t see the email, please check your spam folder.
      </p>
      <Link
        href="/auth/sign-in"
        className={`${buttonVariants({ variant: "outline" })} w-full`}
      >
        Back to Login
      </Link>
    </div>
  );
}

export default VerificationMessage;
