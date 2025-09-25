const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;
const url = import.meta.env.VITE_API_URL;

const credentials = btoa(`${username}:${password}`);

export const fetchFiles = async () => {
  const res = await fetch(`${url}/files`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch folder");
  return await res.json();
};

export const fetchSingleFile = async (fileName: string) => {
  const res = await fetch(`${url}/files/${fileName}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch file content");
  return await res.text();
};
