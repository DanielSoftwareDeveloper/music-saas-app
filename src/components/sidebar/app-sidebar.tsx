"use server";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../ui/sidebar";
import { Credits } from "./credits";
import SidebarMenuItems from "./sidebar-menu-items";
import Upgrade from "./upgrade";
import UserButton from "./UserButton";

export async function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary mt-4 mb-12 flex flex-col items-start justify-start px-2 text-3xl font-black tracking-widest uppercase">
            <p>Retokie</p>
            <p className="text-lg">Songs Gen</p>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItems />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="mb-2 flex w-full items-center justify-center gap-1 text-xs">
          <Credits />
          <Upgrade />
        </div>
        <UserButton
          user={{
            name: "",
            email: "",
            avatar: "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
