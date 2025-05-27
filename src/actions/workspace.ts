"use server";

import client from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const verifyAccessToWorkspace = async (workspaceId: string) => {
  try {
    const user = await currentUser();
    if (!user)
      return {
        status: 403,
        data: { workspace: null },
        error: "User not authenticated",
      };

    const isUserInWorkspace = await client.workSpace.findUnique({
      where: {
        id: workspaceId,
        //wip: add checking if user has access to workspace
      },
    });

    return {
      status: 200,
      data: { workspace: isUserInWorkspace },
      error: null,
    };
  } catch (error) {
    return { status: 403, data: { workspace: null }, error: error };
  }
};
