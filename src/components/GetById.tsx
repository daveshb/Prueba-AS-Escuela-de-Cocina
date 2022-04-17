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

  useEffect(() => {
    axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=ae9ee4f765334935aa87bc1570e32ca2`
      ).then((response) => {
        setGetRecipe(response.data);
    });
  }, [recipeId]);

    
};
