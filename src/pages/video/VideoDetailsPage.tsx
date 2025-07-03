import "../../styles/video.scss";
import { useContext, useEffect } from "react";
import { MyDataContext, type DriveItem } from "../../services/ctx/data.ctx";
import { useNavigate } from "react-router";

const VideoDetailsPage = ({
  title,
  description,
  foldervideo,
  folderthumbnail,
}: {
  title: string;
  description: string;
  foldervideo: string;
  folderthumbnail: string;
}) => {
  const ctx = useContext(MyDataContext);
  const navigate = useNavigate();
  const thumbnailFolder = ctx?.data?.children?.find((f) =>
    f.name.includes(folderthumbnail)
  );
  const videoFolder = ctx?.data?.children?.find((f) =>
    f.name.includes(foldervideo)
  );
  const imageId = thumbnailFolder?.children?.[0]?.id;
  useEffect(() => {
    if (!ctx?.data) {
      navigate("/video");
    }
  }, [ctx?.data]);

  return (
    <main className="w-100 h-100 text-gray normal-font font-12">
      <div className="flex w-100 h-100 flex-column">
        {imageId && (
          <div className="video-thumbnail">
            <img
              loading="lazy"
              src={`https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`}
              alt="thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
        <div className="w-100 flex justify-center">
          <div className="video-details-container">
            <div className="w-100 h-100 pt-2 flex flex-column">
              <h1 className="font-16 bold p-1 w-100 text-center">{title}</h1>
              <div className="video-text-padding w-100">
                <p>{description}</p>
              </div>
              <div className="flex flex-column w-100 pb-5">
                {videoFolder?.children?.map((vid: DriveItem) => {
                  return (
                    <div key={vid.id}>
                      <iframe
                        src={`https://drive.google.com/file/d/${vid.id}/preview`}
                        allow="autoplay"
                        className="mb-2 border-none video-frame"
                        allowFullScreen
                        title="Google Drive Video"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { VideoDetailsPage };
