export const fetchFiles = async () => {
  const res = await fetch(
    `https://mygallerybackend.onrender.com/files`
  );
  if (!res.ok) throw new Error("Failed to fetch folder");
  return await res.json();
};

export const fetchSingleFile = async (fileName: string) => {
  const res = await fetch(
    `https://mygallerybackend.onrender.com/files/${fileName}`
  );
  if (!res.ok) throw new Error("Failed to fetch file content");
  return await res.text();
};