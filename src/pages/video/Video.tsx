import "../../styles/arial.scss";
import { useContext, useEffect } from "react";
import { useFolderTreeQuery } from "../../api/queries";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { MyDataContext } from "../../services/ctx/data.ctx";
import { Link } from "react-router";
import { findImageId } from "../../hooks";
const FOLDER_ID_VIDEO = "16gYyqkImAF3F1UYioW2Fwh1_peFnjQSR";
const VideoPage = () => {
  const ctx = useContext(MyDataContext);

  const { data, isLoading, error, isSuccess } =
    useFolderTreeQuery(FOLDER_ID_VIDEO);

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
    <main className="text-white w-100 pt-2 flex justify-center">
      <h2
        id="video-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Video Project Categories
      </h2>
      <section className="w-100 h-100">
        {findImageId(ctx, "FeatureThumbnail") ? (
          <Link to="/video-feature" className="division-card">
            <img
              loading="eager"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "FeatureThumbnail"
              )}&sz=w1000`}
              alt="Poster image for feature film"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">FEATURE</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "DocumentaryThumbnail") ? (
          <Link to="/video-documentary" className="division-card">
            <img
              loading="eager"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "DocumentaryThumbnail"
              )}&sz=w1000`}
              alt="Poster image for feature film"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">DOCUMENTARY</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "CommercialThumbnail") ? (
          <Link to="/video-commercial" className="division-card">
            <img
              loading="eager"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "CommercialThumbnail"
              )}&sz=w1000`}
              alt="Poster image for feature film"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">COMMERCIAL</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "EventThumbnail") ? (
          <Link to="/video-event" className="division-card">
            <img
              loading="eager"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "EventThumbnail"
              )}&sz=w1000`}
              alt="Poster image for feature film"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">EVENT</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "CorporateThumbnail") ? (
          <Link to="/video-coorporate" className="division-card">
            <img
              loading="eager"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "CorporateThumbnail"
              )}&sz=w1000`}
              alt="Poster image for feature film"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">COORPORATE</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "PodcastThumbnail") ? (
          <Link to="/video-podcast" className="division-card">
            <img
              loading="eager"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "PodcastThumbnail"
              )}&sz=w1000`}
              alt="Poster image for feature film"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">PODCAST</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {findImageId(ctx, "PromoThumbnail") ? (
          <Link to="/video-promo" className="division-card">
            <img
              loading="eager"
              src={`https://drive.google.com/thumbnail?id=${findImageId(
                ctx,
                "PromoThumbnail"
              )}&sz=w1000`}
              alt="Poster image for feature film"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="division-overlay">
              <p className="division-overlay-text">PROMO</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
};

export { VideoPage };
