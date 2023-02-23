import { Container } from "@mantine/core";
import React from "react";
import {
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  Stack,
  AspectRatio,
  Image,
} from "@mantine/core";
import Newspaper from "./Newspaper";



function Header() {
  
  return (
    <>
      <Newspaper />
      <Container fluid>
        <div className="newsHeader">
          <Skeleton height="300vh" mb={10} radius="md" animate={true} />
          <Skeleton height="200vh" mb={10} radius="md" animate={false} />
          <Skeleton height="200vh" mb={10} radius="md" animate={true} />
          <Skeleton height="200vh" mb={10} radius="md" animate={false} />
          <Skeleton height="200vh" mb={10} radius="md" animate={true} />
          <Skeleton height="200vh" mb={10} radius="md" animate={false} />
          <Skeleton height="200vh" mb={10} radius="md" animate={true} />
          <Skeleton height="200vh" mb={10} radius="md" animate={false} />
          <Skeleton height="200vh" mb={10} radius="md" animate={true} />
          <Skeleton height="200vh" mb={10} radius="md" animate={false} />
        </div>
      </Container>
    </>
  );
}

export default Header;
