import React from "react";
import { useState } from "react";
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
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
 
  IconShoppingBag 
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

  return (
    <Box>
      <Header style={{border:"none",backgroundColor:"transparent"}} height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group>
           <img src="https://images.vexels.com/media/users/3/207136/isolated/preview/dc6980a67acd5e2d4a13bc446e9e3378-green-leaf-big-icon.png" width={50} alt="" />
          </Group>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="#" className={classes.link}>
             Home
            </a>
            <a href="#" className={classes.link}>
             Products
            </a>
            <a href="#" className={classes.link}>
             About
            </a>
            <a href="#" className={classes.link}>
             Contact
            </a>
            <a href="#" className={classes.link}>
             <IconShoppingBag /> Cart
            </a>
        
            {login ? (
              <Button color="teal">LOGIN</Button>
            ) : (
              <div style={{display:"flex", alignItems:"center"}}>
                <Text style={{paddingRight:"20px",color:"black"}}>Hi' Misham</Text>
                <Button color="red">LOGOUT</Button>
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
        size="100%"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" pb="xl" px="md">
            {login ? (
              <Button variant="default">Log in</Button>
            ) : (
              <Button>Sign up</Button>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Navbar;
