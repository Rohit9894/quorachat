// import {
//   Box,
//   Flex,
//   Heading,
//   Img,
//   SimpleGrid,
//   Stack,
//   Text,
// } from "@chakra-ui/react";

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Components/AuthContext/AuthContext";

// import LoginAlert from "../../Components/LoginAlert.jsx/LoginAlert";
// function Mypost() {
//   const { isAuth } = useContext(AuthContext);
//   const [data, setData] = useState("");
//   const [post, setPost] = useState([]);

//   console.log(isAuth, data);

//   function getData() {
//     return fetch("http://localhost:3000/api/posts", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setPost(res);
//       });
//   }
//   useEffect(() => {
//     getData();
//   }, []);
//   //   useEffect(() => {
//   //     const data = JSON.parse(localStorage.getItem("details")) || "";
//   //     setData(data);
//   //   }, []);
//   //   if (!isAuth && !data) {
//   //     return <LoginAlert />;
//   //   }
//   console.log(post);
//   return (
//     <div>
//       <Box>
//         <Box>
//   <Flex gap="20px" align={"center"} ml="20px">
//     <Img
//       src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
//       alt="avatar"
//       borderRadius="50%"
//       h="80px"
//       display="block"
//     />
//     <Box textAlign={"center"}>
//       <Heading fontSize={"24px"}>Rohit Gupta</Heading>
//       <Text>Princerohit9893@gmail.com</Text>
//     </Box>
//   </Flex>
//           <Box textAlign={"center"} py="10px" borderBottom="1px solid gray">
//             <Heading>My Posts</Heading>
//           </Box>
//           <SimpleGrid>
//             {post?.map((item) => (
//               <Mypost data={item} />
//             ))}
//           </SimpleGrid>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// export default Mypost;
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import Mypost from "../../Components/Landing_page/Mypost";
import { Postcard } from "../../Components/Landing_page/Postcard";
import LoginAlert from "../../Components/LoginAlert.jsx/LoginAlert";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({ name: "", email: "" });
  const { isAuth } = useContext(AuthContext);
  function getData() {
    return fetch("http://localhost:3000/api/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("details")) || "";
    setDetails(data);
  }, [isAuth]);

  useEffect(() => {
    getData();
  }, []);
  if (!isAuth && !details) {
    return <LoginAlert />;
  }
  console.log(data);
  return (
    <Box bg="rgba(255, 255, 255, 0.6)">
      <Box zIndex="500" bg="teal.500" py="10px" w="100%">
        <Flex gap="20px" align={"center"} ml="20px">
          <Img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="avatar"
            borderRadius="50%"
            h="80px"
            display="block"
          />
          <Box textAlign={"center"}>
            <Heading fontSize={"24px"}>{details.name}</Heading>
            <Text>{details.email}</Text>
          </Box>
        </Flex>
        <Box textAlign={"center"} py="10px">
          <Heading>My Posts</Heading>
        </Box>
      </Box>

      <Grid
        pt="20px"
        px="20px"
        gap="20px"
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2,1fr)" }}
      >
        {data?.map((e, i) => {
          return (
            <GridItem>
              <Mypost key={i + 1} data={e} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
