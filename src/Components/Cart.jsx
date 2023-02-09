import React from 'react'
import { Loader,Text } from '@mantine/core';

function Cart() {
  return (
    <div
    style={{
      height:"100vh",
      width: "100%",
      display: "flex",
      alignItems:"center",
      justifyContent: "center",
     
    }}
  ><Text>Coming Soon</Text><Loader color="teal" size="lg" variant="dots" />
  </div>
  )
}

export default Cart