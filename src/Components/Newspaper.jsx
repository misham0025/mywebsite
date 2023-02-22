import React, { useState } from "react";
import { Select } from "@mantine/core";

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
    months[today.getMonth()] +
    " " +
    today.getDate() +
    " " +
    today.getFullYear();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ padding: "10px" }}>
        <Select
          placeholder="Select Location"
          searchable
          maxDropdownHeight={200}
          size="xs"
          onChange={(e) => {
            console.log(e);
          }}
          nothingFound="Not Found"
          data={["Ariyalur", "Chengalpet", "Chennai", "Coimbatore"]}
        />
      </div>
      <text style={{ padding: "10px", color: "grey", fontSize: "12px" }}>
        {date}
      </text>
    </div>
  );
}

export default Newspaper;
