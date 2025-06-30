import { ReactTyped } from "react-typed";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
import "../../styles/landing.scss";
import { Link } from "react-router";
import { useFolderTreeQuery } from "../../api/queries";

const FOLDER_ID = "1_qQjN6SWT-9y0hRwUd1_mFpqnkT-GG9X";
const LandingPage = () => {
  const { data, error } = useFolderTreeQuery(FOLDER_ID);
  if (error) return <div>Error loading files.</div>;
  return (
    <main
      className="landing-wrapper header-font"
      style={{ overflow: "hidden" }}
    >
      <section className="landing-carousel">
        <Carousel
          autoplay
          dots={false}
          className="carousel"
          pauseOnHover={false}
          draggable={false}
        >
          {data &&
            data.children &&
            data.children.map((item: any) => {
              return (
                <img
                  src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1000`}
                  alt="Portrait of VACO capturized moments"
                />
              );
            })}
        </Carousel>
      </section>

      <section className="landing-headline">
        <h1
          className="w-100 text-center mt-3 font-20"
          style={{ letterSpacing: ".5rem" }}
        >
          VACO
        </h1>
        <div className="w-100 text-center">
          <h2>
            <ReactTyped
              strings={["Live to tell stories"]}
              className="font-14 uppercase pb-2"
              typeSpeed={100}
            />
          </h2>
          <p className="uppercase italic pb-1">Photographer & storyteller</p>
          <div className="w-100 flex justify-center">
            <Link to="/video" className="landing-btn">
              View work
            </Link>
          </div>
        </div>
        <div className="text-white mb-2">
          <CiMail className="mr-2" style={{ transform: "scale(2)" }} />
          <CiFacebook className="mr-2" style={{ transform: "scale(2)" }} />
          <CiInstagram className="mr-2" style={{ transform: "scale(2)" }} />
          <CiYoutube className="" style={{ transform: "scale(2)" }} />
        </div>
      </section>
    </main>
  );
};

export { LandingPage };
