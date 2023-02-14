import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 700,
    marginRight: theme.spacing.xl * 3,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Verdana, ${theme.fontFamily}`,
    fontSize: 42,
    lineHeight: 1.5,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

function Header() {
  const { classes } = useStyles();
  return (
    <div style={{height:"100vh"}}>
      <Container  size="xl" px="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A Modern React Web Application
            </Title>
            <Text color="dimmed" mt="md" style={{ textAlign: "justify" }}>
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon color="teal" size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button color="teal" size="md">
                Explore
              </Button>
            </Group>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="https://www.kindpng.com/picc/m/271-2713117_team-work-hd-png-download.png"
              width={600}
              className={classes.image}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
