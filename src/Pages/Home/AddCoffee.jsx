import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddCoffee = () => {
    const { name } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const quantity = form.quantity.value;
        const madein = form.madein.value;
        const taste = form.taste.value;
        const color = form.color.value;
        const photo = form.photo.value;
        const coffee = {
            name, brand, quantity, madein, taste, color, photo
        }
        console.log(coffee)
    }

    console.log(name)
    return (
        <div className="bg-[#DBC1AC] py-8 pb-12 max-h-screen">
            <h2 className="text-3xl font-bold">Please Add Coffee</h2>
            <form onSubmit={handleSubmit} className="w-2/3 mx-auto  flex flex-col justify-center items-center  " >
                <div className="  w-2/3">
                    <div className="md:flex  my-2 space-y-2 md:space-y-0 md:gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Type Name"
                            className="input input-bordered input-info py-2 w-full max-w-xs " />
                        <input
                            type="text"
                            name="brand"
                            placeholder="Type Brand"
                            className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="md:flex my-2 gap-4 space-y-2 md:space-y-0 ">
                        <input
                            type="text"
                            name="quantity"
                            placeholder="Type quantity"
                            className="input input-bordered input-info w-full max-w-xs " />
                        <input
                            type="text"
                            name="madein"
                            placeholder="Type Made country"
                            className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="md:flex my-2 space-y-2 md:space-y-0 gap-4 ">
                        <input
                            type="text"
                            name="taste"
                            placeholder="Type taste"
                            className="input input-bordered input-info w-full max-w-xs " />
                        <input
                            type="text"
                            name="color"
                            placeholder="Type color"
                            className="input input-bordered input-info w-full max-w-xs" />
                    </div>

                </div>



                <input className="w-2/3 input input-bordered input-info my-4 mx-auto  " name="photo" placeholder="photo" type="text" />
                <input className="w-2/3 mx-auto  btn btn-outline btn-secondary" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;