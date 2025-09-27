import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function WorkspacePage() {
  const { session } = await auth.api.getSession({
    headers: await headers(),
  });

  const workspaces = await prisma.workspace.findMany({
    where: {
      user: {
        id: session?.userId,
      },
    },
  });

  if (workspaces.length === 0) {
    redirect("/setup");
  }

  redirect(`/workspace/${workspaces[0].id}`);
}
