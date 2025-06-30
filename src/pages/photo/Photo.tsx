import "../../styles/arial.scss";
import { useContext, useEffect } from "react";
import { MyDataContext } from "../../services/ctx/data.ctx";
import { useFolderTreeQuery } from "../../api/queries";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { findImageId } from "../../hooks";
import { Link } from "react-router";

const FOLDER_ID_PHOTOS = "1h8VfzPCtUNCOQudRz28rZoe2YrG_Ndqm";

const PhotoPage = () => {
  const ctx = useContext(MyDataContext);

  const { data, isLoading, error, isSuccess } =
    useFolderTreeQuery(FOLDER_ID_PHOTOS);

  useEffect(() => {
    if (isSuccess && data) {
      ctx?.setData(data);
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
  return (
    <main className="text-white w-100 p-05 pt-2 flex justify-center">
      <div className="w-100 h-100">
        {findImageId(ctx, "PortraitThumbnail") ? (
          <Link className="division-card" to="/portrait">
            <img
              loading="lazy"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "PortraitThumbnail"
              )}&sz=w1000`}
              alt="Portrait photography thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">Portrait</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "EventThumbnail") ? (
          <Link className="division-card" to="/event">
            <img
              loading="lazy"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "EventThumbnail"
              )}&sz=w1000`}
              alt="Portrait photography thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">Event</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "CorporateThumbnail") ? (
          <Link to="/coorporate" className="division-card">
            <img
              loading="lazy"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "CorporateThumbnail"
              )}&sz=w1000`}
              alt="Portrait photography thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">Corporate</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
};
export { PhotoPage };
