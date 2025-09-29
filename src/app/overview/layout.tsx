import "~/styles/globals.css";

import { type Metadata } from "next";
import { Providers } from "~/components/providers";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { Separator } from "~/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "~/components/ui/breadcrumb";
import BreadcrumbPageClient from "~/components/sidebar/breadcrumb-page-client";
import SoundBar from "~/components/sound-bar";
import { ModeToggle } from "~/components/theme/ModeToggle";

export const metadata: Metadata = {
  title: "Home",
  description: "Music Generator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex h-screen flex-col">
          <header className="bg-background sticky-top z-10 flex items-center justify-between border-b px-4 py-2">
            <div className="flex shrink-0 grow items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPageClient />
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {/*<ModeToggle />*/}
          </header>
          <main className="flex-1 overflow-y-auto">{children}</main>
          <SoundBar />
        </SidebarInset>
      </SidebarProvider>
    </Providers>
  );
}
