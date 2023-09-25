import { Typography } from "@material-tailwind/react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { saveDataToLs } from "../../Utils/LocalStorage";

const DonationCard = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations?.find((donation) => donation.id === idInt);

  const handleDonateClick = () => {
    saveDataToLs(idInt);
    Swal.fire({
      icon: "success",
      title: "Thank You",
      text: "Your Donation amount received",
    });
  };

  return (
    <div className="mx-auto max-w-screen-2xl sm:px-5 lg:px-10 mb-8 lg:mb-16">
      <figure className="relative h-96 w-11/12 mx-auto">
        <img
          className="h-full w-full rounded-xl object-cover object-center"
          src={donation.image}
          alt=""
        />
        <figcaption className="absolute bottom-2 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border  bg-black/30 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h5" color="blue-gray">
              <button
                onClick={handleDonateClick}
                style={{
                  background: donation.color.title_text,
                  color: "white",
                  padding: "8px",
                  borderRadius: "0.375rem",
                }}
              >
                Donate ${donation.price}
              </button>
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="mx-auto max-w-screen-2xl px-5 space-y-5 py-10 sm:px-5 lg:px-14 mb-8 lg:mb-16">
        <h2 className="font-bold text-3xl">{donation.title}</h2>
        <p>{donation.description}</p>
      </div>
    </div>
  );
};

export default DonationCard;
