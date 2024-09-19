const CoffeeCrad = ({ coffee }) => {
  const { name, quantity, brand, color, taste, madein } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl grid grid-cols-3 border p-4">
      <figure className="">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className=" font-semibold flex justify-between col-span-2 items-center px-2  border border-white gap-4">
        <div className="flex flex-col gap-14 ">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Brand: {brand}</p>
          </div>
          <button className="btn btn-sm w-[100px] btn-active btn-secondary ">
            See Details
          </button>
        </div>

        <div className="join join-vertical gap-2">
          <button className="btn join-item btn-accent">S.Dtls</button>
          <button className="btn join-item btn-error">Delete</button>
          <button className="btn join-item btn-primary">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCrad;
