"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import {
  GithubLogoIcon,
  MoonIcon,
  SidebarIcon,
  SunDimIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useTheme } from "next-themes";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2">
        <div className="flex items-center h-full w-[16rem] border-r border-border">
          <Link
            href="/"
            className="group flex items-center px-3 py-auto h-full border-r border-border hover:bg-accent/50 delay-75 duration-300 ease-in-out"
            aria-label="OpenEndpoints home"
          >
            {currentTheme === "dark" ? (
              <Image
                src="/logo-dark.svg"
                alt="OpenEndpoints"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/logo.svg"
                alt="OpenEndpoints"
                width={40}
                height={40}
              />
            )}
          </Link>
          <p
            style={{ fontFamily: "var(--font-pixelify-sans)" }}
            className="px-3 text-xl font-bold tracking-wide"
          >
            OpenEndpoints
          </p>
        </div>
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon weight="duotone" />
        </Button>
        <div className="ml-auto h-full flex items-center gap-0">
          <Link
            href="#"
            aria-label="GitHub"
            className="h-full border-x border-border px-3 flex items-center hover:bg-accent/50 delay-75 duration-300 ease-in-out"
          >
            <GithubLogoIcon size={20} weight="duotone" />
          </Link>
          <Link
            href="/changelog"
            className="border-r border-border px-3 h-full flex items-center hover:bg-accent/50 delay-75 duration-300 ease-in-out"
          >
            Changelog
          </Link>

          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            aria-label="Toggle theme"
            className="px-3 py-auto h-full flex items-center cursor-pointer hover:bg-accent/50 delay-75 duration-300 ease-in-out"
          >
            {currentTheme === "light" ? (
              <SunDimIcon size={20} weight="duotone" />
            ) : (
              <MoonIcon size={20} weight="duotone" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
