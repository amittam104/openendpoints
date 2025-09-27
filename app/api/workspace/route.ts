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

    const userId = session.user.id;

    // Parse the request body
    const { name, description } = await req.json();

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim() === "") {
      return Response.json(
        { error: "Workspace name is required" },
        { status: 400 }
      );
    }

    // Create the workspace
    const workspace = await prisma.workspace.create({
      data: {
        userId,
        name,
        description: description || "",
      },
    });

    return Response.json({
      id: workspace.id,
      name: workspace.name,
      description: workspace.description,
      createdAt: workspace.createdAt,
    });
  } catch (error) {
    console.error("Error creating workspace:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
