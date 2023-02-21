import axios from "axios";
import React, { useEffect, useState } from "react";

function Newspaper() {
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var today = new Date();
  var date =
    day[today.getDay()] +
    "," +
    " " +
    months[today.getMonth()] + " "+
    today.getDate() +
    " " +
    today.getFullYear();

  // useEffect(() => {
  //   loadData();
  // }, []);

  // var config = {
  //   method: 'get',
  //   url: 'https://api.countrystatecity.in/v1/states',
  //   headers: {
  //     'X-CSCAPI-KEY': 'API_KEY'
  //   }
  // };

  // const[data1,setdata1]=useState([])

  // let loadData = async () => {
  //   try {
  //     let response = await axios.get("http://localhost:6826/allstates");
  //     console.log(response.data[0].states);
  //     setdata1(response.data[0].states);

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <text style={{ padding: "10px" }}>Coimbatore</text>
      <text style={{ padding: "10px",color:"grey",fontSize:"12px" }}>{date}</text>
    </div>
  );
}

export default Newspaper;
