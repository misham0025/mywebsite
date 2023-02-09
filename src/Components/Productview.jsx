import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Loader,Text } from '@mantine/core';





function Productview() {
  
  const [secdata, setsecData] = useState({});
  const params = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let response = await axios.get(
      `https://dummyjson.com/products/${params.id}`
    );
    let res = response.data;
    setsecData(res);
    console.log(res);
  };

  return (
    <div
      style={{
        height:"100vh",
        width: "100%",
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
       
      }}
    ><Text>Coming Soon</Text><Loader color="teal" size="lg" variant="dots" />
    </div>
  );
}

export default Productview;
