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
  Divider,
} from "@mantine/core";

import axios from "axios";
import { Bold } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
    width: "500px",
    height: "400px",
    margin: "10px",
    padding:"0px !important",
   
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    height: 100,
    
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
    <Container fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "max-content",
        flexWrap: "wrap",
      }}
    >
       <Divider/>
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
          <Loader color="dark" size="lg" variant="dots" />
        </div>
      ) : (
        
        <>
       
          {proddet.map((item, index) => {
            return (
              <Card key={index} className={classes.card}>
                <AspectRatio ratio={1920 / 1080}>
                  <Image src={item.images[1]} />
                </AspectRatio>
                <div style={{padding:'10px'}}>
                <Text size="xl" weight={500} mt="xs">
                  ₹ {item.price}/-
                </Text>
                <Text color="dimmed" className={classes.title} mt={5}>
                  {item.description}
                </Text>
                </div>
              </Card>
            );
          })}
        </>
      )}
    </Container>
  );
}

export default Products;
