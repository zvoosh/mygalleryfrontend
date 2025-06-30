import "../../styles/clients.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { useFolderTreeQuery } from "../../api/queries";
import { type DriveItem } from "../../services/ctx/data.ctx";
import { fetchFileContent } from "../../api";
import { useQueries, type UseQueryResult } from "@tanstack/react-query";

const THUMBNAIL_ID = "1tlyPIwkYyLOlKg0BippLyCzBYP811F0I";
const CLIENTS_ID = "1RPL5eVTRM6fAKuOdwUq-GlupVHO1yerW";
const ClientsPage = () => {
  const {
    data: thumbnail,
    isLoading,
    error,
  } = useFolderTreeQuery(THUMBNAIL_ID);
  const {
    data: clients,
    isLoading: isClientsLoading,
    error: isClientsError,
  } = useFolderTreeQuery(CLIENTS_ID);
  const titleQueries = useQueries({
    queries:
      clients?.children?.map((folder) => {
        // find the DriveItem for “title.txt”
        const titleFile = folder.children?.find(
          (f) => f.name.toLowerCase() === "title.txt"
        );

        return {
          queryKey: ["clientTitle", folder.id],
          queryFn: () =>
            titleFile
              ? fetchFileContent(titleFile.id)
              : Promise.resolve("Untitled"),
          enabled: !!titleFile,
          staleTime: 5 * 60_000,
          retry: 1,
        };
      }) || [],
  }) as UseQueryResult<string, unknown>[];
  const descQueries = useQueries({
    queries:
      clients?.children?.map((folder) => {
        // find the DriveItem for description.txt”
        const descriptionFile = folder.children?.find(
          (f) => f.name.toLowerCase() === "description.txt"
        );

        return {
          queryKey: ["clientDescription", folder.id],
          queryFn: () =>
            descriptionFile
              ? fetchFileContent(descriptionFile.id)
              : Promise.resolve("Untitled"),
          enabled: !!descriptionFile,
          staleTime: 5 * 60_000,
          retry: 1,
        };
      }) || [],
  }) as UseQueryResult<string, unknown>[];

  const areTitleQueriesLoading = titleQueries.some((q) => q.isLoading);
  const areDescQueriesLoading = descQueries.some((q) => q.isLoading);

  const allLoading =
    isLoading ||
    isClientsLoading ||
    areTitleQueriesLoading ||
    areDescQueriesLoading;
  if (allLoading)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "gray" }} spin />
          }
        />
      </div>
    );
  if (isClientsError && error) return <div>Error loading files.</div>;
  return (
    <div className="pb-2 text-gray w-100 h-100 flex flex-column normal-font font-12 fade-in-on-load-content">
      {thumbnail && thumbnail.children ? (
        <div className="fade-in-on-load-content">
          <div className="thumbnail ">
            <img
              loading="lazy"
              src={`https://drive.google.com/thumbnail?id=${thumbnail.children[0].id}&sz=w1000`}
              alt="image1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="w-100 flex justify-center">
            <div className="client-container">
              <div className="w-100 h-100 pt-2 flex flex-column justify-center dy-pl-5">
                {clients && clients.children && clients.children!.length < 1 ? (
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Spin
                      indicator={
                        <LoadingOutlined
                          style={{ fontSize: 48, color: "gray" }}
                          spin
                        />
                      }
                    />
                  </div>
                ) : (
                  clients &&
                  clients.children &&
                  clients.children.map((element: any, index: number) => {
                    const {
                      data: title,
                      isLoading: titleIsLoading,
                    } = titleQueries[index];
                    const {
                      data: desc,
                      isLoading: descIsLoading,
                    } = descQueries[index];
                    const titleTXT = title?.trim();
                    const descTXT = desc?.trim();
                    const imageFile = element.children.find((f: DriveItem) =>
                      f.mimeType.startsWith("image/")
                    );
                    return (
                      <article key={index} className="client-card-container">
                        {!titleIsLoading &&
                        !descIsLoading &&
                        titleTXT &&
                        descTXT ? (
                          <div className="w-100 h-100 flex justify-center dy-wrap">
                            <div className="client-image-card">
                              {imageFile ? (
                                <img
                                  loading="lazy"
                                  src={`https://drive.google.com/thumbnail?id=${imageFile.id}&sz=w1000`}
                                  alt="Client thumbnail"
                                  className="w-100 h-100 object-cover"
                                />
                              ) : (
                                <div className="w-100 h-100 bg-gray-600">
                                  No Image
                                </div>
                              )}
                            </div>
                            <div className="client-text-card">
                              <h2 className="font-16">{titleTXT}</h2>
                              <p className="pt-1">{descTXT}</p>
                              <Link
                                to={`/clients/details/${encodeURIComponent(
                                  titleTXT
                                )}/${element.id}`}
                                className="link-see-more"
                              >
                                Show more
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div
                          >
                            
                          </div>
                        )}
                      </article>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 48, color: "gray" }} spin />
            }
          />
        </div>
      )}
    </div>
  );
};

export { ClientsPage };
