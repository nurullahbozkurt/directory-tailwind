import { useContext } from "react";
import { DirectoryContext } from "../../contexts/context";
import React from "react";
import Card from "./Card";

function HomeMain() {
  const { state, test, value } = useContext(DirectoryContext);

  return (
    <div className="main">
      <div className="flex items-center justify-center">
        <h3 className="text-red-700 font-bold text-2xl my-5">
          Businesses in Istanbul
        </h3>
      </div>
      <p className="text-red-700 font-bold text-xl px-4 max-w-5xl m-auto">
        {value}
      </p>
      <div className="main-content max-w-5xl w-full m-auto grid md:grid-cols-2 grid-cols-1 ">
        {test && test.map((item, index) => <Card item={item} key={index} />)}
      </div>
    </div>
  );
}

export default HomeMain;
