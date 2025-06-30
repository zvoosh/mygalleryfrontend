import "../../styles/portrait.scss";
import { useContext } from "react";
import { MyContext } from "../../services";
import { Image } from "antd";
import { MyDataContext } from "../../services/ctx/data.ctx";
import { filterFolder } from "../../hooks";

const PortraitPage = () => {
  const ctx = useContext(MyContext);
  const ctxData = useContext(MyDataContext);

  return (
    <main className="pt-2">
      <h1
        id="gallery-heading"
        className="visually-hidden"
        style={{ position: "absolute" }}
      >
        Photography Gallery
      </h1>
      <div className="w-100 h-100 flex justify-center">
        <div className="w-100 h-100 flex justify-center">
          {!ctx?.value && (
            <div className="card-grid">
              {ctxData && ctxData.data ? (
                <Image.PreviewGroup>
                  {filterFolder(
                    ctxData.data,
                    "PortraitPhoto"
                  ).children[0].children.map((element: any, index: number) => (
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
              ) : (
                <p className="text-center text-white">
                  No images available at this time
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export { PortraitPage };
