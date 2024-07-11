import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[550px] flex items-center justify-center mb-[56px]"
      style={{
        backgroundImage:
          "url('https://www.posnation.com/hubfs/Blog%20Featured%20Images/POS%20Nation%20Blog/merchandising-garden-center-display-ideas.webp')",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))",
        }}
      ></div>
      <div className="text-center text-white p-4  rounded-lg z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Make your Home like Garden
        </h1>
        <Link to={"/products"}>
          <button className="btn btn-outline text-white font-bold border border-white">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
