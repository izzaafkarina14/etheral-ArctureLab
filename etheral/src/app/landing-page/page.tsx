import { LandingPage } from "@/features/landingPage"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Etheral | Landing Page",
    description: "Discover the Future of Decentralized Art & Finance",
  };

const Landing = () => {
    return (
        <LandingPage />
    )
}

export default Landing;