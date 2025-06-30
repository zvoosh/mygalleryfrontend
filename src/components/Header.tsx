import { useLocation, useNavigate } from "react-router";
import "../styles/header.scss";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../services";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ctx = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <main className="w-100 bg-black text-gray flex flex-column justify-center align-center header-font">
      <div
        className={`bg-gray text-white-gray w-100 text-center animated-element ${
          isOpen ? "expanded" : ""
        }`}
      >
        <div
          className={`p-05 font-12 ${
            location.pathname == "/" ? "text-white bold" : ""
          }`}
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          Home
        </div>
        <div
          className={`p-05 font-12 ${
            location.pathname == "/video" ||
            location.pathname == "/video-feature" ||
            location.pathname == "/video-event" ||
            location.pathname == "/video-coorporate" ||
            location.pathname == "/video-commercial" ||
            location.pathname == "/video-documentary"
              ? "text-white bold"
              : ""
          }`}
          onClick={() => {
            navigate("/video");
            setIsOpen(false);
          }}
        >
          Video
        </div>
        <div
          className={`p-05 font-12 ${
            location.pathname == "/photo" ||
            location.pathname == "/portrait" ||
            location.pathname == "/event" ||
            location.pathname == "/coorporate"
              ? "text-white bold"
              : ""
          }`}
          onClick={() => {
            navigate("/photo");
            setIsOpen(false);
          }}
        >
          Photo
        </div>
        <div
          className={`p-05 font-12 ${
            location.pathname == "/airial" ? "text-white bold" : ""
          }`}
          onClick={() => {
            navigate("/airial");
            setIsOpen(false);
          }}
        >
          Airial
        </div>
        <div
          key={location.pathname}
          className={`p-05 font-12 ${
            location.pathname.includes("/clients") ? "text-white bold" : ""
          }`}
          onClick={() => {
            navigate("/clients");
            setIsOpen(false);
          }}
        >
          Clients
        </div>
        <div
          className={`p-05 font-12 ${
            location.pathname == "/behind-the-sceens" ? "text-white bold" : ""
          }`}
          onClick={() => {
            navigate("/behind-the-sceens");
            setIsOpen(false);
          }}
        >
          Behind the sceens
        </div>
        <div
          className={`p-05 font-12 ${
            location.pathname == "/gear" ? "text-white bold" : ""
          }`}
          onClick={() => {
            navigate("/gear");
            setIsOpen(false);
          }}
        >
          Gear
        </div>
        <div
          className={`p-05 font-12 ${
            location.pathname == "/contact" ? "text-white bold" : ""
          }`}
          onClick={() => {
            navigate("/contact");
            setIsOpen(false);
          }}
        >
          Contact
        </div>
      </div>

      {!ctx?.value && (
        <div
          className="w-100 text-center uppercase font-12 mt-1 text-white-gray menu-btn"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          MENU
        </div>
      )}
      <div className="header-container">
        <div className="header-left"></div>
        <div className="header-center">VACO</div>
        <div className="header-right">
          {ctx?.value && (
            <div
              onClick={() => {
                ctx?.setValue(false);
              }}
              className="remove-btn"
            >
              x
            </div>
          )}
        </div>
      </div>

      {!ctx?.value && (
        <div className="flex flex-row justify-between links-container">
          <div
            className={`pointer user-none ${
              location.pathname == "/" ? "text-white bold" : ""
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/video");
            }}
            className={`pointer user-none ${
              location.pathname == "/video" ||
              location.pathname == "/video-feature" ||
              location.pathname == "/video-event" ||
              location.pathname == "/video-coorporate" ||
              location.pathname == "/video-commercial" ||
              location.pathname == "/video-documentary"
                ? "text-white bold"
                : ""
            }`}
          >
            <div>Video</div>
          </div>
          <div
            onClick={() => {
              navigate("/photo");
            }}
            className={`pointer user-none ${
              location.pathname == "/photo" ||
              location.pathname == "/portrait" ||
              location.pathname == "/event" ||
              location.pathname == "/coorporate"
                ? "text-white bold"
                : ""
            }`}
          >
            <div>Photo</div>
          </div>
          <div
            className={`pointer user-none ${
              location.pathname == "/airial" ? "text-white bold" : ""
            }`}
            onClick={() => {
              navigate("/airial");
            }}
          >
            Airial
          </div>
          <div
            className={`pointer user-none ${
              location.pathname.includes("clients") ? "text-white bold" : ""
            }`}
            onClick={() => {
              navigate("/clients");
            }}
          >
            Clients
          </div>
          <div
            className={`pointer user-none ${
              location.pathname == "/behind-the-sceens" ? "text-white bold" : ""
            }`}
            onClick={() => {
              navigate("/behind-the-sceens");
            }}
          >
            Behind the Sceens
          </div>
          <div
            className={`pointer user-none ${
              location.pathname == "/gear" ? "text-white bold" : ""
            }`}
            onClick={() => {
              navigate("/gear");
            }}
          >
            Gear
          </div>
          <div
            className={`pointer user-none ${
              location.pathname == "/contact" ? "text-white bold" : ""
            }`}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </div>
        </div>
      )}
    </main>
  );
};

export { Header };
