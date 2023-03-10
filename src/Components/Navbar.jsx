import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSearch,
  IconShoppingBag,
  IconUserCircle,
  IconBell,
} from "@tabler/icons-react";

function Navbar() {
  const useStyles = createStyles((theme) => ({
    link: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: "none",
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontWeight: 400,
      fontSize: theme.fontSizes.md,

      [theme.fn.smallerThan("sm")]: {
        height: 42,
        display: "flex",
        alignItems: "center",
        width: "100%",
      },

      ...theme.fn.hover({
        color: "#fff",
        background:
          theme.colorScheme === "light"
            ? theme.colors.gray[9]
            : theme.colors.gray[0],
      }),
    },
    textinput: {
      // '@media (max-width: 1440px)': {
      //   width:"700px"
      //  },
      "@media (min-width: 1300px) and (max-width: 2560px)": {
        width: "450px",
      },
      "@media (min-width: 770px) and (max-width: 1024px)": {
        width: "220px",
      },
      "@media (min-width: 751px) and (max-width: 769px)": {
        width: 100,
      },
      "@media (min-width: 300px) and (max-width: 750px)": {
        width: "150px",
      },
    },
    subLink: {
      width: "100%",
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      borderRadius: theme.radius.md,

      ...theme.fn.hover({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
      }),

      "&:active": theme.activeStyles,
    },

    dropdownFooter: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      margin: -theme.spacing.md,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1]
      }`,
    },

    hiddenMobile: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    hiddenDesktop: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
  }));

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { classes, theme } = useStyles();
  const [login, setLogin] = useState(true);
  const [stringValue, setStringValue] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const remove = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const add = () => {
    localStorage.setItem("token", Date.now());
    navigate("/prod");
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let response = await axios.get(
      `https://dummyjson.com/products/search?q=${stringValue}`
    );
    let res = response.data;
    setData(res.products);
    console.log(res.products);
  };
  return (
    <Box>
      <Header className="navbarheader" height={50} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group>
            <Link to={"/"}>
             <Text className="font">LIFESTYLE</Text>
            </Link>
          </Group>

          {/* <Group>
            <TextInput
              icon={<IconSearch size={18} stroke={1.5} />}
              radius="md"
              placeholder="Search"
              size="sm"
              className={classes.textinput}
              onChange={(event) => setStringValue(event.currentTarget.value)}
            ></TextInput>
          </Group> */}
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/" className={classes.link}>
             Today's
            </Link>
            <Link to="/postad" className={classes.link}>
              Explore
            </Link>   
            <Link to="/postad" className={classes.link}>
              Post Your Ad
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>

            {!localStorage.getItem("token") ? (
              <Link to={"/log"}>
                <Button radius="xs" color="dark.9">
                  LOGIN
                </Button>
              </Link>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link style={{ textDecoration: "none" }} to={"/log"}>
                  <Text
                    style={{
                      paddingRight: "20px",
                      color: "black",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <IconUserCircle stroke={1} />
                    &nbsp; Hi' Misham
                  </Text>
                </Link>
                <Button radius="xs" variant="outline" color="dark.9">
                  LOGOUT
                </Button>
              </div>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        onClick={toggleDrawer}
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
        size="100%"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Link to="/" className={classes.link}>
            News
          </Link>
          <Link to="/postad" className={classes.link}>
            Explore
          </Link>
          <Link to="/postad" className={classes.link}>
            Post Your Ad
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/contact" className={classes.link}>
            <button type="button" class="icon-button">
              <span class="material-icons">notifications</span>
              {/* <span class="icon-button__badge">5</span> */}
            </button>
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" pb="xl" px="md">
            {!localStorage.getItem("token") ? (
              <Link to={"/log"}>
                <Button radius="xs" color="dark.9">
                  LOGIN
                </Button>
              </Link>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text
                  style={{
                    paddingRight: "20px",
                    color: "black",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <IconUserCircle />
                  &nbsp; Hi' Misham
                </Text>
                <Button variant="outline" radius="xs" color="dark.9">
                  LOGOUT
                </Button>
              </div>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Navbar;
