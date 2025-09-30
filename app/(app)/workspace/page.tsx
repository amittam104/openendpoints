import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FolderIcon } from "@phosphor-icons/react/ssr";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function WorkspacePage() {
  // Get the user's default workspace
  // In a real implementation, this would come from the user's session
  // For now, we'll fetch the first workspace for the authenticated user
  const user = await prisma.user.findFirst({
    include: {
      workspaces: {
        take: 1, // Get only the first workspace
        orderBy: { createdAt: "desc" }, // Or order by most recently used
      },
    },
  });

  const workspace = user?.workspaces[0] || null;

  // Mocked UI data (UI-only; replace with real data later)
  const stats = {
    totalProjects: 3,
    totalEndpoints: 12,
    projectsDelta: "+12% this week",
    endpointsDelta: "+5% this week",
  };

  const projects = [
    {
      id: "p1",
      name: "Marketing Site",
      endpoints: 6,
      updatedAt: "2h ago",
      createdAt: "2 days ago",
      createdBy: "John Doe",
    },
    {
      id: "p2",
      name: "Mobile App API",
      endpoints: 9,
      updatedAt: "yesterday",
      createdAt: "1 week ago",
      createdBy: "Jane Smith",
    },
    {
      id: "p3",
      name: "Admin Dashboard",
      endpoints: 3,
      updatedAt: "3 days ago",
      createdAt: "2 weeks ago",
      createdBy: "John Doe",
    },
  ];

  const endpoints = [
    {
      id: "e1",
      method: "GET",
      path: "/users/{id}",
      project: "Mobile App API",
      updatedAt: "1h ago",
    },
    {
      id: "e2",
      method: "POST",
      path: "/auth/login",
      project: "Marketing Site",
      updatedAt: "4h ago",
    },
    {
      id: "e3",
      method: "PUT",
      path: "/projects/{id}",
      project: "Admin Dashboard",
      updatedAt: "yesterday",
    },
    {
      id: "e4",
      method: "DELETE",
      path: "/projects/{id}/endpoints/{id}",
      project: "Admin Dashboard",
      updatedAt: "2 days ago",
    },
    {
      id: "e5",
      method: "GET",
      path: "/feed",
      project: "Mobile App API",
      updatedAt: "3 days ago",
    },
  ];

  const methodStyle = (m: string) => {
    switch (m.toUpperCase()) {
      case "GET":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800";
      case "POST":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
      case "PUT":
        return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800";
      case "DELETE":
        return "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800";
      default:
        return "bg-muted text-foreground border-border";
    }
  };

  return (
    <main className="w-full">
      {/* Header */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between px-6 py-8">
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">Workspace</p>
              <h1 className="text-2xl font-semibold truncate">
                {workspace?.name ?? "Workspace"}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild size="sm">
                <Link href="/workspace/projects/create">Create Project</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/workspace/endpoints/create">Create Endpoint</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/play">Playground</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl p-6">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Link href="#projects" className="block group">
              <div className="border rounded-lg p-3 hover:bg-accent/50 transition-colors">
                <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                  Total Projects
                </p>
                <p className="text-xl font-semibold mt-1">
                  {stats.totalProjects}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {stats.projectsDelta}
                </p>
              </div>
            </Link>
            <Link href="#endpoints" className="block group">
              <div className="border rounded-lg p-3 hover:bg-accent/50 transition-colors">
                <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                  Total Endpoints
                </p>
                <p className="text-xl font-semibold mt-1">
                  {stats.totalEndpoints}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {stats.endpointsDelta}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="border-b border-border bg-background" id="projects">
        <div className="mx-auto max-w-6xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Projects</h2>
            <Button asChild variant="ghost" className="px-2 py-1">
              <Link href="/workspace/projects">View all</Link>
            </Button>
          </div>

          {projects.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center">
                <p className="text-sm text-muted-foreground">
                  You have no projects yet. Create one to get started!
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/workspace/projects/create">
                      Create your first project
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 5).map((p) => (
                <Card
                  key={p.id}
                  className="group transition-colors hover:bg-accent/50 py-2"
                >
                  <CardContent className="py-2 px-4">
                    <div className="flex items-center justify-between gap-2 text-sm uppercase text-muted-foreground mb-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded">
                        <FolderIcon className="w-4 h-4" weight="duotone" />
                      </div>
                      <div className="mb-3">
                        <span className="inline-flex items-center rounded border px-2 py-0.5 text-xs bg-muted/70">
                          {p.endpoints} endpoints
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 mb-3">
                      <h3 className="font-semibold text-base leading-5">
                        {p.name}
                      </h3>
                      <div className="text-xs text-muted-foreground mb-4">
                        Created by {p.createdBy} • {p.createdAt}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-8">
                      Organize and document your API specifications in this
                      project.
                    </p>

                    <div className="flex items-center justify-end gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/workspace/projects/${p.id}`}>View</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={`/workspace/projects/${p.id}/endpoints/create`}
                        >
                          Add Endpoint
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent Endpoints */}
      <section className="border-b border-border bg-background" id="endpoints">
        <div className="mx-auto max-w-6xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Endpoints</h2>
            <Button asChild variant="ghost" className="px-2 py-1">
              <Link href="/workspace/endpoints">View all</Link>
            </Button>
          </div>

          {endpoints.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center">
                <p className="text-sm text-muted-foreground">
                  No endpoints found. Create a project and add your first
                  endpoint.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="divide-y divide-border p-0">
                {endpoints.slice(0, 5).map((e) => (
                  <div
                    key={e.id}
                    className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium border ${methodStyle(
                          e.method
                        )}`}
                      >
                        {e.method}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-medium">{e.path}</p>
                        <p className="text-xs text-muted-foreground">
                          {e.project} • updated {e.updatedAt}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button asChild size="sm">
                        <Link href={`/workspace/endpoints/${e.id}`}>Open</Link>
                      </Button>
                      <Button size="sm" aria-label="Copy path">
                        Copy Path
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
