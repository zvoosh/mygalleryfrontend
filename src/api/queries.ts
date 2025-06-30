import { useQuery } from "@tanstack/react-query";
// Adjust the path as needed
import {
  fetchFolderContents,
  fetchFolderTree,
  loadAllFilesRecursively,
} from "./hooks";
import type { DriveItem } from "../services/ctx/data.ctx";

// export const useRecursiveFolderQuery = (folderId: string | undefined) => {
//   return useQuery<DriveItem>({
//     queryKey: ["recursive-folder", folderId],
//     queryFn: async (): Promise<DriveItem> => {
//       if (!folderId) throw new Error("No folder ID provided");
//       return loadAllFilesRecursively(folderId);
//     },
//     enabled: !!folderId,
//     staleTime: 1000 * 60 * 5,
//     refetchOnWindowFocus: false,
//     retry: 0,
//   });
// };

export const useFolderTreeQuery = (folderId: string | undefined) => {
  return useQuery<DriveItem>({
    queryKey: ["folder-tree", folderId],
    queryFn: async () => {
      if (!folderId) throw new Error("No folder ID provided");
      return fetchFolderTree(folderId);
    },
    enabled: !!folderId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 0,
  });
};
export const useFolderContent = (folderId: string | undefined) => {
  return useQuery<DriveItem>({
    queryKey: ["folder-content", folderId],
    queryFn: async () => {
      if (!folderId) throw new Error("No folder ID provided");
      return fetchFolderContents(folderId);
    },
    enabled: !!folderId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 0,
  });
};
