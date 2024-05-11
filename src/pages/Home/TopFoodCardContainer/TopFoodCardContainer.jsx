import TopFoodCard from "../../../components/TopFoodCard/TopFoodCard";

const TopFoodCardContainer = () => {
  return (
    <div className="my-16">
      <div className="sectionTitle text-center max-w-3xl mx-auto space-y-3 mb-5 p-5">
        <h1 className="text-4xl font-bold">Top-Foods</h1>
        <p className="font-medium">
          Embark on a gastronomic journey with our exclusive selection of
          top-tier dishes, meticulously crafted to captivate your senses and
          palate.
        </p>
      </div>
      <div className="cardContainer max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* item-1 */}
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
        <TopFoodCard />
      </div>
    </div>
  );
};

export default TopFoodCardContainer;
