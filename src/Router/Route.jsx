import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationCard from "../Components/DonationCard/DonationCard";

const myCreatedBrowserRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("../../public/donation.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../../public/donation.json"),
      },
      {
        path: "/:id",
        element: <DonationCard></DonationCard>,
        loader: () => fetch("../../public/donation.json"),
      },
    ],
  },
]);

export default myCreatedBrowserRoute;
