import { Link } from "react-router-dom";

const Navbar = () => {
  const navInfo = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/addCoffee">AddCoffee</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/addCoffe">AddCoffe</Link>
      </li>
      <li>
        <Link to="/signUp">SignUp</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            {navInfo}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-28 h-28" src="/src/assets/logo 3.jpg" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
