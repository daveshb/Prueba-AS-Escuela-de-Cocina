import "./styles.scss";
import {  useContext } from "react";
import { MyContext } from '../../context/Context';
import { Cards } from '../../components/Cards/Cards';
import { constants } from '../Constants';
import { Cards3 } from '../../components/Cards/Cards3';
import { Cards2 } from '../../components/Cards/Cards2';
import { Cards4 } from '../../components/Cards/Cards4';

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
  id: number,
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
  

{/* {constants.map((item:arrayCards) =>  (
<Cards
    key={item.id}
    img={item.imgc}
    text1={item.text1}
    text2={item.text2}
    score={item.score}
    raciones={item.raciones}
    tiempo={item.tiempo}
    dificultad={item.dificultad}
 />
))} */}

<Cards/>
<Cards2/>
<Cards3/>
<Cards4/>





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
