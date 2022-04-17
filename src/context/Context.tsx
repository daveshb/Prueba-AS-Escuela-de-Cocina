import { createContext } from "react";

export type contextProps ={
    recipeId : number;
    setRecipeId : (id: number) => void;
    getRecipe : any;
    setGetRecipe : (id: number) => void;
    imagen : string;
    titulo : string;
    setImagen : (imagen: string) => void;
    setTitulo : (titulo: string) => void;
    consulta: string;
    setConsulta: (consulta: string) => void;
    
    
}
export const MyContext=createContext<contextProps>({} as contextProps);

