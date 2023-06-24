import { Outlet, NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Collection</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
