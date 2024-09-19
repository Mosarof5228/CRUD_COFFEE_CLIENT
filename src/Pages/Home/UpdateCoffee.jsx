import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();
    const { name, color, madein, brand, taste, } = loadedCoffee;
    const handleModify = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const country = form.madein.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const color = form.color.value;
        const newCoffee = {
            name, brand, country, taste, photo, color
        }
        console.log(newCoffee)
        fetch(`http://localhost:5000/coffees/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }
    return (
        <div className="bg-[#D4BBA7] font-semibold py-16  ">
            <h2 className="text-center font-bold text-3xl underline pb-8">Please Modify this Coffee</h2>
            <form onSubmit={handleModify} className="text-whit">
                <div className="flex  gap-2 px-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <input type="text" name="brand" defaultValue={brand} placeholder="Brand name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-2 px-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="madein" defaultValue={madein} placeholder="Enter Coutry" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-2 px-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <input type="text" name="color" defaultValue={color} placeholder="Color" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex text-center justify-center  items-center">
                    <input className="btn btn-primary w-1/3 px-8  mt-8" type="submit" value="Modify Submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;