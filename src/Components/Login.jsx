import React from 'react'
import { Loader,Text } from '@mantine/core';

function Login() {
  return (
    <div
    style={{
      height:"100vh",
      width: "100%",
      display: "flex",
      alignItems:"center",
      justifyContent: "center",
     
    }}
  ><Text>Login page will Come Soon</Text><Loader color="teal" size="lg" variant="dots" />
  </div>
  )
}

export default Login