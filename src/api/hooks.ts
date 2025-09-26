const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;

const credentials = btoa(`${username}:${password}`);

export const fetchFiles = async () => {
  const res = await fetch("https://backendserver.dusanprogram.eu/files", {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch folder");
  return await res.json();
};

export const fetchSingleFile = async (fileName: string) => {
  const res = await fetch(
    `https://backendserver.dusanprogram.eu/files${fileName}`,
    {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch file content");
  return await res.text();
};
