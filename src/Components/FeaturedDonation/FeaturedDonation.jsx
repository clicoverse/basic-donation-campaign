import { useEffect, useState } from "react";

const FeaturedDonation = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5">
      {cards?.map((card) => (
        <div
          key={card.id}
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
      ))}
    </div>
  );
};

export default FeaturedDonation;
