"use client";

import { GithubLogoIcon, MoonIcon, SunDimIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function RootHeader() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("system");

  useEffect(() => {
    setCurrentTheme((theme === "system" ? "light" : theme) || "light");
  }, [theme]);

  return (
    <header className="fixed w-full top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-14 items-center gap-3">
        {/* Brand - left */}
        <Link
          href="/"
          className="group flex items-center gap-2 hover:bg-accent/50"
          aria-label="OpenEndpoints home"
        >
          <Image src="/logo.png" alt="OpenEndpoints" width={100} height={100} />
        </Link>

        {/* Right actions */}
        <div className="ml-auto h-full flex items-center gap-0">
          <Link
            href="#"
            aria-label="GitHub"
            className="h-full border-x border-border px-3 flex items-center hover:bg-accent/50"
          >
            <GithubLogoIcon size={20} weight="duotone" />
          </Link>
          <Link
            href="/changelog"
            className="border-r border-border px-3 h-full flex items-center hover:bg-accent/50"
          >
            Changelog
          </Link>

          <Link
            href="/signup"
            className="border-r border-border px-3 h-full flex items-center hover:bg-accent/50"
          >
            Sign up
          </Link>

          <Link
            href="/endpoint/new"
            className="border-r border-border px-3 h-full flex items-center hover:bg-accent/50"
          >
            Create endpoint
          </Link>

          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            aria-label="Toggle theme"
            className="px-3 py-auto h-full flex items-center cursor-pointer hover:bg-accent/50"
          >
            {currentTheme === "light" ? (
              <SunDimIcon size={20} weight="duotone" />
            ) : (
              <MoonIcon size={20} weight="duotone" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default RootHeader;
