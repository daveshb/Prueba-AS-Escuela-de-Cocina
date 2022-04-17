import "./styles.scss";
import { Recetas } from "../../components/Recetas";
import { useContext, useMemo, useEffect } from 'react';
import {  MyContext } from '../../context/Context';
import {  useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const appImg = require.context("../../assets/", true);


export const Vegetarianos = () => {
  
  const {setRecipeId,setTitulo, recipeId, setImagen} = useContext(MyContext);
  const consulta = Recetas("vegetariano");


  // const navigate = useNavigate();

  const arrayConsulta = consulta.map((receta: any) => {
    return {
      id: receta.id,
      title: receta.title,
      image: receta.image,
    };
  });

  const handleClick = (id: number, title: string, imagen: string) => {
    console.log(id);
    setRecipeId(id);
    setTitulo(title);
    setImagen(imagen);
  };


  return (
    <>
      <div className="">
        <img src={appImg("./banner_aux.png")} className="bannerPage" />
      </div>


      <div className="container">
        {arrayConsulta.map((item) => (
          <Link to="/receta" 
          key={item.id}>
          <div 
          onClick={() => handleClick(item.id , item.title, item.image)} 
          className="entrada pointer"
          >
            <h2 className="text-card">{item.title}</h2>
            <img className="img-card" src={`${item.image}`} />
          </div>
          </Link>
        ))}
      </div>

      <div className="footerPages">
        <div className="textfooter">Con el patrocinio de</div>
        <img className="imgFooter" src={appImg("./Grupo-7610.png")} />
      </div>
    </>
  );
};

