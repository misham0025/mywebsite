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
  SimpleGrid,
  AspectRatio,
} from "@mantine/core";

import axios from "axios";


const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
    width:"500px",
    height:"400px",
    margin:"10px"
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
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

              <Card
                key={index}
                p="md"
                radius="md"
                component="a"
                href="#"
                className={classes.card}
              >
                <AspectRatio ratio={1920 / 1080}>
                  <Image src={item.images[0]} />
                </AspectRatio>
                <Text
                  color="dimmed"
                  size="xs"
                  transform="uppercase"
                  weight={700}
                  mt="md"
                >
                  {item.price}
                </Text>
                <Text className={classes.title} mt={5}>
                  {item.description}
                </Text>
              </Card>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Products;
