import React from "react";
import {  useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
import { IconSearch, IconShoppingBag } from "@tabler/icons-react";

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
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,

      [theme.fn.smallerThan("sm")]: {
        height: 42,
        display: "flex",
        alignItems: "center",
        width: "100%",
      },

      ...theme.fn.hover({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      }),
    },
    textinput: {
      // '@media (max-width: 1440px)': {
      //   width:"700px"
      //  },
      "@media (min-width: 1024px) and (max-width: 2560px)": {
        width: "650px",
      },
      "@media (min-width: 768px) and (max-width: 1024px)": {
        width: "400px",
      },
      "@media (min-width: 300px) and (max-width: 768px)": {
        width: "180px",
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
  const [stringValue, setStringValue] = useState('');
  const [data, setData] = useState([]);

  
  useEffect(() => {
    loadData();
  }, [stringValue]);

  const loadData = async () => {
    let response = await axios.get(
      `https://dummyjson.com/products/search?q=${stringValue}`
    );
    let res = response.data;
    setData(res.products)
    console.log(res.products);
  };
  return (
    <Box>
      <Header
        style={{ border: "none", backgroundColor: "transparent" }}
        height={60}
        px="md"
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <Group>
            <img
              src="https://images.vexels.com/media/users/3/207136/isolated/preview/dc6980a67acd5e2d4a13bc446e9e3378-green-leaf-big-icon.png"
              width={30}
              alt=""
            />
          </Group>

          <Group>
            <TextInput
              icon={<IconSearch size={18} stroke={1.5} />}
              radius="md"
              placeholder="Search"
              size="md"
              className={classes.textinput}
              onChange={(event) => setStringValue(event.currentTarget.value)}
            >
             
            </TextInput>
          </Group>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/head" className={classes.link}>
              Home
            </Link>
            <Link to="/prod" className={classes.link}>
              Products
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link} >
              Contact
            </Link>
            <Link to="/cart" className={classes.link}>
              <IconShoppingBag /> Cart
            </Link>

            {login ? (
              <Button color="teal">LOGIN</Button>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text style={{ paddingRight: "20px", color: "black" }}>
                  Hi' Misham
                </Text>
                <Button variant="outline" color="red">
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
          <Link to="/head" className={classes.link}>
            Home
          </Link>
          <Link to="/prod" className={classes.link}>
            Products
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/cart" className={classes.link}>
              <IconShoppingBag /> Cart
            </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" pb="xl" px="md">
            {login ? (
              <Button color="teal">LOGIN</Button>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text style={{ paddingRight: "20px", color: "black" }}>
                  Hi' Misham
                </Text>
                <Button variant="outline" color="red">
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
