import { Image } from "antd";
import "../../styles/portrait.scss";
import { filterFolder } from "../../hooks";
import { useContext } from "react";
import { MyDataContext } from "../../services/ctx/data.ctx";
import { Link } from "react-router";

const CoorporatePage = () => {
  const ctxData = useContext(MyDataContext);
  const corporatePhotos =
    ctxData?.data &&
    filterFolder(ctxData.data, "CorporatePhoto")?.children?.[0]?.children;
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
            {corporatePhotos && corporatePhotos.length > 0 ? (
              <Image.PreviewGroup>
                {corporatePhotos.map((element: any, index: number) => (
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
              <div className="text-center text-white">
                No images available at this time
                <Link to="/photo" className="w-100 mt-1 flex justify-center">
                  <div
                    className="decoration-none text-black"
                    style={{
                      width: "fit-content",
                      border: "1px solid white",
                      backgroundColor: "white",
                      padding: ".5rem 1rem",
                    }}
                  >
                    Back
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export { CoorporatePage };
