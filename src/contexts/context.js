import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

export const DirectoryContext = React.createContext();

function ContextProvider(props) {
  const [state, setState] = useState([]);
  const [value, setValue] = useState([]);
  const [term, setTerm] = useState([]);
  const yelpToken =
    "O--dRrHh43DlIBC6Kd41qnVCOC4_pERiSjEjHCWub0TJiamgv9VWMluVyq8ZywUh5jW5gqIjIg2STariXPowlaF8o2TLuo6Jqzx69_UWTHQAFY9PDv5OxItAk4FlYXYx";
  //const apiHack = "https://cors-anywhere.herokuapp.com/";
  const apiHack = "https://thingproxy.freeboard.io/fetch/";

  useEffect(() => {
    getYelpApi();
  }, []);
  useEffect(() => {
    getSearch();
  }, [value]);
  const test = useMemo(() => {
    return term ? term : state;
  }, [state, term]);

  const getYelpApi = async () => {
    const response = await axios.get(
      `${apiHack}https://api.yelp.com/v3/businesses/search?location=istanbul&limit=50`,
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

    setState(response.data.businesses);
  };

  const search = (e) => {
    e.preventDefault();
    //setValue(e.target.value);
    setValue(e.target.previousElementSibling.value);
  };
  const getSearch = async () => {
    const response = await axios.get(
      `${apiHack}https://api.yelp.com/v3/businesses/search?limit=50&location=istanbul&term=${value}`,
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
    setTerm(response.data.businesses);
  };
  // console.log("term", term);
  // console.log("state", state);
  console.log("valu", value);

  return (
    <DirectoryContext.Provider value={{ state, search, value, term, test }}>
      {props.children}
    </DirectoryContext.Provider>
  );
}

export default ContextProvider;
