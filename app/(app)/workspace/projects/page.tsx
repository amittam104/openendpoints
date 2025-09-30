import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FolderIcon } from "@phosphor-icons/react/ssr";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function ProjectsPage() {
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
                <Link href="/play">Playground</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">All Projects</h2>
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
              {projects.map((p) => (
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
    </main>
  );
}
