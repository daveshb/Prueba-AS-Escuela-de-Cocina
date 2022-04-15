import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { GetById } from '../../components/GetById';
const appImg = require.context("../../assets/", true);

export const RecetaById = () => {
  const Navigate = useNavigate();
  const { recipeId } = useContext(MyContext);
  
  // const consultaPorId =GetById(recipeId);

  GetById();
  // console.log(recipeId);
  // console.log(consultaPorId);

  
  const handleReturn = () => {
    Navigate(-1);
  };
  
  return (
    <>
    <div className="">
      <img src={appImg("./banner_aux.png")} className="banner" />
    </div>
      <div>{recipeId}</div>

      <button onClick={handleReturn}>Regresar</button>
    </>
  );
};
