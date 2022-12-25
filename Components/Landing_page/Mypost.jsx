import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
function Mypost({ data }) {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={data.image}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody bg="white">
            <Heading size="md">{data.title}</Heading>

            <Text py="2">{data.content}</Text>
          </CardBody>

          <CardFooter>
            {/* <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button> */}
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default Mypost;
