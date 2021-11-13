import React from "react";
import ContentHeader from "./pages-components/content-components/ContentHeader";
import ContentMain from "./pages-components/content-components/ContentMain";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ContentPage() {
  const { endpointID } = useParams();

  const yelpToken =
    "O--dRrHh43DlIBC6Kd41qnVCOC4_pERiSjEjHCWub0TJiamgv9VWMluVyq8ZywUh5jW5gqIjIg2STariXPowlaF8o2TLuo6Jqzx69_UWTHQAFY9PDv5OxItAk4FlYXYx";
  //const apiHack = "https://cors-anywhere.herokuapp.com/";
  const apiHack = "https://thingproxy.freeboard.io/fetch/";

  const [details, setDetails] = useState(null);
  const [reviews, setReviews] = useState(null);

  //console.log(reviews && reviews);

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getDetails = async () => {
    const response = await axios.get(
      `${apiHack}https://api.yelp.com/v3/businesses/${endpointID}`,
      {
        headers: {
          Authorization: `Bearer ${yelpToken}`,
          "Content-Type": "application/json",
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
        },
        params: {},
      }
    );
    const reviews = await axios.get(
      `${apiHack}https://api.yelp.com/v3/businesses/${endpointID}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${yelpToken}`,
          "Content-Type": "application/json",
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
        },
        params: {},
      }
    );
    setReviews(reviews.data.reviews);
    setDetails(response.data);
  };
  return (
    <>
      <ContentHeader details={details} />
      <ContentMain details={details} reviews={reviews} />
    </>
  );
}

export default ContentPage;
