import { LandingPage } from "@/features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethereal | Landing Page",
  description: "Discover the Future of Decentralized Art & Finance",
};

const Landing = () => {
  return <LandingPage />;
};

export default Landing;
