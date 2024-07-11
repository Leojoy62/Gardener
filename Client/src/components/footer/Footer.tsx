const Footer = () => {
  return (
    <div className="bg-gray-800 w-full h-[300px] md:p-24">
      <div className="text-gray-400 flex flex-col md:flex-row justify-center items-center md:gap-24">
        <h1 className="text-[50px] font-bold text-white">Gardener</h1>
        <div className="font-semibold">
          <h3 className="text-xl text-white">Follow Us:</h3>
          <h5>Facebook</h5>
          <h5>Twitter</h5>
          <h5>LinkedIn</h5>
          <h5>Instagram</h5>
        </div>
      </div>
      <p className="text-white text-center mt-5">
        © 2024 Gardener. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
