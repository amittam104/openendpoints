import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // Get the authenticated user
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body
    const { workspaceId, name, description } = await req.json();

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim() === "") {
      return Response.json(
        { error: "project name is required" },
        { status: 400 }
      );
    }

    // Create the project
    const project = await prisma.project.create({
      data: {
        workspaceId,
        name,
        description: description || "",
      },
    });

    return Response.json({
      id: project.id,
      name: project.name,
      description: project.description,
      createdAt: project.createdAt,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
