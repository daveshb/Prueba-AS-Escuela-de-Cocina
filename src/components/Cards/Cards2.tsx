import "./styleCards.scss";
import { Link } from "react-router-dom";
const appImg = require.context("../../assets", true);

export const Cards2 = () => {
  return (
    <>
      <Link className="menu card2 " to="">
        <img src={appImg("./Ojingeo-muchim.png")} className="plate" />
        <div className="mytext">
          <h2 className="mytext1 ">Cola</h2>
          <h2 className="mytext2">Chicken</h2>
        </div>
        <div className="score">
          <div className="punatje">
            <img src={appImg("./icons/ic_star.svg")} className="star" />
            <div className="number">5.0</div>
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
