"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [1, 2];

export default function SetupPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [workspaceData, setWorkspaceData] = useState({
    name: "",
    description: "",
  });
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
  });

  const handleNextStep = async () => {
    setIsLoading(true);

    try {
      if (currentStep === 1) {
        // Create workspace
        const response = await fetch("/api/workspace", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workspaceData),
        });

        if (!response.ok) {
          throw new Error("Failed to create workspace");
        }

        const result = await response.json();
        // Store workspace ID for project creation
        localStorage.setItem("currentWorkspaceId", result.id);
      } else if (currentStep === 2) {
        // Create project
        const workspaceId = localStorage.getItem("currentWorkspaceId");
        if (!workspaceId) {
          throw new Error("Workspace ID not found");
        }

        const response = await fetch("/api/project", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...projectData,
            workspaceId,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create project");
        }

        const result = await response.json();
        // Redirect to the project page after setup is complete
        router.push(`/workspace/${workspaceId}`);
        return;
      }

      // Move to next step
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error("Error during setup:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleWorkspaceChange = (
    field: keyof typeof workspaceData,
    value: string
  ) => {
    setWorkspaceData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProjectChange = (
    field: keyof typeof projectData,
    value: string
  ) => {
    setProjectData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="mx-auto max-w-xl space-y-8 mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to OpenEndpoints</h1>
        <p className="text-muted-foreground mt-2">
          Let&apos;s set up your workspace and first project
        </p>
      </div>

      <Stepper value={currentStep} onValueChange={setCurrentStep}>
        {steps.map((step) => (
          <StepperItem
            key={step}
            step={step}
            className="not-last:flex-1"
            loading={isLoading && currentStep === step}
          >
            <StepperTrigger asChild>
              <StepperIndicator />
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>

      <Card>
        <CardHeader>
          <CardTitle>
            {currentStep === 1
              ? "Create Your Workspace"
              : "Create Your First Project"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 1 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workspaceName">Workspace Name *</Label>
                <Input
                  id="workspaceName"
                  placeholder="e.g., My Company, Personal Projects"
                  value={workspaceData.name}
                  onChange={(e) =>
                    handleWorkspaceChange("name", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workspaceDescription">Description</Label>
                <Input
                  id="workspaceDescription"
                  placeholder="Optional description for your workspace"
                  value={workspaceData.description}
                  onChange={(e) =>
                    handleWorkspaceChange("description", e.target.value)
                  }
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name *</Label>
                <Input
                  id="projectName"
                  placeholder="e.g., API Documentation, Backend Services"
                  value={projectData.name}
                  onChange={(e) => handleProjectChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectDescription">Description</Label>
                <Input
                  id="projectDescription"
                  placeholder="Optional description for your project"
                  value={projectData.description}
                  onChange={(e) =>
                    handleProjectChange("description", e.target.value)
                  }
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          className="w-32"
          onClick={handlePrevStep}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          className="w-32"
          onClick={handleNextStep}
          disabled={
            isLoading ||
            (currentStep === 1 && !workspaceData.name.trim()) ||
            (currentStep === 2 && !projectData.name.trim())
          }
        >
          {isLoading
            ? "Processing..."
            : currentStep === 2
            ? "Finish Setup"
            : "Next step"}
        </Button>
      </div>
    </div>
  );
}
