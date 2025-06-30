import { useContext, useEffect, useState } from "react";
// import { MyContext } from "../../services";
import "../../styles/arial.scss";
import { MyDataContext, type DriveItem } from "../../services/ctx/data.ctx";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useFolderTreeQuery } from "../../api/queries";
import {
  filterFolder,
  stripJPGSuffix,
  stripThumbnailSuffix,
} from "../../hooks";
import { MyContext } from "../../services";

const FOLDER_ID_ARIAL = "1WfJcdSInMWEE8bm1T19eifnhL3LoWdgt";

const AirialPage = () => {
  const ctxdata = useContext(MyDataContext);
  const ctxOpen = useContext(MyContext);
  const [name, setName] = useState<string>();

  const { data, isLoading, error, isSuccess } =
    useFolderTreeQuery(FOLDER_ID_ARIAL);

  useEffect(() => {
    if (isSuccess && data) {
      ctxdata?.setData(data);
    }
  }, [data]);

  if (isLoading)
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

  if (error) return <div>Error loading files.</div>;
  if (!ctxdata?.data) {
    return <div>Loading context data...</div>;
  }

  return (
    <main className="text-white w-100 p-05 pt-2 flex justify-center">
      <div
        className="w-100 h-100"
        style={{ display: !ctxOpen?.value ? "block" : "none" }}
      >
        {ctxdata && ctxdata.data ? (
          filterFolder(ctxdata.data, "Thumbnail").children.map(
            (item: DriveItem, index: number) => (
              <div key={index}>
                {item &&
                item.children &&
                item.children[0] &&
                item.children[0].id &&
                item.children[0].name ? (
                  <div
                    className="division-card"
                    onClick={() => {
                      ctxOpen?.setValue(true);
                      const matchingChild = ctxdata?.data?.children?.find(
                        (child) =>
                          child.name.includes(
                            `${stripThumbnailSuffix(item.name)}Video`
                          )
                      );
                      const videoId = matchingChild?.children?.[0]?.id;
                      const previewUrl = videoId
                        ? `https://drive.google.com/file/d/${videoId}/preview`
                        : "Video ID not found!";

                      setName(previewUrl);
                    }}
                  >
                    <img
                      loading="lazy"
                      src={`https://drive.google.com/thumbnail?id=${item!
                        .children![0].id!}&sz=w1000`}
                      alt="Drone view in forest"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="division-overlay">
                      <p className="division-overlay-text">
                        {stripJPGSuffix(item.children[0].name)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )
          )
        ) : (
          <div className="w-100 h-100 bg-red text-white">NOT WORKING</div>
        )}
      </div>
      <div
        className="w-100 flex justify-center"
        style={{
          display: ctxOpen?.value ? "flex" : "none",
        }}
      >
        {ctxOpen?.value && (
          <div className="mt-1">
            <div className="video-container">
              <figure
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  backgroundColor: "black",
                  zIndex: 9999,
                  transform: "translate(-50%, -50%)",
                }}
                className="flex justify-center align-center figure-size"
              >
                <iframe
                  src={name}
                  allow="autoplay"
                  className="video-frame object-cover border-none fade-in-on-load"
                  allowFullScreen
                  title="Google Drive Video"
                />
              </figure>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export { AirialPage };
