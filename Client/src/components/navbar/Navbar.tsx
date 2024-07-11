import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar   bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3   shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Product</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>

            <li>
              <Link to={"/manage"}>Manage</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className=" text-black text-xl font-bold">
          Gardener
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-[16px] font-semibold text-black">
          <li className="hover:text-red-500 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-red-500 ">
            <Link to={"/products"}>Product</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to={"/cart"}>Cart</Link>
          </li>

          <li className="hover:text-red-500">
            <Link to={"/manage"}>Manage</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
