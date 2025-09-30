import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  FlipHorizontalIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;

  // Dummy project data - in a real app, this would come from the database
  const projects = [
    {
      id: "p1",
      name: "Marketing Site",
      description: "API specifications for the company marketing website",
      workspace: {
        name: "Marketing Team",
      },
    },
    {
      id: "p2",
      name: "Mobile App API",
      description: "Backend API for the mobile application",
      workspace: {
        name: "Development Team",
      },
    },
    {
      id: "p3",
      name: "Admin Dashboard",
      description: "Internal admin dashboard API endpoints",
      workspace: {
        name: "Operations Team",
      },
    },
  ];

  // Find the project by ID
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Mock endpoints data for now - in real app, this would come from the database
  const endpoints = [
    {
      id: "e1",
      name: "Get User",
      method: "GET",
      path: "/users/{id}",
      description: "Retrieve user details by ID",
      updatedAt: "2h ago",
    },
    {
      id: "e2",
      name: "Create User",
      method: "POST",
      path: "/users",
      description: "Create a new user account",
      updatedAt: "1 day ago",
    },
    {
      id: "e3",
      name: "Update User",
      method: "PUT",
      path: "/users/{id}",
      description: "Update existing user information",
      updatedAt: "3 days ago",
    },
  ];

  const methodStyle = (method: string) => {
    switch (method.toUpperCase()) {
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
          <div className="flex items-start justify-between px-6 py-8">
            <div className="flex flex-col gap-4">
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">
                  {project.workspace.name}
                </p>
                <h1 className="text-2xl font-semibold truncate">
                  {project.name}
                </h1>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span>Created by John Doe</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
              </div>
              {project.description && (
                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button asChild size="sm">
                <Link href={`/workspace/projects/${projectId}/edit`}>
                  <PencilIcon size={16} weight="duotone" />
                  Edit Project
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="text-destructive">
                <TrashIcon size={16} weight="duotone" />
                Delete Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints Table */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl p-6">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <CardTitle>Endpoints</CardTitle>
                <CardDescription>
                  All API endpoints defined for this project
                </CardDescription>
              </div>
              <Button asChild size="sm">
                <Link
                  href={`/workspace/projects/${projectId}/endpoints/create`}
                >
                  <PlusIcon size={16} weight="duotone" />
                  Add Endpoint
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Input placeholder="Search endpoints..." className="w-60" />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Path</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {endpoints.map((endpoint) => (
                      <TableRow key={endpoint.id}>
                        <TableCell className="font-medium">
                          {endpoint.name}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={`${methodStyle(
                              endpoint.method
                            )} text-xs font-medium`}
                          >
                            {endpoint.method}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          {endpoint.path}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {endpoint.description}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {endpoint.updatedAt}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <FlipHorizontalIcon
                                  size={16}
                                  weight="duotone"
                                />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/workspace/projects/${projectId}/endpoints/${endpoint.id}`}
                                >
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
