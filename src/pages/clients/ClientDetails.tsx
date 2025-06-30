import {  Spin } from "antd";
import "../../styles/event.scss";
import "../../styles/clients.scss";
import { useParams } from "react-router";
import { useFolderContent } from "../../api/queries";
import { LoadingOutlined } from "@ant-design/icons";

const ClientDetailsPage = () => {
  const { videoId } = useParams();

  const { data, isLoading, error } = useFolderContent(videoId);


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
    <main className="w-100 h-100 text-gray">
      <div className="flex justify-center w-100 h-100">
        <div className="client-details-container">
          <div>
            <section>
              <h1 className="font-20 normal-font pb-2 text-white w-100">
                {data?.name}
              </h1>
              <div className="pb-2 normal-font font-12">
                <p className="pb-1">
                  "The world will not be destroyed by those who do evil, but by
                  those who watch them without doing anything." - Albert
                  Einstein Planet
                </p>
                <p className="pb-1">
                  Earth is 4.5 billion years old. Mankind is about 140 thousand
                  years old. If we compress the Earth's existence into a normal
                  full day of 24 hours, then we’ve been on this planet for...
                  2.5 seconds. In 2.5 seconds we’ve become the dominant species
                  with a rapidly growing population, causing a catastrophic
                  impact on the environment. We have created the industrial
                  revolution and burned fossil fuels creating more carbon in the
                  atmosphere than ever before. We have caused global warming at
                  a record pace, endangering our own existence.
                </p>
              </div>
            </section>
            {/* <Carousel
              autoplay={false}
              autoplaySpeed={3000}
              ref={carouselRef}
              arrows={true}
              dots={false}
            > */}
              {data?.children?.map((video, idx) => {
                if (video.name == "Videos" && video.children) {
                  return video.children.map((item: any) => {
                    return (
                      <div key={idx} className="w-100 h-100 mt-5">
                        <iframe
                          src={`https://drive.google.com/file/d/${item.id}/preview`}
                          width="100%"
                          height="780"
                          allow="autoplay"
                          className="border-none"
                          allowFullScreen
                          title="Google Drive Video"
                        />
                      </div>
                    );
                  });
                }
              })}
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export { ClientDetailsPage };
