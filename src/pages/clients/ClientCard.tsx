// ClientCard.tsx
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchFileContent } from "../../api";
import type { DriveItem } from "../../services/ctx/data.ctx";

type Props = {
  element: {
    children: DriveItem[];
    description: string;
    videoFolderId: string;
  };
};

export function ClientCard({ element }: Props) {
  // find the title.txt file entry
  const titleFile = element.children.find(
    (f) => f.name.toLowerCase() === "title.txt"
  );

  // react-query v4 hook
  const { data, isLoading, isError } = useQuery<string>({
    queryKey: ["clientTitle", element.videoFolderId],
    queryFn: () => fetchFileContent(titleFile!.id),
    enabled: !!titleFile,
    staleTime: 5 * 60_000,
    retry: 1,
  });

  const title = isLoading
    ? "Loading title…"
    : isError || !data
    ? "Untitled"
    : data.trim();

  // pick your image once
  const imageFile = element.children.find((f) =>
    f.mimeType.startsWith("image/")
  );

  return (
    <article className="client-card-container">
      <div className="client-image-card">
        {imageFile ? (
          <img
            loading="lazy"
            src={`https://drive.google.com/thumbnail?id=${imageFile.id}&sz=w1000`}
            alt="Client thumbnail"
            className="w-100 h-100 object-cover"
          />
        ) : (
          <div className="w-100 h-100 bg-gray-600">No Image</div>
        )}
      </div>

      <div className="client-text-card">
        <h2 className="font-16">{title}</h2>
        <p className="pt-1">{element.description}</p>
        <Link
          to={`/clients/details/${encodeURIComponent(title)}/${
            element.videoFolderId
          }`}
          className="link-see-more"
        >
          Show more
        </Link>
      </div>
    </article>
  );
}
