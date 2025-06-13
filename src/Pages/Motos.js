import { useContext} from "react";
import { Moto } from "../Shared/Moto";
import { MotoContext } from "../Contexts/MotoContext";




const Motos= ()=>{
  const {motos} = useContext(MotoContext); //<- utilisation du contexte, motos a écrire tel que passé dans le COntext.provider du parent (ici index.js)
  return (
    <div>
      <h1>Liste des motos</h1>
      <ul>
        {motos.map((moto, index) => (
          <Moto moto={moto} prix={moto.prix}></Moto>
        ))}
      </ul>
    </div>
  );
};



export {Motos};