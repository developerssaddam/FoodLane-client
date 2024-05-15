const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 lg:mb-12 max-w-7xl mx-auto">
      <div className="flex-1 relative">
        <div className="w-full md:w-5/6">
          <img
            className="border-2 border-gray-600"
            src="https://i.ibb.co/f911ZS7/we.webp"
            alt=""
          />
        </div>
        <img
          className="absolute right-0 top-[200px] w-3/6 border-8 shadow-md hidden md:block"
          src="https://i.ibb.co/fD4mPSS/3we.jpg"
          alt=""
        />
      </div>
      <div className="flex-1 p-4">
        <h4 className="font_lobster font-semibold text-lg text-[#4D4C7D] mb-4 underline text-center md:text-left">
          ABOUT-US
        </h4>

       
          <h2 className="text-2xl md:text-5xl font-bold font_lato text-gray-700 mb-4">
            Crafting Culinary Experiences: Our Story
          </h2>

          <p className="text-lg text-gray-600 font-medium mb-3">
            Passionate team crafting unforgettable dining experiences, blending
            tradition with innovation for culinary excellence.
          </p>

          <p className="text-gray-500 font_lato mb-4">
            At the heart of our restaurant, a dedicated team harmonizes
            tradition and innovation, curating memorable dining experiences that
            celebrate flavors, community, and culinary craftsmanship. Welcome to
            our culinary journey.
          </p>
        

        <div className="flex gap-5">
          <button className="btn bg-[#5756a3] text-white">Our menus</button>
          <button className="btn btn-outline ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
