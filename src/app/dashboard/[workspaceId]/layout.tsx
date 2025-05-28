import { onAuthenticateUser } from "@/actions/user";
import { verifyAccessToWorkspace } from "@/actions/workspace";
import Sidebar from "@/components/global/layout/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { workspaceId: string };
  children: React.ReactNode;
};

const layout = async ({ params: { workspaceId }, children }: Props) => {
  const auth = await onAuthenticateUser();
  if (!auth.user?.workspace) redirect("auth/sign-in");
  if (!auth.user.workspace) redirect("auth/sign-in");

  const hasAccess = await verifyAccessToWorkspace(workspaceId);
  if (hasAccess.status !== 200) {
    redirect(`/dashboard/${auth.user?.workspace.id}`);
  }

  if (!hasAccess.data?.workspace) return redirect("/auth/sign-in");

  // wip: react-query to fetch workspace data

  return (
    <div className="w-full h-screen">
      <Sidebar workspaceId={workspaceId} />
      {children}
    </div>
  );
};

export default layout;
