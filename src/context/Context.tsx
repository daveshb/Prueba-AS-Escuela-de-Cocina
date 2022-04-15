import { createContext } from "react";

export type contextProps ={
    recipeId : number;
    setRecipeId : (id: number) => void;
    getRecipe : number;
    setGetRecipe : (id: number) => void;
}
export const MyContext=createContext<contextProps>({} as contextProps);

