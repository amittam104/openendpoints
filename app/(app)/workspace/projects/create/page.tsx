import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { FolderIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";

export default function CreateProjectPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between px-6 py-8">
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">
                Create New Project
              </p>
              <h1 className="text-2xl font-semibold">Project Details</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl p-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10 border border-primary/20 rounded">
                  <FolderIcon className="w-4 h-4 text-primary" />
                </div>
                Project Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form id="create-project-form" className="space-y-6">
                {/* Project Name */}
                <div className="space-y-2">
                  <Label htmlFor="project-name">
                    Project Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="project-name"
                    name="name"
                    placeholder="e.g., Marketing Website API"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Choose a descriptive name for your project
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="project-description">Description</Label>
                  <Textarea
                    id="project-description"
                    name="description"
                    placeholder="Describe what this project is for and what APIs it will contain..."
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    Optional: Help others understand the purpose of this project
                  </p>
                </div>

                {/* Visibility */}
                <div className="space-y-4">
                  <Label>Project Visibility</Label>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Switch
                          id="project-visibility"
                          name="isPublic"
                          defaultChecked={false}
                        />
                        <Label
                          htmlFor="project-visibility"
                          className="font-medium"
                        >
                          Public Project
                        </Label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Public projects can be viewed by anyone with the link.
                        Private projects are only visible to you.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-2 pt-4">
                  <Button variant="outline" asChild>
                    <Link href="/workspace/projects">Cancel</Link>
                  </Button>
                  <Button type="submit">Create Project</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
