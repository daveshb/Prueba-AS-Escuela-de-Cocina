import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./stylesMenu.scss";

const appImg = require.context("../../assets", true);

export const Menu = () => {
  return (
    <>
      
      <div className="navbarMenu">


<div className="part1">


        <NavLink
          className={({ isActive }) => " linkm " + (isActive ? "active2" : "")}
          to="/vegetarianos"
          >
          <img src={appImg("./icons/ic_vegetarian.svg")} className="imgIco" />
          <div>Vegetarianos</div>
        </NavLink>


        <NavLink
          className={({ isActive }) => " linkm " + (isActive ? "active2" : "")}
          to="/platosPrincipales"
          >
          <img src={appImg("./icons/ic_main.svg")} className="imgIco" />
          Principales
        </NavLink>

        <NavLink
          className={({ isActive }) => " linkm " + (isActive ? "active2" : "")}
          to="/tortas"
          >
          <img src={appImg("./icons/ic_cake.svg")} className="imgIco" />
          Tortas
        </NavLink>

</div>


<div className="part2">


        <NavLink
          className={({ isActive }) => " linkm " + (isActive ? "active2" : "")}
          to="/comidaRapida"
        >
          <img src={appImg("./icons/ic_fast-food.svg")} className="imgIco" />
          Rápida
        </NavLink>

        <NavLink
          className={({ isActive }) => " linkm " + (isActive ? "active2" : "")}
          to="/menuNinos"
          >
          <img src={appImg("./icons/ic_kids.svg")} className="imgIco" />
          Menú Niños
        </NavLink>

        <NavLink
          className={({ isActive }) => " linkm " + (isActive ? "active2" : "")}
          to="/sopas"
        >
          <img src={appImg("./icons/ic_soup.svg")} className="imgIco" />
          Sopas
        </NavLink>
</div>
      </div>
    </>
  );
};
