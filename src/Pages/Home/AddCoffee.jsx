import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddCoffee = () => {
    const { name } = useContext(AuthContext);


    console.log(name)
    return (
        <div>
            <h2>Please Add Coffee</h2>
        </div>
    );
};

export default AddCoffee;