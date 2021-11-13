import React from "react";
import { Link } from "react-router-dom";

function Card(item) {
  return (
    <>
      <div className="card border m-3 rounded-md w-full flex">
        <div className="card-content flex w-full   h-44">
          <img
            className=" w-2/5 rounded-l object-cover"
            src={item.item.image_url}
            alt=""
          ></img>
          <div className="card-info flex flex-col justify-around w-full p-2">
            <Link
              to={`/${item.item.id}`}
              className="font-bold text-lg text-red-700"
            >
              {item.item.name}
            </Link>
            <div className="flex">
              {" "}
              {item.item.categories.map((alias, index) => (
                <p key={index} className="p-0.5">
                  {alias.alias}
                </p>
              ))}
            </div>

            <p className="text-sm">İstanbul</p>
            <div className="ratingReview flex ">
              <span className=" text-sm font-semibold flex border rounded p-0.5 bg-gray-200 m-1 ">
                <img src="/img/rating.svg" alt=""></img> {item.item.rating}
              </span>
              <span className=" text-sm font-semibold flex border rounded p-0.5 bg-gray-200 m-1">
                <img src="/img/comment.svg" alt=""></img>
                {item.item.review_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
