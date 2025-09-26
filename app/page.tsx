import {
  PuzzlePieceIcon,
  FolderIcon,
  CardsIcon,
  NotePencilIcon,
  FileTextIcon,
  LockIcon,
  GithubLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl text-foreground border pt-14">
      <header className="mt-10 text-center">
        <h1
          className="text-7xl font-bold tracking-widest"
          style={{ fontFamily: "var(--font-pixelify-sans)" }}
        >
          OpenEndpoints
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Define and share API endpoint specifications quickly and clearly
        </p>
      </header>

      <section className="mt-10 border-t border-border bg-background">
        {/* Top bar with left GET STARTED tab and right command */}
        <div className="flex items-stretch border-b border-border">
          <button className="px-3 text-sm font-bold border-r border-border bg-background text-foreground">
            GET STARTED
          </button>
          <p className="px-3 py-3">Create your first endpoint</p>
          <div className="flex-1 flex items-center justify-end gap-2">
            <button
              className="cursor-pointer px-3 py-3 border-l bg-accent hover:bg-foreground hover:text-background delay-75 duration-300 ease-in-out"
              aria-label="Copy command"
            >
              Create Endpoint
            </button>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="my-20 border-y border-border grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left column - Standard Setup */}
        <div className="border-r border-border">
          <div className="bg-background">
            <div className="border-b border-border p-6">
              <h2 className="text-xl font-bold mb-1">Standard Setup</h2>
              <p className="text-sm text-muted-foreground">
                Sign up and get started
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  1
                </span>
                <span className="text-base">
                  Sign up and create your workspace
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  2
                </span>
                <span className="text-base">Create your first project</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  3
                </span>
                <span className="text-base">
                  Add API endpoints with simple forms
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  4
                </span>
                <span className="text-base">
                  Generate cards, markdown, or YAML exports
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  5
                </span>
                <span className="text-base">
                  Share specifications with your backend team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Quick Start for non-signed-in users */}
        <div>
          <div className="bg-background h-full">
            <div className="border-b border-border p-6">
              <h2 className="text-xl font-bold mb-1">Quick Start</h2>
              <p className="text-sm text-muted-foreground">
                No sign-in required
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  1
                </span>
                <span className="text-base">
                  Create endpoints without signing in
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  2
                </span>
                <span className="text-base">
                  Build your API specifications instantly
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  3
                </span>
                <span className="text-base">
                  Export as cards, markdown, or YAML
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-full text-sm font-bold text-muted-foreground">
                  4
                </span>
                <span className="text-base">Copy and use immediately</span>
              </div>
            </div>
            <div className="px-6 py-3 border-t border-border bg-muted/50">
              <p className="text-xs text-muted-foreground">
                * You&apos;ll miss out on project saving, sharing, and
                management features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features section - full width */}
      <section className=" grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="border-t border-border p-8 hover:bg-accent/50 delay-75 duration-300 ease-in-out bg-background">
          <div className="flex items-center gap-2 text-sm uppercase text-muted-foreground mb-1">
            <PuzzlePieceIcon className="w-4 h-4" weight="duotone" />
            SIMPLE
          </div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg">
              Create API endpoints with ease
            </h3>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            Minimal form for name, method, path, and JSON examples.
          </p>
        </div>

        <div className="border-t border-x border-border p-8 hover:bg-accent/50 delay-75 duration-300 ease-in-out bg-background">
          <div className="flex items-center gap-1 text-sm  uppercase text-muted-foreground mb-1">
            <FolderIcon className="w-4 h-4" weight="duotone" />
            ORGANIZE
          </div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg">
              Manage projects efficiently
            </h3>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            Create projects and organize multiple endpoints per app.
          </p>
        </div>

        <div className="border-t border-border p-8 hover:bg-accent/50 delay-75 duration-300 ease-in-out bg-background">
          <div className="flex items-center gap-1 text-sm  uppercase text-muted-foreground mb-1">
            <CardsIcon className="w-4 h-4" weight="duotone" />
            VISUAL
          </div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg">View endpoints as cards</h3>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            Clean visual cards summarizing each endpoint specification.
          </p>
        </div>

        <div className="border-t border-border p-8 hover:bg-accent/50 delay-75 duration-300 ease-in-out bg-background">
          <div className="flex items-center gap-1 text-sm  uppercase text-muted-foreground mb-1">
            <NotePencilIcon className="w-4 h-4" weight="duotone" />
            EXPORT
          </div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg">Generate markdown docs</h3>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            Copy‑pasteable docs ready for GitHub READMEs and wikis.
          </p>
        </div>

        <div className="border-t border-x border-border p-8 hover:bg-accent/50 delay-75 duration-300 ease-in-out bg-background">
          <div className="flex items-center gap-1 text-sm  uppercase text-muted-foreground mb-1">
            <FileTextIcon className="w-4 h-4" weight="duotone" />
            EXPORT
          </div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg">Export YAML format</h3>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            Simple YAML format for quick sharing or tooling.
          </p>
        </div>

        <div className="border-t border-border p-8 hover:bg-accent/50 delay-75 duration-300 ease-in-out bg-background">
          <div className="flex items-center gap-1 text-sm  uppercase text-muted-foreground mb-1">
            <LockIcon className="w-4 h-4" weight="duotone" />
            SECURE
          </div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg">Save with GitHub auth</h3>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            Sign in with GitHub to save and manage your projects.
          </p>
        </div>
      </section>

      {/* Footer section */}
      <footer className="border-t border-border bg-background">
        <div className="flex items-stretch">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors py-8 border-r border-border"
          >
            <GithubLogoIcon className="w-6 h-6" weight="duotone" />
            <span className="text-base font-medium">GitHub</span>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors py-8"
          >
            <XLogoIcon className="w-6 h-6" weight="duotone" />
            <span className="text-base font-medium">X</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
