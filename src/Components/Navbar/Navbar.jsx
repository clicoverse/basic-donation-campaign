import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-600 font-semibold border-b-2 border-red-600"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/donation"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-600 font-semibold border-b-2 border-red-600"
              : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to={"/statistics"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-600 font-semibold border-b-2 border-red-600"
              : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mx-auto max-w-screen-2xl sm:px-5 lg:px-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>{links}</li>
            </ul>
          </div>
          <Link to={"/"}>
            <img className="w-[150px] h-[52px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>{links}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
