
import "./styles.scss";
import { Recetas } from "../../components/Recetas";
const appImg = require.context("../../assets/", true);

export const Sopas = () => {

  const consulta = Recetas("soups");

  const platos = consulta.map((receta: any) => {
    return {
      id: receta.id,
      title: receta.title,
      image: receta.image,
    };
  });

  const handleClick = (id: number) => {
    console.log(id);
  };

  return (
    <>
    <div className="">
      <img src={appImg("./banner_aux.png")} className="banner" />
    </div>

    <div className="container">
      {platos.map((item) => (
        <div 
        onClick={() => handleClick(item.id)} 
        className="entrada pointer"
        key={item.id}>
          <h2 className="text-card">{item.title}</h2>
          <img className="img-card" src={`${item.image}`} />
        </div>
      ))}
    </div>

    <div className="footer">
      <div className="textfooter">Con el patrocinio de</div>
      <img className="imgFooter" src={appImg("./Grupo-7610.png")} />
    </div>
  </>
  );
};


