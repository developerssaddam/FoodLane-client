import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>FoodLane | Gallery</title>
      </Helmet>
      <div>
        <div className="relative img_area max-w-7xl mx-auto rounded-2xl my-10">
          <img
            className="w-full h-[150px] md:h-[300px] object-cover rounded-2xl"
            src="https://i.ibb.co/tsTP2cB/43.jpg"
            alt=""
          />
          <div className="absolute top-1/3 left-1/4 md:top-1/2 md:left-1/3 text-white text-center space-y-3 z-10">
            <h1 className="text-xl md:text-4xl font-semibold">
              ALL-FOODS-GALLERY
            </h1>
            <p className="font-medium">
              {" "}
              <span className="text-[#a63aef]">Home</span> | Gallery
            </p>
          </div>
        </div>

        <div className="search max-w-7xl mx-auto flex justify-end mb-10">
          <button
            onClick={() => document.getElementById("my_modal").showModal()}
          >
            ADD
          </button>
        </div>

        {/* modal_area */}

        <dialog id="my_modal" className="modal">
          <div className="modal-box">
            {/* close-modal-form */}
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            {/* user-input-form */}
            <div>
              <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
                <h1 className="text-2xl font-bold text-center">Add-Food-experience</h1>
                <form className="space-y-6">
                  <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-400">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="w-full px-4 py-3 rounded-md border-2 text-gray-100 focus:border-violet-400"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-400">
                      Feedback
                    </label>
                    <input
                      type="text"
                      name="feedback"
                      placeholder="Feedback"
                      className="w-full px-4 py-3 rounded-md border-2 text-gray-100 focus:border-violet-400"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-400">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      className="w-full px-4 py-3 rounded-md border-2 text-gray-100 focus:border-violet-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="block w-full p-3 text-center rounded-sm text-white bg-[#4D4C7D]"
                  >
                    Add Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Gallery;
