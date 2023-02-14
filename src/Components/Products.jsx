import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  Loader,
  Container,
} from "@mantine/core";

import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: "#90EE90",
    width: "500px",
    Height: "900px",
    margin: "10px",
  },

  imageSection: {},

  label: {},

  section: {
    display: "flex",
    justifyContent: "space-between",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

function Products() {
  const { classes } = useStyles();
  const [proddet, setProddet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    let response = await axios.get(
      "https://exuberant-pinafore-tick.cyclic.app/productDetails"
    );
    let res = response.data;
    setProddet(res);
    console.log(res);
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "max-content",
        flexWrap: "wrap",
      }}
    >
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader color="teal" size="lg" variant="dots" />
        </div>
      ) : (
        <>
          {proddet.map((item, index) => {
            return (
              <div className="cardhead">
                <div className="cardimg">
                  <img
                    style={{ width: "100%" }}
                    src={"item.images[0]"}
                    // src={"https://img.icons8.com/emoji/600/000000/mobile-phone.png"}
                    alt="image"
                    width="250px"
                    height={"250px"}
                  />
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>
                  
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Products;
