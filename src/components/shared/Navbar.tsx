import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = 70;

    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar bg-base-100 border-b-2 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            aria-label="Toggle navigation menu"
            className="btn btn-ghost lg:hidden"
          >
            <FaBars className="h-5 w-5" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            <li>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => handleSmoothScroll(e, "education")}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, "experience")}
              >
                Experience
              </a>
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
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => handleSmoothScroll(e, "education")}
            >
              Education
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleSmoothScroll(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, "experience")}
            >
              Experience
            </a>
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
  );
};

export default Navbar;
