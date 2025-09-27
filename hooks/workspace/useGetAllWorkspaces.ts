import { useQuery } from "@tanstack/react-query";
import { GalleryVerticalEnd } from "lucide-react";
import { useMemo } from "react";

interface Workspace {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

interface WorkspacesResponse {
  workspaces: Workspace[];
}

async function fetchWorkspaces(): Promise<WorkspacesResponse> {
  const response = await fetch("/api/workspace");
  if (!response.ok) {
    throw new Error("Failed to fetch workspaces");
  }
  return response.json();
}

export function useGetAllWorkspaces() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["workspaces"],
    queryFn: fetchWorkspaces,
  });

  const teams = useMemo(() => {
    if (!data?.workspaces) return [];

    return data.workspaces.map((workspace: Workspace) => ({
      name: workspace.name,
      logo: GalleryVerticalEnd, // Default logo, can be customized per workspace later
      plan: "Free", // Default plan, can be customized later
    }));
  }, [data]);

  return { teams, isLoading, error };
}
