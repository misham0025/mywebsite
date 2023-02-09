import React from 'react'
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
   height:"100vh",
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));


function Page404() {

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
    <Container >
    <div className={classes.label}>404</div>
    <Title className={classes.title}>You have found a secret place.</Title>
    <Text color="dimmed" size="lg" align="center" className={classes.description}>
      Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
      been moved to another URL.
    </Text>
    <Group position="center">
      <Link to={"/"}><Button variant="filled" color={'teal'} size="md">
        Take me back to home page
      </Button></Link>
     
    </Group>
  </Container>
  </div>
  )
}

export default Page404