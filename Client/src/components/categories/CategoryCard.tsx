import { useNavigate } from "react-router-dom";

type TCategoryCardProps = {
  name: string;
  image: string;
};

const CategoryCard = ({ name, image }: TCategoryCardProps) => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate(`/products?category=${name}`);
  };
  return (
    <div
      key={name}
      className=" flex flex-col justify-end items-center rounded-lg shadow-lg w-[300px] h-[300px] mt-[100px] p-0"
    >
      <img
        src={image}
        className="w-full h-[300px] object-cover mb-2 rounded-t-lg"
      />
      <div>
        <h2 className="text-xl font-bold text-center">{name}</h2>
      </div>

      <button
        onClick={handleViewProducts}
        className="btn bg-gray-800 w-full mt-2 text-[16px] font-bold text-white hover:text-green-500 hover:bg-black rounded-none rounded-b-lg"
      >
        View Products
      </button>
    </div>
  );
};

export default CategoryCard;
{
  /* <div className="card bg-base-100 w-[400px] shadow-xl">
<figure>
  <img src={image} alt="categories" />
</figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>

  <div className="card-actions justify-end">
    <button
      onClick={handleViewProducts}
      className="btn bg-gray-800 w-full mt-2 text-[16px] font-bold text-white hover:text-green-500 hover:bg-black rounded-none rounded-b-lg"
    >
      View Products
    </button>
  </div>
</div>
</div> */
}
