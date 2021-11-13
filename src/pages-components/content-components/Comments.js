import React from "react";

function Comments(reviews) {
  //console.log(reviews && reviews.reviews);

  return (
    <>
      {reviews.reviews &&
        reviews.reviews.map((item, index) => (
          <div key={index} className="review flex border rounded my-5  ">
            <div className="w-24 h-24  object-cover">
              <img
                className="w-full h-full object-cover"
                src={item.user.image_url}
                alt=""
              ></img>
            </div>

            <div className="w-5/6">
              <a
                href={item.user.profile_url}
                className="text-sm font-semibold pl-3"
              >
                {item.user.name}
              </a>
              <p className="text-sm p-3">{item.text}</p>
              <p className="text-xs pl-3 mb-0">{item.time_created}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Comments;
