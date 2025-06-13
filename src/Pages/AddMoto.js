import { useContext, useState } from "react";
import { MotoContext } from "../Contexts/MotoContext";
import { useNavigate } from "react-router";

const AddMoto = () => {
    const [modele, setModele]=useState("s32"); //impossible de modifier la variable sans son set
    const [constructeur, setConstructeur]=useState("Surge");
    const [prix, setPrix]=useState(40);
    const {motos, setMotos} = useContext(MotoContext);

    const navigate =  useNavigate();

    const EnvoiDeFormulaire = (event) => { //fonction lié à un évènement décrit dans balise html
        event.preventDefault(); //empêche comportement par défaut du html
        console.log("Envoi de formulaire");
        var newListMoto = motos;
        newListMoto.push({constructeur: constructeur, prix:prix, modele:modele}); //liste intermédiaire pour pouvoir set le nouvel élèment
        setMotos(newListMoto);
        console.log(motos);
    }
    const ModeleChange = (event) =>{
        console.log("Changement de modele");
        setModele(event.target.value);
        console.log("Ma valeur est: ");
        console.log(modele);
    }
    const ConstructeurChange = (event) =>{
        console.log("Changement de constructeur");
        setConstructeur(event.target.value);
        console.log("Ma valeur est: ");
        console.log(constructeur);
    }
    const PrixChange = (event) =>{
        console.log("Changement de prix");
        setPrix(event.target.value);
        console.log("Ma valeur est: ");
        console.log(prix);
    }
    
    return(
        <div>
        <form onSubmit={EnvoiDeFormulaire}>
            <label>Insérer le modèle</label>
            <input type="text" value={modele} onChange={ModeleChange}></input>
            <label>Insérer le constructeur</label>
            <input type="text" value={constructeur} onChange={ConstructeurChange}></input>
            <label>Insérer le prix</label>
            <input type="number" value={prix} onChange={PrixChange}></input>
            <input type="submit"></input>
        </form>
        <button onClick={() => {
       navigate("/Motos");
      }}>Page d'accueil</button>
        </div>
    )
};

export {AddMoto};