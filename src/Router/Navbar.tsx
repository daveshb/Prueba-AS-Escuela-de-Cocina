import { Link, NavLink } from "react-router-dom";
import "./styles.scss";



export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link logo" to="/">
        <span className="text_1">Recipe</span>
        <span className="text_2">App</span>
      </Link>

      <div className="navbar__end">
        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/vegetarianos"
        >
          Vegetarianos
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/platosPrincipales"
        >
          Platos Principales
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/tortas"
        >
          Tortas
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/comidaRapida"
        >
          Comida Rapida
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/menuNinos"
        >
          Menu Niños
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/sopas"
        >
          Sopas
        </NavLink>
      </div>
    </div>
  );
};
