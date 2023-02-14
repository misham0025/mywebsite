import React from "react";
import { Formik } from "formik";
import { Button, TextInput, Group, Anchor, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  return (
    <div className="loginmainpage">
      <div className="loginpage">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "50px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/7838/7838457.png"
            width={30}
            alt=""
          />
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            localStorage.setItem("token", values.password)
            if(localStorage.getItem("token")){
           navigate("/")}
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div style={{ paddingBottom: "20px" }}>
                <Group position="apart" mb={5}>
                  <Text component="label" size="sm" weight={500}>
                    Email
                  </Text>
                </Group>
                <TextInput
                  type="email"
                  name="email"
                  weight={500}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <br />
                {errors.email && touched.email && errors.email}
              </div>
              <Group position="apart" mb={5}>
                <Text
                  component="label"
                  htmlFor="your-password"
                  size="sm"
                  weight={500}
                >
                  Password
                </Text>

                <Anchor
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  sx={(theme) => ({
                    paddingTop: 2,
                    color:
                      theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 4 : 6
                      ],
                    fontWeight: 500,
                    fontSize: theme.fontSizes.xs,
                  })}
                >
                  Forgot your password?
                </Anchor>
              </Group>
              <div style={{ paddingBottom: "30px" }}>
                <TextInput
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <br />
                {errors.password && touched.password && errors.password}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button color="teal" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
