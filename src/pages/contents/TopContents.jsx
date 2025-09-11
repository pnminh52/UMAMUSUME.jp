import React from "react";
import Title from "./../../components/news/Title";
import Laptop from "./../../components/contents/topContents/Laptop";
import Mobile from "./../../components/contents/topContents/Mobile";

const TopContents = () => {
  return (
    <div className="bg-gray-100  space-y-8 py-8">
      <Title />
      <Laptop />
      <div className="block sm:hidden">
        <Mobile />
      </div>
    </div>
  );
};

export default TopContents;
