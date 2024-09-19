import { useLoaderData } from "react-router-dom";
import CoffeeCrad from "./CoffeeCrad";

const ShowAllCoffee = () => {
  const loadedCoffes = useLoaderData();

  return (
    <div>
      <h2>all cofffe is coming...</h2>
      <h2>Coffeess Count: {loadedCoffes.length}</h2>
      <div>
        <h2 className="text-center mb-9 text-4xl font-bold text-green-500">
          All Coffees Are Here
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4 w-4/5 mx-auto">
        {loadedCoffes.map((coffee) => (
          <CoffeeCrad key={coffee._id} coffee={coffee}></CoffeeCrad>
        ))}
      </div>
    </div>
  );
};

export default ShowAllCoffee;
