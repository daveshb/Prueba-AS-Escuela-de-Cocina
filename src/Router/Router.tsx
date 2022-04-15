import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from './Navbar';
import { Home } from "../pages/Homepage/Home";
import { Vegetarianos } from "../pages/vegetarianosPage/Vegetarianos";
import { PlatosPrincipales } from "../pages/PlatosPrincipalesPage/PlatosPrincipales";
import { Tortas } from "../pages/TortasPage/Tortas";
import { ComidaRapida } from "../pages/ComidaRapidaPage/ComidaRapida";
import { MenuNinos } from "../pages/MenuNinosPage/MenuNinos";
import { Sopas } from "../pages/SopasPage/Sopas";
import { Provider } from '../context/Provider';
import { RecetaById } from '../pages/RecetaById/RecetaById';

export const Router = () => {
  return (
    <Provider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={  <Home /> } />
        <Route path="/vegetarianos" element={<Vegetarianos />} />
        <Route path="/platosPrincipales" element={<PlatosPrincipales />} />
        <Route path="/tortas" element={<Tortas />} />
        <Route path="/comidaRapida" element={<ComidaRapida />} />
        <Route path="/menuNinos" element={<MenuNinos />} />
        <Route path="/sopas" element={<Sopas />} />
        <Route path="/receta" element={<RecetaById />} />
       
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};
