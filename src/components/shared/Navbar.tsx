import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 border border-b-2 sticky top-0 z-50">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Skills </a>
              </li>
              <li>
                <a href="#">Experience </a>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="btn btn-ghost text-xl font-courgette hover:bg-inherit"
          >
            <span className="font-bold">Md.Ashraful Haque</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[15px]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Skills </a>
            </li>
            <li>
              <a href="#">Experience </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <NavLink
            to="/contact"
            className="btn btn-error btn-outline min-h-9 h-9"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
