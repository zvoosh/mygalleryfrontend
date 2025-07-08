import { useQuery } from "@tanstack/react-query";
import "../../styles/portrait.scss";
import { Image, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchFiles } from "../../api";
import { useEffect, useState } from "react";

const PortraitPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["files"],
    queryFn: () => fetchFiles(),
    staleTime: 5 * 60_000,
    retry: 1,
  });

  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = data?.length || 0;
  const allImagesLoaded = loadedCount === totalImages;

  useEffect(() => {
    // Reset loaded counter when new data comes in
    if (data) setLoadedCount(0);
  }, [data]);

  if (isLoading || (data && !allImagesLoaded)) {
    return (
      <div className="page-loader">
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "gray" }} spin />
          }
        />
      </div>
    );
  }
  if (error) return <div>Error loading files.</div>;
  return (
    <main className="pt-2">
      <h1
        id="gallery-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Event Gallery
      </h1>
      <div className="w-100 h-100 flex justify-center">
        <div className="w-100 h-100 flex justify-center">
          <div className="card-grid">
            {data && data.length ? (
              <Image.PreviewGroup>
                {data.map((element: any, index: number) => (
                  <Image
                    key={index}
                    src={element.url}
                    alt={element.name}
                    className="responsive"
                    preview={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onLoad={() => setLoadedCount((prev) => prev + 1)}
                    onError={() => setLoadedCount((prev) => prev + 1)}
                  />
                ))}
              </Image.PreviewGroup>
            ) : (
              <div className="text-center text-white">
                No images available at this time
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export { PortraitPage };
