import { Link, NavLink } from "react-router-dom";
import "./styles.scss";



const appImg = require.context("../assets", true);

export const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logoHome">
 


      <Link className=" logo" to="/">
        <span className="text_1">Recipe</span>
        <span className="text_2">App</span>
      </Link>

      <NavLink className="icoHome" to="/">
        <img src={appImg("./icons/ic_home.svg")} className="imgIco" />
      </NavLink>

      </div>
      

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
          Comida Rápida
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/menuNinos"
        >
          Menú Niños
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
