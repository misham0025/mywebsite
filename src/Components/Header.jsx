import React from 'react'
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
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 5,
  },

  content: {
    maxWidth: 700,
    marginRight: theme.spacing.xl * 5,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 50,
    lineHeight: 1.3,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

 
}));

function Header() {
  const { classes } = useStyles();
  return (
    <div>
      <Container  size="xl" px="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A Modern React Components <br /> With Functionalities
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon color='teal' size={20} radius="xl">
                  <IconCheck  size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all components and hooks
                export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                keyboard
              </List.Item>
            </List>

            <Group mt={30}>
            <Button color="teal">
               Explore
              </Button>
            </Group>
          </div>
          <Image src='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png' width={500}  className={classes.image} />
        </div>
      </Container>
    </div>
  )
}

export default Header