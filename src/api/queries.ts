import { useQuery } from "@tanstack/react-query";
import { fetchFiles, fetchSingleFile } from "./hooks";

export const useSingleFileQuery = (folderId: string | undefined) => {
  return useQuery({
    queryKey: ["file", folderId],
    queryFn: async () => {
      if (!folderId) throw new Error("No folder ID provided");
      return fetchSingleFile(folderId);
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};
export const useFilesQuery = (folderId: string | undefined) => {
  return useQuery({
    queryKey: ["files", folderId],
    queryFn: async () => {
      return fetchFiles();
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};
