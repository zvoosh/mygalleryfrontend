import type { DriveItem } from "../services/ctx/data.ctx";

export const findImageId = (ctx: any, fileName: string) => {
  const folder = ctx?.data?.children.find(
    (f: DriveItem) => f.name === fileName
  );
  const imageId = folder?.children?.[0] ? folder?.children?.[0].id : null;
  if (imageId) {
    return imageId;
  } else return null;
};
export const getFirstImageId = (files: DriveItem[]) => {
  return (
    files.find((file: DriveItem) => file.mimeType.startsWith("image/"))?.id ||
    null
  );
};
export const getTextFileIdByName = (
  children: DriveItem[] = [],
  name: "Title" | "Description"
) => {
  return (
    children.find(
      (file: DriveItem) =>
        file.mimeType === "text/plain" &&
        file.name.toLowerCase().includes(name.toLowerCase())
    )?.id || null
  );
};

export const getVideoFolderByName = (children: any = [], name: string) => {
  return children.find((file: any) => file.name === name)?.id || null;
};

export function filterThumbnailFolders(folder: DriveItem): DriveItem {
  const children = folder.children
    ?.filter((child) => child.name.includes("Thumbnail"))
    .map((child) => ({
      ...child,
      children: child.children,
    }));

  return { ...folder, children };
}
export function filterVideoFolders(folder: DriveItem): DriveItem {
  const children = folder.children
    ?.filter((child) => child.name.includes("Video"))
    .map((child) => ({
      ...child,
      children: child.children,
    }));

  return { ...folder, children };
}
export function filterFolder(folder: DriveItem, name: string): any {
  const children = folder.children
    ?.filter((child) => child.name.includes(name))
    .map((child) => ({
      ...child,
      children: child.children,
    }));

  return { ...folder, children };
}
export function stripThumbnailSuffix(name: string): string {
  return name.replace(/Thumbnail$/, "");
}
export function stripJPGSuffix(name: string): string {
  return name.substring(0, name.lastIndexOf("."));
}
