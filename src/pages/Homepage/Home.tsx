import "./styles.scss";
import {  useContext } from "react";
import { MyContext } from '../../context/Context';
import { Cards } from '../../components/Cards/Cards';
import { constants } from '../Constants';

const appImg = require.context("../../assets", true);


interface propss {
 
  children?: React.ReactChild | React.ReactChild[];
  Cards: React.ReactChild | React.ReactChild[];
  imgc : string,
  text1: string,
  text2: string,
  score: string,
  raciones: string,
  tiempo: string,
  dificultad: string,
}

interface arrayCards {
  imgc : string,
  text1: string,
  text2: string,
  score: string,
  raciones: string,
  tiempo: string,
  dificultad: string,
}

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

        <div className="tituloCarrusel">
          Nuevas Recetas
        </div>


<div className="conainerCarrusel">
<div className="carrusel">
  
<Cards/>
<Cards/>
<Cards/>
<Cards/>


  {/* {constants.map((item:arrayCards)=>(
    <Cards
    key={item.imgc}
    imgc={item.imgc}
    text1={item.text1}
    text2={item.text2}
    score={item.score}
    raciones={item.raciones}
    tiempo={item.tiempo}
    dificultad={item.dificultad}
    />
  ))
} */}

  


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
