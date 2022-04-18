import "./styles.scss";
import { Cards } from "../../components/Cards/Cards";
import { Cards3 } from "../../components/Cards/Cards3";
import { Cards2 } from "../../components/Cards/Cards2";
import { Cards4 } from "../../components/Cards/Cards4";
import { Menu } from '../../components/Menu/Menu';

const appImg = require.context("../../assets", true);

export const Home = () => {
  return (
    <>
      <div className="">
        <div className="hero">
          <div className="containerImg">
            <img src={appImg("./bcq.jpg")} className="banner" />
            <div className="text">
              <div className="text1">Recetas</div>
              <div className="text2">para todos</div>
            </div>
          </div>
        </div>
        <Menu/>
        <div className="tituloCarrusel">Nuevas Recetas</div>

        <div className="conainerCarrusel">
          <div className="carrusel">
            <Cards />
            <Cards2 />
            <Cards3 />
            <Cards4 />
          </div>
        </div>
        <div className="footer">
          <div className="textfooter">Con el patrocinio de</div>
          <img className="imgFooter" src={appImg("./Grupo-7610.png")} />
        </div>
      </div>
    </>
  );
};
