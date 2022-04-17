import { useState } from "react";
import { MyContext } from "./Context";


interface props {
  children: JSX.Element | JSX.Element[];
  
}
interface Receta {
  id: number,
  url: string,
  image: string,
  title: string,
  item: string,
  result: string,
}  


export const Provider = ({ children }: props) => {

  
    const [recipeId, setRecipeId] = useState(0);
    const [getRecipe, setGetRecipe] = useState(0);
    const [imagen, setImagen] = useState('');
    const [titulo, setTitulo] = useState('');
    const [consulta, setConsulta] = useState('');


  return (
  <MyContext.Provider value={{
    recipeId,
    setRecipeId,
    getRecipe,
    setGetRecipe,
    imagen,
    titulo,
    setImagen,
    setTitulo,
    consulta,
    setConsulta,

  }}>{children}</MyContext.Provider>
  )};
