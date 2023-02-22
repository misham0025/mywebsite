import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

function Footer() {
  const { classes } = useStyles();

  const data = [
    {
      title: "About",
      links: [
        {
          label: "Features",
          link: "#",
        },
        {
          label: "Pricing",
          link: "#",
        },
        {
          label: "Support",
          link: "#",
        },
        {
          label: "Forums",
          link: "#",
        },
      ],
    },
    {
      title: "Project",
      links: [
        {
          label: "Contribute",
          link: "#",
        },
        {
          label: "Media assets",
          link: "#",
        },
        {
          label: "Changelog",
          link: "#",
        },
        {
          label: "Releases",
          link: "#",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "+91 9952783460",
          link: "#",
        },
        {
          label: "mishamshibin2512@gmail.com",
          link: "#",
        },
        {
          label: "Email newsletter",
          link: "#",
        },
        {
          label: "GitHub discussions",
          link: "#",
        },
      ],
    },
  ];
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
         <h1>MorNinG ExpResS</h1>
        </div>
        <div className={classes.groups}>
          {data.map((group) => {
            const links = group.links.map((link, index) => (
              <Text
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
              >
                {link.label}
              </Text>
            ));

            return (
              <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
              </div>
            );
          })}
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          All rights reserved MorninG ExpresS © 2023
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;
