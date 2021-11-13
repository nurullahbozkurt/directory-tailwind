import React from "react";
import Comments from "../content-components/Comments";

function ContentMain({ details, reviews }) {
  console.log("det", details && details);
  //details && details.location.display_address.map((item) => console.log(item));
  return (
    <>
      <div className="main w-full">
        <div className=" flex m-0 items-center justify-center mb-5">
          <a
            href="/"
            className="text-red-800 font-logo text-8xl font-extrabold border-none rounded-full p-4  "
          >
            directory
          </a>
        </div>
        <div className="main-content max-w-5xl m-auto  ">
          <div className="main-card w-full flex ">
            {/* <div className="img w-1/2 ">
              <img
                className="object-cover rounded"
                src={details && details.image_url}
                alt=""
              ></img>
            </div> */}
            <div className="main-card-content w-full flex flex-col justify-around p-5 pt-0">
              <div className="flex justify-between  rounded-lg bg-red-800 ">
                <div className="flex">
                  <h2 className="font-bold text-white pl-2  text-xl">
                    {details && details.name}
                  </h2>
                  <p className="font-semibold text-white  text-md flex items-center ml-5">
                    {" "}
                    {details && details.location.city}
                  </p>
                </div>
                <span className="p-0.5 w-20 flex justify-center text-white rounded bg-green-700 text-sm ">
                  <span>Rating {details && details.rating}</span>{" "}
                </span>
              </div>

              {details?.hours && (
                <div className="overflow-scroll ">
                  <table className="hours w-full overflow-scroll mb-5">
                    <tbody className="border rounded-lg m-auto ">
                      <tr className="border ">
                        <th className="border">Monday</th>
                        <th className="border">Tuesday</th>
                        <th className="border">Wednesday</th>
                        <th className="border">Thursday</th>
                        <th className="border">Friday</th>
                        <th className="border">Saturday</th>
                        <th className="border">Sunday</th>
                      </tr>
                      {details.hours.map((item, index) => (
                        <tr key={index} className="border ">
                          <td className="border ">
                            {item.open[0].start.slice(0, 2)}:
                            {item.open[0].start.slice(2, 4)}-
                            {item.open[0].end.slice(0, 2)}:
                            {item.open[0].end.slice(2, 4)}
                          </td>
                          <td className="border   ">
                            {item.open[1].start.slice(0, 2)}:
                            {item.open[1].start.slice(2, 4)}-
                            {item.open[1].end.slice(0, 2)}:
                            {item.open[1].end.slice(2, 4)}
                          </td>
                          <td className="border  ">
                            {item.open[2].start.slice(0, 2)}:
                            {item.open[2].start.slice(2, 4)}-
                            {item.open[2].end.slice(0, 2)}:
                            {item.open[2].end.slice(2, 4)}
                          </td>
                          <td className="border  ">
                            {item.open[3].start.slice(0, 2)}:
                            {item.open[3].start.slice(2, 4)}-
                            {item.open[3].end.slice(0, 2)}:
                            {item.open[3].end.slice(2, 4)}
                          </td>
                          <td className="border  ">
                            {item.open[4].start.slice(0, 2)}:
                            {item.open[4].start.slice(2, 4)}-
                            {item.open[4].end.slice(0, 2)}:
                            {item.open[4].end.slice(2, 4)}
                          </td>
                          <td className="border  ">
                            {item.open[5].start.slice(0, 2)}:
                            {item.open[5].start.slice(2, 4)}-
                            {item.open[5].end.slice(0, 2)}:
                            {item.open[5].end.slice(2, 4)}
                          </td>
                          <td className="border  ">
                            {item.open[6].start.slice(0, 2)}:
                            {item.open[6].start.slice(2, 4)}-
                            {item.open[6].end.slice(0, 2)}:
                            {item.open[6].end.slice(2, 4)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="border">
                <p className="font-bold">Address</p>
                <div className="flex border ">
                  {details &&
                    details.location.display_address.map((item) => (
                      <p>{item}</p>
                    ))}
                </div>
                <p className="font-bold">Phone</p>
                <p className="border">{details && details.phone}</p>
              </div>

              <div className="reviews py-5">
                <Comments reviews={reviews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentMain;
