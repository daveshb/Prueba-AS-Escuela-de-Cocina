import "./styles.scss";
import { Recetas } from "../../components/Recetas";
import { useContext } from "react";
import {  MyContext } from '../../context/Context';
import {  useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const appImg = require.context("../../assets/", true);


export const Vegetarianos = () => {
  
  const {setRecipeId} = useContext(MyContext);
  const consulta = Recetas("vegetariano");

  // const navigate = useNavigate();

  const pasta = consulta.map((receta: any) => {
    return {
      id: receta.id,
      title: receta.title,
      image: receta.image,
    };
  });

  const handleClick = (id: number) => {
    console.log(id);
    setRecipeId(id);
  };



  return (
    <>
      <div className="">
        <img src={appImg("./banner_aux.png")} className="banner" />
      </div>


      <div className="container">
        {pasta.map((item) => (
          <Link to="/receta" 
          key={item.id}>
          <div 
          onClick={() => handleClick(item.id)} 
          className="entrada pointer"
          >
            <h2 className="text-card">{item.title}</h2>
            <img className="img-card" src={`${item.image}`} />
          </div>
          </Link>
        ))}
      </div>

      <div className="footer">
        <div className="textfooter">Con el patrocinio de</div>
        <img className="imgFooter" src={appImg("./Grupo-7610.png")} />
      </div>
    </>
  );
};
function setRecipeId(id: number) {
  throw new Error("Function not implemented.");
}

