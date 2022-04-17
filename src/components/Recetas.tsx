import axios from "axios"
import { useState ,useEffect } from 'react';

interface Receta {
  id: number,
  url: string,
  image: string,
  title: string,
  item: string,
  result: string,
  filtrp: string,

}  

export const Recetas = (category:string) => {
  const [consulta, setConsulta] = useState<Receta[]>([]);

  useEffect(() => {
    axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=c0cda2eff7fc40b2be2f8dd29eabca23&query=${category}`
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=ae9ee4f765334935aa87bc1570e32ca2&query=${category}`
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=d5e3bd2c29c04970bb60b3c4471d40cd&query=${category}`
    ).then((response) => {
      setConsulta(response.data.results);
    });
  }, [category]);

    return consulta;
};

