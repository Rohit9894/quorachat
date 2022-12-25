import Navbar from "../Components/Navbar/Navbar";

import { ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import AuthContextProvider from "../Components/AuthContext/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <AuthContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ChakraProvider>
    </>
  );
}
