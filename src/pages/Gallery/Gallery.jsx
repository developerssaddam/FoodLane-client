import { Helmet } from "react-helmet-async";
import useAuthHooks from "../../hooks/useAuthHooks";
import "./Gallery.css";

const Gallery = () => {
  const { user } = useAuthHooks();

  // handleAddExperience
  const handleAddExperience = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const feedback = form.feedback.value;
    const photo = form.photo.value;
    console.log(name, feedback, photo);
  };

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
            className="btn bg-[#4D4C7D] text-white px-5 btn-sm"
            onClick={() => document.getElementById("my_modal").showModal()}
          >
            ADD
          </button>
        </div>

        <div className="sectionTitle text-center max-w-3xl mx-auto space-y-3 mb-5 p-5">
          <h1 className="text-4xl font-bold">Food-Gallery</h1>
          <p className="font-medium">
            Embark on a gastronomic journey with our exclusive selection of
            top-tier dishes, meticulously crafted to captivate your senses and
            palate.
          </p>
        </div>

        {/* images-gallery */}
        <div className="gallery_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-5 mb-10">
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
          {/* item-1 */}
          <div className="item w-full h-[170px] lg:h-[210px] border-4 border-[#4D4C7D] rounded-lg">
            <img
              className="gallery_img object-cover w-full h-full"
              src="https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-lg font-bold mb-2">User Name</h2>
              <p className="text-sm font-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima
              </p>
            </div>
          </div>
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
              <div className="w-full max-w-md p-2 md:p-8 space-y-3 rounded-xl">
                <h1 className="text-2xl font-bold text-center">
                  Add-Food-experience
                </h1>
                <form onSubmit={handleAddExperience} className="space-y-6">
                  <div className="space-y-1 text-sm">
                    <label className="block text-gray-400">Username</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      readOnly
                      placeholder="Username"
                      className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <label className="block text-gray-400">Feedback</label>
                    <input
                      type="text"
                      name="feedback"
                      placeholder="Feedback"
                      className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <label className="block text-gray-400">Photo URL</label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      className="w-full px-4 py-3 rounded-md border-2 focus:border-violet-400"
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
