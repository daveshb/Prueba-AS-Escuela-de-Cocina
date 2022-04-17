import axios from "axios";
import { useEffect, useContext } from "react";
import { MyContext } from "../context/Context";

interface Receta {
  id: number;
  url: string;
  image: string;
  title: string;
  steps: string;
}

export const GetById = () => {
  const { setGetRecipe, recipeId, getRecipe } = useContext(MyContext);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=3c6879d97c6c4cdb8023b6c9ed92ba8c`
        )
        .then((response) => {
          setGetRecipe(response.data);
        });
    };
    getData();
  }, [recipeId]);

  return getRecipe;
};
