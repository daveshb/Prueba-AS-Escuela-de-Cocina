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
  
  const {getRecipe, setGetRecipe,recipeId} = useContext(MyContext);


  useEffect(() => {
    axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=d5e3bd2c29c04970bb60b3c4471d40cd`
      ).then((response) => {
        setGetRecipe(response.data[0].steps);
    });
  }, [recipeId]);

  console.log(getRecipe);
    // return getById;
};
