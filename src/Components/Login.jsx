import React from "react";
import { Formik } from "formik";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginpage">
      <Container size={450}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="lg">
            <Link to={"/forgetp"} style={{textDecoration:"none"}}>Forgot password?</Link>
          </Group>
          <Button fullWidth color="teal" mt="xl">
            Login
          </Button>
          <Text align="center" mt="md">
            Don't have an account?{" "}
            <Anchor
              href="#"
              weight={700}
              onClick={(event) => event.preventDefault()}
            >
              Register
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
