import prisma from "@/lib/prisma";

export default async function WorkspacePage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = await params;

  const workspace = await prisma.workspace.findUnique({
    where: { id: workspaceId },
  });

  return <div className="mt-20 text-xl">Workspace Page {workspace?.name}</div>;
}
