import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { GetById } from "../../components/GetById";

const appImg = require.context("../../assets/", true);

export const RecetaById = () => {
  const Navigate = useNavigate();
  const { imagen, titulo, getRecipe } = useContext(MyContext);

  type Props = {
    step: number;
    preparacion: number;
  };

  const handleReturn = () => {
    Navigate(-1);
  };

  const preparacion = GetById();

  return (
    <>
      <div className="">
        <img src={appImg("./banner_aux.png")} className="bannerPage" />
      </div>
      <button className="boton" onClick={handleReturn}>
        Regresar
      </button>
      <div className="containerRecipe">
        <div className="ContainerReceta">
          <div className="textReceta">{titulo}</div>
          <img className="imgReceta" src={`${imagen}`} />
          <div className="textReceta">Preparación</div>
          <div>
            {preparacion &&
              preparacion[0].steps.map((item: Props) => (
                <li key={item.step} className="preparacion">
                  {item.step}
                </li>
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
