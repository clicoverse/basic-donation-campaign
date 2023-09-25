import FeaturedDonation from "../../Components/FeaturedDonation/FeaturedDonation";
import HeroSection from "../../Components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="mx-auto max-w-screen-2xl py-5 sm:px-10 lg:px-20">
        <FeaturedDonation></FeaturedDonation>
      </div>
    </div>
  );
};

export default Home;
