import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mantine/core";
import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import { Card, Text, Group, Center, createStyles } from "@mantine/core";
import axios from "axios";
import { useWindowScroll } from "@mantine/hooks";
import { Button } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef("image");

  return {
    card: {
      position: "relative",
      height: "500px",
      width: "70%",
      borderRadius: "10px",
      marginBottom: "25px",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: "scale(1.03)",
      },
    },

    image: {
      ref: image,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      transition: "transform 500ms ease",
    },

    overlay: {
      position: "absolute",
      top: "20%",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
    },

    content: {
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    author: {
      color: theme.colors.dark[2],
    },
  };
});

function Header({ image, title, author, views, comments, link }) {
  const { classes, theme } = useStyles();
  const [data, setdata] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    let res = response.data.products;
    console.log(res);
    setdata(res);
  };
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "30px",
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Container fluid>
        <Grid justify="space-between" align="flex-start">
          <Grid.Col span="auto" className="colone"></Grid.Col>
          <Grid.Col span={7} className="coltwo">
            <div className="coltwo_main"></div>
            <div className="coltwo_sub">
              {data.map((item, index) => {
                return (
                  <Card
                    p="lg"
                    shadow="lg"
                    className={classes.card}
                    key={index}
                    component="a"
                    href={link}
                    target="_blank"
                  >
                    <div
                      className={classes.image}
                      style={{ backgroundImage: `url(${item.images[1]})` }}
                    />

                    <div className={classes.overlay} />

                    <div className={classes.content}>
                      <div>
                        <Text size="lg" className={classes.title} weight={500}>
                          {item.title}
                        </Text>

                        <Group position="apart" spacing="xs">
                          <Text size="sm" className={classes.author}>
                            Rs {item.price}/-
                          </Text>

                          <Group spacing="lg">
                            <Center>
                              <IconEye
                                size={16}
                                stroke={1.5}
                                color={theme.colors.dark[2]}
                              />
                              <Text size="sm" className={classes.bodyText}>
                                {45}
                              </Text>
                            </Center>
                            <Center>
                              <IconMessageCircle
                                size={16}
                                stroke={1.5}
                                color={theme.colors.dark[2]}
                              />
                              <Text size="sm" className={classes.bodyText}>
                                {123}
                              </Text>
                            </Center>
                          </Group>
                        </Group>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Grid.Col>
          <Grid.Col span="auto" className="colthree"></Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
