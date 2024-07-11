import CategoryCard from "./CategoryCard";

type TCategory = {
  id: number;
  name: string;
  image: string;
};

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Medicinal Plants",
      image:
        "https://delivertree.com.au/cdn/shop/collections/Elaeocarpus_eumindi_-_Eumundi_Quandong.jpg?v=1696297526&width=1500",
    },
    {
      id: 2,
      name: "Indoor Plants",
      image:
        "https://delivertree.com.au/cdn/shop/collections/Elaeocarpus_eumindi_-_Eumundi_Quandong.jpg?v=1696297526&width=1500",
    },
    {
      id: 3,
      name: "Flower Plants",
      image:
        "https://delivertree.com.au/cdn/shop/collections/Elaeocarpus_eumindi_-_Eumundi_Quandong.jpg?v=1696297526&width=1500",
    },
  ];

  return (
    <div className="md:flex  md:justify-between flex flex-col md:flex-row justify-center  items-center ">
      {categories.map((category: TCategory) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default Categories;
