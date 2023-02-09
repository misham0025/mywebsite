import React,{useEffect, useState} from 'react'
import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Grid, SimpleGrid, useMantineTheme  } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];
const PRIMARY_COL_HEIGHT = 400;

function Productview() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));
const[secdata,setsecData]=useState({})
const params=useParams()

useEffect(() => {
  loadData();
}, []);

const loadData = async () => {
  let response = await axios.get(
    `https://dummyjson.com/products/${params.id}`
  );
  let res = response.data;
  setsecData(res);
  console.log(res);
};



  return (
    <div  style={{width:"100%",display:"flex",justifyContent:"center",paddingTop:80}}>
    <Card key={secdata.id} withBorder radius="md" className={classes.card}>
    <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Image src='' height={PRIMARY_COL_HEIGHT} radius="md"  />
        <Grid gutter="md">
          <Grid.Col>
            <Image src='' height={SECONDARY_COL_HEIGHT} radius="md"  />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image src='' height={SECONDARY_COL_HEIGHT} radius="md"  />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image src='' height={SECONDARY_COL_HEIGHT} radius="md"  />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    <Group position="apart" mt="md">
      <div>
        <Text weight={500}>{secdata.title}</Text>
        <Text size="xs" color="dimmed">
          {secdata.description}
        </Text>
      </div>
      <Badge variant="outline">{secdata.discountPercentage}% off</Badge>
    </Group>

    <Card.Section className={classes.section} mt="md">
      <Text size="sm" color="dimmed" className={classes.label}>
        Basic configuration
      </Text>

      <Group spacing={8} mb={-8}>
        {features}
      </Group>
    </Card.Section>

    <Card.Section className={classes.section}>
      <Group spacing={30}>
        <div>
          <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
            ${secdata.price}
          </Text>
          <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
            per day
          </Text>
        </div>
<Link to={"/prod"}>
<Button radius="sm" >
          Buy now
        </Button>
</Link>
        
      </Group>
    </Card.Section>
  </Card>   
  </div>
  )
}

export default Productview