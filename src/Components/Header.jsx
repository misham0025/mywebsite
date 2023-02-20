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

const PRIMARY_COL_HEIGHT = 300;
const getChild = (height) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children, spacing) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);
const child = <Skeleton height={140} radius="md" animate={false} />;

function Header() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  return (
    <>
    <Newspaper/>
    <Container>
      <div style={{ width: "100%", marginBottom: "30px", marginTop: "10px" }}>
        <div
          className="headd"
          style={{
            width: "100%",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            color: "#000",
            borderRadius: "5px",
          }}
        >
          <text>PG : 1</text>
        </div>
        <div>
          <SimpleGrid
            cols={1}
            style={{ marginTop: "15px" }}
            spacing="md"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
            <Grid gutter="md">
              <Grid.Col>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
          <SimpleGrid
            style={{ marginTop: "15px" }}
            cols={4}
            breakpoints={[{ maxWidth: "xs", cols: 1 }]}
          >
            {getChild(BASE_HEIGHT)}
            <Stack>
              {getChild(getSubHeight(2, theme.spacing.md))}
              {getChild(getSubHeight(2, theme.spacing.md))}
            </Stack>
            <Stack>
              {getChild(getSubHeight(3, theme.spacing.md))}
              {getChild(getSubHeight(3, theme.spacing.md))}
              {getChild(getSubHeight(3, theme.spacing.md))}
            </Stack>
            {getChild(BASE_HEIGHT)}
          </SimpleGrid>
          <SimpleGrid
            cols={2}
            style={{ marginTop: "15px" }}
            spacing="md"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
            <Grid gutter="md">
              <Grid.Col>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
          <SimpleGrid
            style={{ marginTop: "15px" }}
            cols={4}
            breakpoints={[{ maxWidth: "xs", cols: 1 }]}
          >
            {getChild(BASE_HEIGHT)}
            <Stack>
              {getChild(getSubHeight(2, theme.spacing.md))}
              {getChild(getSubHeight(2, theme.spacing.md))}
            </Stack>
            <Stack>
              {getChild(getSubHeight(3, theme.spacing.md))}
              {getChild(getSubHeight(3, theme.spacing.md))}
              {getChild(getSubHeight(3, theme.spacing.md))}
            </Stack>
            {getChild(BASE_HEIGHT)}
          </SimpleGrid>
        </div>
      </div>

      <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 500 }} mx="auto">
        <Image
          src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Panda"
        />
      </AspectRatio>
    </Container>
    </>
  );
}

export default Header;
