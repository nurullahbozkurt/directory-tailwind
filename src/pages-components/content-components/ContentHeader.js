import React from "react";

function ContentHeader(details) {
  //console.log(details.details && details.details.photos);
  return (
    <>
      <div className="header ">
        <div className="flex w-full ">
          <div className="flex w-full overflow-scroll">
            <img
              className="w-1/3 h-52 object-cover"
              src={details.details && details.details.photos[0]}
              alt=""
            ></img>
            <img
              className="w-1/3 h-52 object-cover"
              src={details.details && details.details.photos[1]}
              alt=""
            ></img>
            <img
              className="w-1/3 h-52 object-cover"
              src={details.details && details.details.photos[2]}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentHeader;
