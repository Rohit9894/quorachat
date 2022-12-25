// import {
//   Box,
//   Text,
//   Card,
//   CardBody,
//   Stack,
//   Divider,
//   CardFooter,
//   Button,
//   Heading,
//   Image,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { BsHeart, BsChat, BsHeartFill } from "react-icons/bs";
// export const Postcard = ({ data }) => {
//   const { title, content, image, name } = data;
//   const [like, setLike] = useState(false);
//   return (
//     <Box
//       w={{ base: "100%", md: "70%", lg: "90%" }}
//       m={"auto"}
//       alignItems={"center"}
//       mx={"20px"}
//       my={"30px"}
//     >
//       <Card maxW="xxxl" m={"auto"}>
//         <CardBody>
//           <Image
//             src={image}
//             alt="Green double couch with wooden legs"
//             borderRadius="lg"
//           />
//           <Stack mt="6" spacing="3">
//             <Heading size="md">{title}</Heading>
//             <Text>{name}</Text>
//           </Stack>
//         </CardBody>
//         <Divider />
//         <CardFooter
//           justify="space-between"
//           flexWrap="wrap"
//           sx={{
//             "& > button": {
//               minW: "136px",
//             },
//           }}
//         >
//           <Button
//             flex="1"
//             variant="ghost"
//             leftIcon={like ? <BsHeartFill /> : <BsHeart />}
//             onClick={() => {
//               setLike(!like);
//             }}
//           >
//             Like
//           </Button>
//           <Button flex="1" variant="ghost" leftIcon={<BsChat />}>
//             Comment
//           </Button>
//         </CardFooter>
//       </Card>
//     </Box>
//   );

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

export function Postcard({ data }) {
  return (
    <div>
      <Card maxW="lg" bg="white">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={data.name} src={data.image} />

              <Box>
                <Heading size="sm">{data.name}</Heading>
                <Text>Creator, Finder</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{data.content}</Text>
        </CardBody>
        <Image objectFit="cover" src={data.image} alt="Chakra UI" />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            {data.like}
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
