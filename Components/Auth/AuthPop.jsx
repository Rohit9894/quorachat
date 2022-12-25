import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Button,
  Img,
  Text,
  ListIcon,
  UnorderedList,
  List,
  ListItem,
  Box,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsChatLeftTextFill } from "react-icons/bs";
import Create from "../Crud/Create";
import { AuthContext } from "../AuthContext/AuthContext";
import Link from "next/link";
function AuthPop() {
  const [data, setData] = useState({ name: "", email: "" });
  const { logoutUser, isAuth } = useContext(AuthContext);

  useEffect(() => {
    console.log("inside useeffect");
    const data = JSON.parse(localStorage.getItem("details")) || "";
    setData(data);
  }, [isAuth]);
  function logout() {
    logoutUser();
  }

  return (
    <div>
      <Popover trigger="hover">
        <PopoverTrigger bg="white">
          <Img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="avatar"
            borderRadius="50%"
            h="40px"
            display="block"
            margin="auto"
          />
        </PopoverTrigger>
        <PopoverContent
          bg="#011627"
          w="250px"
          p="20px"
          mt="2px"
          zIndex={"1200"}
        >
          <PopoverBody>
            <Img
              src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              atl="avatar"
              borderRadius="50%"
              h="50px"
              display="block"
              margin="auto"
            />
            <Text fontWeight={"600"} fontSize={"18px"} textAlign={"center"}>
              {data || isAuth ? data.name : "please Login"}
            </Text>
            <Text fontSize={"14px"} textAlign={"center"}>
              {data || isAuth ? data.email : ""}
            </Text>
            <Box py="20px">
              <hr />
            </Box>
            <List spacing={3} color="white">
              <ListItem fontWeight="600">
                <ListIcon as={ImPencil} color="white" />
                <Create />
              </ListItem>

              <ListItem cursor={"pointer"} fontWeight="600">
                <ListIcon as={BsChatLeftTextFill} color="white" />
                <Link href="/mypost">My Post</Link>
              </ListItem>
              <ListItem cursor="pointer" fontWeight="600" onClick={logout}>
                <ListIcon as={BiLogOut} color="white" />
                Logout
              </ListItem>
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default AuthPop;
