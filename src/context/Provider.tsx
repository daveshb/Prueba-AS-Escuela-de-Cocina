import { useState } from "react";
import { MyContext } from "./Context";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: props) => {

  
    const [recipeId, setRecipeId] = useState(0);
    const [getRecipe, setGetRecipe] = useState(0);


  return (
  <MyContext.Provider value={{
    recipeId,
    setRecipeId,
    getRecipe,
    setGetRecipe
  }}>{children}</MyContext.Provider>
  )};
