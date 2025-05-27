export const dynamic = "force-dynamic";

import Sidebar from "@/components/global/layout/Sidebar";
import React from "react";

type Props = {
  params: { workspaceId: string };
};

const page = ({ params: { workspaceId } }: Props) => {
  return (
    <div>
      <Sidebar workspaceId={workspaceId} />
    </div>
  );
};

export default page;
