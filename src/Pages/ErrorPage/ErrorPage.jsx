import { NavLink } from "react-router-dom";
import errorPage1 from "../../assets/404main.jpg";
import errorPage2 from "../../assets/board.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[95vh] overflow-hidden">
        <img
          src={errorPage1}
          alt=""
          className="flex justify-center items-center w-[475px]"
        />
        <img src={errorPage2} alt="" className="w-[175px]" />
      </div>
      <div className="text-center ">
        <h1 className="font-bold text-xl">PAGE NOT FOUND</h1>
        <p>
          {" "}
          The Page you are looking for is not avialable
          <br />
          or temparorily unavailable.
        </p>
        <NavLink
          to={"/"}
          className="px-5 py-2 bg-[#FF444A] border-none text-white font-semibold rounded-md"
        >
          <i className="fa-solid fa-house-chimney"></i>GO TO HOMEPAGE
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
