import { Link, useLocation, useNavigate } from "react-router";
import "../styles/header.scss";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className="w-100 bg-black text-gray flex flex-column justify-center align-center header-font">
      <div className={`ham-trans ${!isOpen ? "closed" : ""}`}>
        <div className="flex flex-column font-14 header-font user-none w-100 justify-center">
          <Link
            to={"/"}
            className="m-1 pointer text-white text-center"
            style={{ textDecoration: "none" }}
          >
            Photos
          </Link>
          <Link
            to={"/contact"}
            className="m-1 pointer text-white text-center"
            style={{ textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="header-container">
        <div className="header-left">
          <div className="mobile-size-on pr-1 font-14">
            <RxHamburgerMenu
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
        <div className="header-center">DUŠAN</div>
        <div className="header-right"></div>
      </div>

      <div className="flex flex-row justify-center links-container font-14">
        <div
          className={`pointer user-none mr-2 ${
            location.pathname == "/" ? "text-red bold" : ""
          }`}
          onClick={() => {
            navigate("/");
          }}
        >
          Photos
        </div>
        {/* <div
          className={`pointer user-none ${
            location.pathname.includes("clients") ? "text-red bold" : ""
          }`}
          onClick={() => {
            navigate("/clients");
          }}
        >
          Clients
        </div> */}
        {/* <div
          className={`pointer user-none mr-2 ${
            location.pathname == "/gear" ? "text-red bold" : ""
          }`}
          onClick={() => {
            navigate("/gear");
          }}
        >
          Gear
        </div> */}
        <div
          className={`pointer user-none mr-2 ${
            location.pathname == "/contact" ? "text-red bold" : ""
          }`}
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </div>
      </div>
    </main>
  );
};

export { Header };
