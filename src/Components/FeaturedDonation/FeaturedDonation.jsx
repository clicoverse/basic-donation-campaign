import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedDonation = () => {
  const [cards, setCards] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [quary, setQuery] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const reqsData = await fetch("donation.json");
      const responseData = await reqsData.json();
      setCards(responseData);
      setFilteredData(responseData);
    };
    getUserData();
  }, []);

  const handleSearch = () => {
    if (quary.length > 0) {
      const filteredResults = cards.filter((item) =>
        item.category.toLowerCase().includes(quary.toLowerCase())
      );
      setCards(filteredResults);
    } else {
      setCards(filteredData);
    }
  };

  console.log(filteredData);
  return (
    <div>
      <div>
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
                    value={quary}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-1/2 rounded-l-md p-3"
                    type="text"
                    placeholder="Seach here ..."
                  />
                  <button
                    onClick={() => handleSearch()}
                    className="px-5 py-2 bg-[#FF444A] border-none text-white font-semibold rounded-r-md"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5">
          {cards?.map((card) => (
            <Link key={card.id} to={`./${card.id}`}>
              <div
                style={{
                  backgroundColor: card.color.card_background,
                  borderRadius: "6px",
                }}
              >
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <img
                    src={card.thumbnail_img}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <p
                      style={{
                        backgroundColor: card.color.button_background,
                        padding: "5px",
                        fontWeight: "600",
                        borderRadius: "6px",
                        color: card.color.button_text,
                      }}
                    >
                      {card.category}
                    </p>
                  </div>
                  <p
                    style={{
                      color: card.color.title_text,
                      fontWeight: "600",
                      fontSize: "1.25rem",
                    }}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDonation;
