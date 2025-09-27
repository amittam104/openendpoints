"use client";

import {
  HouseIcon,
  FolderIcon,
  FileTextIcon,
  PlusIcon,
  GearIcon,
} from "@phosphor-icons/react";
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
      isActive: false,
    },
    {
      title: "Endpoints",
      url: "/workspace/endpoints",
      icon: FileTextIcon,
      isActive: false,
    },
    {
      title: "Create",
      url: "/workspace/create",
      icon: PlusIcon,
      isActive: false,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: GearIcon,
      isActive: false,
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
