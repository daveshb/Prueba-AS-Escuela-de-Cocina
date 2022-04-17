import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { GetById } from '../../components/GetById';

const appImg = require.context("../../assets/", true);

type Props = {
  step: number;
}


export const RecetaById  =  () => {
  GetById();
  const Navigate = useNavigate();
  const { recipeId, imagen,titulo,getRecipe} = useContext(MyContext);
  
  // const consultaPorId =GetById(recipeId);

  
  // console.log(recipeId);
  // console.log(consultaPorId);
  // console.log(getRecipe[0].steps);

  
  const handleReturn = () => {
    Navigate(-1);
  };
  
  return (
    <>
    <div className="">
      <img src={appImg("./banner_aux.png")} className="bannerPage" />
    </div>
      {/* <div>{recipeId}</div> */}

      <button className="boton" onClick={handleReturn}>Regresar</button>
      <div className="containerRecipe">
      <div className="ContainerReceta">
        <div className="textReceta">{titulo}</div>
        <img className="imgReceta" src={`${imagen}`} />
        {/* <div className="textReceta">Ingredientes</div>
        <div>Aqui los ingredientes</div> */}
        <div className="textReceta">Preparacion</div>
        <div>

          {getRecipe[0].steps.map((item:Props) => (
            
              <li 
              key={item.step}
              className="preparacion">{item.step}</li>
          ))} 
        

        </div>
      </div>
      </div>


      <div className="footerPages">
        <div className="textfooter">Con el patrocinio de</div>
        <img className="imgFooter" src={appImg("./Grupo-7610.png")} />
      </div>
    </>
  );
};
