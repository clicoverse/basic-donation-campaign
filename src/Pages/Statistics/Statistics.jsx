import { useEffect, useState } from "react";
import { getDataFromLs } from "../../Utils/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Chart from "react-google-charts";

const Statistics = () => {
  const donationCards = useLoaderData();
  const [donations, setDonations] = useState(0);
  const [appliedDonations, setAppliedDonations] = useState(0);
  // console.log(donationCards);

  useEffect(() => {
    const total = donationCards?.reduce(
      (acc, donationCard) => acc + donationCard.price,
      0
    );
    setDonations(total);
  }, [donationCards]);

  useEffect(() => {
    const storedDonationIds = getDataFromLs();
    if (donationCards.length > 0) {
      let totalDonation = 0;
      for (const id of storedDonationIds) {
        const donation = donationCards?.find((donation) => donation.id === id);
        if (donation) {
          totalDonation += donation.price;
        }
      }
      setAppliedDonations(totalDonation);
    }
  }, [donationCards]);

  const remainingValue = donations - appliedDonations;

  const data = [
    ["Task", "Value"],
    ["Total Donations", remainingValue],
    ["Your Donations", appliedDonations],
  ];
  const options = {
    colors: ["#FF444A", "#00C49F"],
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width={"100%"}
        height={"700px"}
        data={data}
        options={options}
      ></Chart>
    </div>
  );
};

export default Statistics;
