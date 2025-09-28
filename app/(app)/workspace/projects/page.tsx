import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
    { id: "p1", name: "Marketing Site", endpoints: 6, updatedAt: "2h ago" },
    { id: "p2", name: "Mobile App API", endpoints: 9, updatedAt: "yesterday" },
    {
      id: "p3",
      name: "Admin Dashboard",
      endpoints: 3,
      updatedAt: "3 days ago",
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
              {projects.map((p) => (
                <Card
                  key={p.id}
                  className="group transition-colors hover:bg-accent/50"
                >
                  <CardHeader className="border-b border-border pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="size-8 rounded border bg-muted flex items-center justify-center text-xs font-semibold">
                          {p.name.slice(0, 1)}
                        </div>
                        <div className="min-w-0">
                          <div className="text-base font-semibold truncate">
                            {p.name}
                          </div>
                          <div className="mt-1">
                            <span className="inline-flex items-center rounded border px-2 py-0.5 text-xs bg-muted/70">
                              {p.endpoints} endpoints
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground shrink-0">
                        Updated {p.updatedAt}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Organize and document your API specifications in this
                      project.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-border justify-end gap-2">
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/workspace/projects/${p.id}`}>View</Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <Link
                        href={`/workspace/projects/${p.id}/endpoints/create`}
                      >
                        Add Endpoint
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
