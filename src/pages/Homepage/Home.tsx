import "./styles.scss";
import { useContext } from "react";
import { MyContext } from '../../context/Context';
const appImg = require.context("../../assets", true);

export const Home = () => {

  const {recipeId} = useContext(MyContext);
  return (
    <>
      <div className="container">
        <div className="hero">
          <img src={appImg("./bcq.jpg")} className="banner" />
          <div className="textImg">
            <div className="text1">Recetas</div>
            <div className="text2">para todos</div>
          </div>
        </div>
<div>
{recipeId}
</div>

<div className="prueba">
  Aqui Tarjetas
</div>


        {/* <div className="midle">
          <div className="midle-text">Nuevas Recetas</div>
          <div className="contCarrusel">
            <ul id="carruselini" className="carrusel">
              <div className="tarjet">
                <div className="plate">
                  <img src={appImg("./Ojingeo-muchim-5.png")} />
                </div>
                <div className="terjetin">
                  <div className="textFood">
                    <span className="food">Ojingeo</span>
                    <span className="foodDesc">Muchim</span>
                  </div>
                  <div className="score"> */}
                    {/* <img className="star" src={appImg("./icons/ic_star.svg")}> */}
                    {/* <span>5.0</span> */}
                    {/* <img className="heart" src={appImg("./icons/ic-favorite.svg")}> */}
                  {/* </div>
                </div> */}

                {/* <div id="hover1" className="divhover" hidden="true">
        <div className="hoverTarjet">
            <div className="descriptionHover">
                <img className="imgHover" src={appImg('./icons/ic_portion.svg')}>
                <span className="titTextHover">Tamaño de la porción</span>
                <span className="textHover">4 raciones</span>
            </div>
            <div className="descriptionHover">
                <img className="imgHover" src="assets/icons/ic_time.svg">
                <span className="titTextHover">Tiempo de preparación</span>
                <span className="textHover">10 minutos</span>
            </div>
            <div className="descriptionHover">
                <img className="imgHover" src="assets/icons/ic_chef.svg">
                <span className="titTextHover">Dificultad</span>
                <span className="textHover">fácil</span>
            </div>
        </div>
    </div> */}
              {/* </div>
            </ul>
          </div>
        </div> */}

        

        <div className="footer">
          <div className="textfooter">Con el patrocinio de</div>
          <img className="imgFooter" src={appImg("./Grupo-7610.png")} />
        </div>
      </div>
    </>
  );
};
