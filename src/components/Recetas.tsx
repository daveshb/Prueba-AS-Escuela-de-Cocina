import axios from "axios";
import { useState, useEffect } from "react";

interface Receta {
  id: number;
  url: string;
  image: string;
  title: string;
  item: string;
  result: string;
  filtrp: string;
}

export const Recetas = (category: string) => {
  const [consulta, setConsulta] = useState<Receta[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=c0cda2eff7fc40b2be2f8dd29eabca23&query=${category}`
      )
      .then((response) => {
        setConsulta(response.data.results);
      });
  }, [category]);

  return consulta;
};
