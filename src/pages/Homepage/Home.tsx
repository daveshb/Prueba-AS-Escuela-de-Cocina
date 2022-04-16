import "./styles.scss";
import { useContext } from "react";
import { MyContext } from '../../context/Context';
import { Cards } from "../../components/Cards/Cards";
const appImg = require.context("../../assets", true);

export const Home = () => {

  // const {recipeId} = useContext(MyContext);

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

        <div className="tituloCarrusel">
          Nuevas recetas
        </div>


<div className="conainerCarrusel">
<div className="carrusel">
  <Cards  />
  <Cards  />
  <Cards  />
  <Cards  />
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
