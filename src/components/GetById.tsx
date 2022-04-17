import axios from "axios"
import { useEffect, useContext } from 'react';
import { MyContext } from '../context/Context';

interface Receta {
  id: number,
  url: string,
  image: string,
  title: string,
  steps: string,
}  

export const GetById = () => {
  
  const {setGetRecipe,recipeId} = useContext(MyContext);

   useEffect( ()  =>  {
    axios.get (`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=c0cda2eff7fc40b2be2f8dd29eabca23`)
    .then((response) => {
         setGetRecipe(response.data);
    });
  }, [recipeId]);

    
};
