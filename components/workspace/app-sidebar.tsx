"use client";

import { HouseIcon, FolderIcon, GearIcon } from "@phosphor-icons/react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/workspace/nav-main";
import { NavUser } from "@/components/workspace/nav-user";
import WorkspaceSwitcher from "./workspace-switcher";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navMain = [
    {
      title: "Home",
      url: "/workspace",
      icon: HouseIcon,
      isActive: true,
    },
    {
      title: "Projects",
      url: "/workspace/projects",
      icon: FolderIcon,
      isActive: true,
      items: [{ title: "Create Project", url: "/workspace/projects/create" }],
    },
    {
      title: "Settings",
      url: "/workspace/profile",
      icon: GearIcon,
      isActive: true,
      items: [
        { title: "Profile", url: "/settings/profile" },
        { title: "Workspace", url: "/settings/workspace" },
      ],
    },
  ];

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <WorkspaceSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
