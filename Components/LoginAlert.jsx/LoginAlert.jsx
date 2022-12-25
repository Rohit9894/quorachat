import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
function LoginAlert() {
  return (
    <div>
      <Box
        w="fit-content"
        margin={"auto"}
        p="30px"
        bg="red.200"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Heading textAlign={"center"}>Please Login</Heading>
        <Link href={"/"}>
          <Text color="blue" textAlign="center">
            Go Back
          </Text>
        </Link>
      </Box>
    </div>
  );
}

export default LoginAlert;
