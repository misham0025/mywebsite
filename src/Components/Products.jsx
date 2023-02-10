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
} from "@mantine/core";

import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "400px",
    maxHeight: "600px",
    margin: "10px",
  },

  imageSection: {
    // padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderBottom: `1px solid ${
    //   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
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
    setLoading(true)
    let response = await axios.get("https://exuberant-pinafore-tick.cyclic.app/productDetails");
    let res = response.data
    setProddet(res)
    console.log(res)
    setLoading(false)
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
              <Card key={index} radius="md" className={classes.card}>
                <Card.Section className={classes.imageSection}>
                  <Image
                    src={item.images[0]}
                    width={200}
                    height={200}
                    alt="Tesla Model S"
                  />
                </Card.Section>

                <Group position="apart" mt="md" width={300} height={300}>
                  <div>
                    <Text weight={500}>{item.title}</Text>
                    <Text size="xs" color="dimmed">
                      {item.description}
                    </Text>
                  </div>
                  <Badge variant="outline">
                    {item.discountPercentage}% off
                  </Badge>
                </Group>
                <Card.Section
                  className={classes.section}
                  width={100}
                  height={100}
                >
                  <Group spacing={30}>
                    <div>
                      <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                        ${item.price}
                      </Text>
                      <Text
                        size="sm"
                        color="dimmed"
                        weight={500}
                        sx={{ lineHeight: 1 }}
                        mt={3}
                      >
                        Ratings : {item.rating}
                      </Text>
                    </div>
                  </Group>
                  <Group>
                    <Link to={`/provu/${item.id}`}>
                      <Button radius="xl" style={{ flex: 1 }}>
                        View
                      </Button>
                    </Link>
                  </Group>
                </Card.Section>
              </Card>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Products;
