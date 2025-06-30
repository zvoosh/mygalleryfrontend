import "../../styles/event.scss";
import { useContext } from "react";
import { MyContext } from "../../services";
import { Image, Spin } from "antd";
import { GOOGLE_API_KEY } from "../../api";
import { LoadingOutlined } from "@ant-design/icons";

const EventPage = () => {
  const ctx = useContext(MyContext);


  // if (loadingVideo)
  //   return (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <Spin
  //         indicator={
  //           <LoadingOutlined style={{ fontSize: 48, color: "gray" }} spin />
  //         }
  //       />
  //     </div>
  //   );
  // if (errorVideo) return <div>Error loading files.</div>;

  return (
    <main className="pt-2">
      {/* <h1
        id="gallery-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Event Gallery
      </h1>
      <div className="w-100 h-100 flex justify-center">
        <div className="w-100 h-100 flex justify-center">
          {!ctx?.value && (
            <div className="card-grid">
              {data && data.files ? (
                <p className="text-center">No images available at this time</p>
              ) : (
                <Image.PreviewGroup>
                  {data.map((element: any, index: number) => (
                    <Image
                      loading="eager"
                      key={index}
                      src={`https://drive.google.com/thumbnail?id=${element.id}&sz=w1000`}
                      alt={element.name}
                      className="responsive"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </Image.PreviewGroup>
              )}
            </div>
          )}
        </div>
      </div> */}
    </main>
  );
};

export { EventPage };
