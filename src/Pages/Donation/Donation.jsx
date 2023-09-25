import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLs } from "../../Utils/LocalStorage";

const Donation = () => {
  const donations = useLoaderData();
  const [appliedDonations, setAppliedDonations] = useState([]);
  const [appliedDonationsLength, setAppliedDonationsLength] = useState(4);

  useEffect(() => {
    const storedDonationIds = getDataFromLs();
    if (donations.length > 0) {
      const donationApplied = [];
      for (const id of storedDonationIds) {
        const donation = donations?.find((donation) => donation.id === id);
        donationApplied.push(donation);
      }
      setAppliedDonations(donationApplied);
    }
  }, [donations]);

  return (
    <div className="mx-auto flex flex-col justify-center items-center max-w-screen-2xl py-10 sm:px-5 lg:px-10 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {appliedDonations
          ?.slice(0, appliedDonationsLength)
          .map((appliedDonation) => (
            <div
              key={appliedDonation.id}
              style={{
                backgroundColor: appliedDonation.color.card_background,
                borderRadius: "6px",
                display: "flex",

                position: "relative",
              }}
            >
              <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border ">
                <img
                  src={appliedDonation.thumbnail_img}
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p
                    style={{
                      backgroundColor: appliedDonation.color.button_background,
                      padding: "7px",
                      fontWeight: "600",
                      borderRadius: "6px",
                      lineHeight: "1.625",
                      color: appliedDonation.color.button_text,
                    }}
                  >
                    {appliedDonation.category}
                  </p>
                </div>
                <p
                  style={{
                    color: "black",
                    fontWeight: "600",
                    margin: "2rem 0",
                    fontSize: "1.5rem",
                  }}
                >
                  {appliedDonation.title}
                </p>
                <p
                  style={{
                    color: appliedDonation.color.title_text,
                    fontWeight: "600",
                    margin: "2rem 0",
                    fontSize: "1.5rem",
                  }}
                >
                  $ {appliedDonation.price}.00
                </p>
                <a className="inline-block" href="#">
                  <button
                    style={{
                      background: appliedDonation.color.title_text,
                      color: "white",
                      padding: "8px",
                      borderRadius: "0.375rem",
                    }}
                    type="button"
                  >
                    View Details
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>
      <div
        className={
          appliedDonationsLength === appliedDonations.length && "hidden"
        }
      >
        <button
          onClick={() => setAppliedDonationsLength(appliedDonations.length)}
          className="px-5 mt-10 py-2 bg-[#009444] border-none text-white font-semibold rounded-md"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
