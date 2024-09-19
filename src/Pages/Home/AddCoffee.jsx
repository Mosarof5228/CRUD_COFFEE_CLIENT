import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

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
      name,
      brand,
      quantity,
      madein,
      taste,
      color,
      photo,
    };
    console.log(coffee);
    form.reset();
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Coffee Created Successfully");
        }
      });
  };

  console.log(name);
  const handleShowAllCoffee = () => {
    console.log("coming");
  };
  return (
    <div className="bg-[#DBC1AC] py-8 pb-12 max-h-screen">
      <h2 className="text-3xl font-bold">Please Add Coffee</h2>
      <form
        onSubmit={handleSubmit}
        className="w-2/3 mx-auto  flex flex-col justify-center items-center  "
      >
        <div className="  w-2/3">
          <div className="md:flex  my-2 space-y-2 md:space-y-0 md:gap-4">
            <input
              type="text"
              required
              name="name"
              placeholder="Type Name"
              className="input required input-bordered input-info py-2 w-full max-w-xs "
            />
            <input
              type="text"
              required
              name="brand"
              placeholder="Type Brand"
              className="input required input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div className="md:flex my-2 gap-4 space-y-2 md:space-y-0 ">
            <input
              type="text"
              required
              name="quantity"
              placeholder="Type quantity"
              className="input required input-bordered input-info w-full max-w-xs "
            />
            <input
              type="text"
              required
              name="madein"
              placeholder="Type Made country"
              className="input required input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div className="md:flex my-2 space-y-2 md:space-y-0 gap-4 ">
            <input
              type="text"
              required
              name="taste"
              placeholder="Type taste"
              className="input required input-bordered input-info w-full max-w-xs "
            />
            <input
              type="text"
              required
              name="color"
              placeholder="Type color"
              className="input  input-bordered input-info w-full max-w-xs"
            />
          </div>
        </div>

        <input
          className="w-2/3 input input-bordered input-info my-4 mx-auto  "
          name="photo"
          placeholder="photo"
          type="text"
          required
        />
        <input
          className="w-2/3 mx-auto  btn btn-outline btn-secondary"
          type="submit"
          value="Add Coffee"
        />
      </form>
      <div className="w-1/3  mx-auto mt-8 ">
        <a
          href="#_"
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <Link
            to={"/showAllCoffee"}
            onClick={handleShowAllCoffee}
            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
          >
            Show All Coffees
          </Link>
        </a>
      </div>
    </div>
  );
};

export default AddCoffee;
