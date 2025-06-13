import axios from "axios"

const AddMotoBack = async() => {
    await axios.get("monbackend").then(
        (response) => {
            console.log(response);
        }
    );
}