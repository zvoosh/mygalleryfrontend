import { useQuery } from "@tanstack/react-query";
import { fetchFolderContents, fetchFolderTree } from "./hooks";
import type { DriveItem } from "../services/ctx/data.ctx";

export const useFolderTreeQuery = (folderId: string | undefined) => {
  return useQuery<DriveItem>({
    queryKey: ["folder-tree", folderId],
    queryFn: async () => {
      if (!folderId) throw new Error("No folder ID provided");
      return fetchFolderTree(folderId);
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};
export const useFolderContent = (folderId: string | undefined) => {
  return useQuery<DriveItem>({
    queryKey: ["folder-content", folderId],
    queryFn: async () => {
      if (!folderId) throw new Error("No folder ID provided");
      return fetchFolderContents(folderId);
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};
