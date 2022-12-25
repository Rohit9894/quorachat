import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Postcard } from "./Postcard";
import { BsQuestionCircle } from "react-icons/bs";

import { RiQuestionAnswerLine } from "react-icons/ri";
import { ImPencil } from "react-icons/im";
export const getHomeData = () => {
  return fetch("http://localhost:3000/api/posts/allpost").then((res) =>
    res.json()
  );
};
export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHomeData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <Box
      pt="10px"
      bg="#efeae2"
      w={{ base: "100%", md: "100%", xl: "100%" }}
      m={{ base: "auto", md: "auto" }}
    >
      <Flex gap="20px">
        <Box w="20%" h="60vh" position={"fixed"} left="100px">
          <Flex justifyContent="flex-end">
            <Stack>
              <Text>Web Develpment</Text>
              <Text>Studying</Text>
              <Text>Science</Text>
              <Text>Technology</Text>
              <Text>Education</Text>
            </Stack>
          </Flex>
          {/* 
          <UnorderedList mt="40px">
            <ListItem>About</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem>Policy</ListItem>
          </UnorderedList> */}
        </Box>
        <Box ml="500px">
          <Box bg="white" mb="10px" py="10px">
            <Flex gap="40px" px="20px">
              <Flex
                justify={"center"}
                align="center"
                dir="row"
                w="50px"
                h="40px"
                bg="blue"
                borderRadius={"50%"}
              >
                <Text fontSize={"20px"} color="white">
                  R
                </Text>
              </Flex>
              <Input
                bg="#efeae2"
                placeholder="what do you want to ask or share"
                _placeholder={{
                  paddingLeft: "20px",
                }}
                border={"1px solid gray"}
                rounded="20px"
                variant={"unstyled"}
              />
            </Flex>
            <Flex justifyContent={"space-around"} mt="10px">
              <Flex align={"center"} gap="5px">
                <BsQuestionCircle />
                Ask
              </Flex>
              <Flex align={"center"} gap="5px">
                <RiQuestionAnswerLine />
                Answer
              </Flex>
              <Flex align={"center"} gap="5px">
                <ImPencil />
                Post
              </Flex>
            </Flex>
          </Box>
          <Grid gap="10px">
            {data?.map((e, i) => {
              return (
                <GridItem>
                  <Postcard key={i + 1} data={e} />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}
