import "./styleCards.scss";
import { Link } from "react-router-dom";
import { constants } from '../../pages/Constants';
const appImg = require.context("../../assets", true);


// const imgc = 'Ojingeo-muchim-5.png';


export const Cards3 = () => {
  return (
    <>
      <Link className="menu " to="">
        {/* <img src={appImg(`./${imgc}`)} className="plate" /> */}
        <img src={appImg('./Ojingeo-muchim-1.png')} className="plate" />
        <div className="mytext">
          <h2 className="mytext1 ">Roasted</h2>
          <h2 className="mytext2">Carrot</h2>
        </div>
        <div className="score">
          <div className="punatje">
            <img src={appImg("./icons/ic_star.svg")} className="star" />
            <div className="number">4.5</div>
          </div>
          <img src={appImg("./icons/ic-favorite.svg")} className="like" />
        </div>

        <div className="mostar">
          <div>
            <img src={appImg("./icons/ic_portion.svg")} />
            <div className="textCard1">Tamaño de la porcion</div>
            <div className="textCard2">4 raciones</div>
          </div>

          <div>
            <img src={appImg("./icons/ic_time.svg")} />
            <div className="textCard1">tiempo de preparación </div>
            <div className="textCard2">10 minutos</div>
          </div>

          <div>
            <img src={appImg("./icons/ic_chef.svg")} />
            <div className="textCard1">Dificultad</div>
            <div className="textCard2">facil</div>
          </div>
        </div>
      </Link>
    </>
  );
};

