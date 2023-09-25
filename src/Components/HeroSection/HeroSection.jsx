const HeroSection = () => {
  return (
    <div className="mx-auto max-w-screen-2xl sm:px-5 lg:px-10 mb-8 lg:mb-16">
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage: "url(donation-hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-70"></div>
        <div className="hero-content text-center text-black">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center">
              <input
                className="w-1/2 rounded-l-md p-3"
                type="text"
                placeholder="Seach here ..."
              />
              <button className="px-5 py-2 bg-[#FF444A] border-none text-white font-semibold rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
