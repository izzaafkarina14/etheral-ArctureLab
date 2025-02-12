import { MarketCatalog } from "@/features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethereal | Catalog",
  description: "Unlock the beauty inside.",
};

const Catalog = () => {
  return <MarketCatalog />;
};

export default Catalog;
