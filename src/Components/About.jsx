import { Container, createStyles, Text } from "@mantine/core";
import Body from "./Body";
import Carousel from "./Carousel";
import Footer from "./Footer";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.gray[9]} 0%, ${theme.colors.gray[9]} 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.xs,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  title: {
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.white,
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

function About() {
  const { classes } = useStyles();
  const data = [
    {
      title: "Page views",
      stats: "456,133",
      description:
        "24% more than in the same month last year, 33% more that two years ago",
    },
    {
      title: "New users",
      stats: "2,175",
      description:
        "13% less compared to last month, new user engagement up by 6%",
    },
    {
      title: "Completed orders",
      stats: "1,994",
      description:
        "1994 orders were completed this month, 97% satisfaction rate",
    },
  ];
  return (
    <Container
    // style={{
    //   height: "100vh",
    //   width: "100%",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    // }}
    >
      <div className={classes.root}>
        {data.map((stat, index) => (
          <div key={index} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
          </div>
        ))}
      </div>
      <Carousel />
      <Body/>
    </Container>
  );
}

export default About;
