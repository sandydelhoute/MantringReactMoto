import { useContext, useEffect} from "react";
import { Moto } from "../Shared/Moto";
import { MotoContext } from "../Contexts/MotoContext";




const Motos= ()=>{
  const {motos} = useContext(MotoContext);
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