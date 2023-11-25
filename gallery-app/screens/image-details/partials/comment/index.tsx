"use client"

import { Box, Text, Input } from '@chakra-ui/react'

const Mock_Comment = [
  {
    username: "Username",
    text: "Test",
    createAt: "1 day ago"
  },
  {
    username: "Username",
    text: "Test",
    createAt: "1 day ago"
  },
  {
    username: "Username",
    text: "Test",
    createAt: "1 day ago"
  },
  {
    username: "Username",
    text: "Test",
    createAt: "1 day ago"
  },
  {
    username: "Username",
    text: "Test",
    createAt: "1 day ago"
  },
  {
    username: "Username",
    text: "Test",
    createAt: "1 day ago"
  },
  {
    username: "Username",
    text: "Test",
    createAt: "1 day ago"
  },
]

const Component = () => {
  return (
    <Box position={"relative"} marginBottom={20}>
      <Box height={300} overflow="scroll">
        <Text fontSize={32}>Comments</Text>
        {Mock_Comment.map(
          ({ username, createAt, text }) => (
            <Box display="grid" gridTemplateColumns="50px auto" margin="10px 0px">
              <Box width={30} height={30} borderRadius="30" backgroundColor="gray" display="flex" justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={12} textAlign="center" color="white">M</Text>
              </Box>
              <Box>
                <Box display={"flex"}>
                  <Text fontSize={14} fontWeight="bold">{username}</Text>
                  <Text marginLeft={2} fontSize={14}>{text}</Text>
                </Box>
                <Box>
                  <Text fontSize={12}>{createAt}</Text>
                </Box>
              </Box>
            </Box>
          )
        )}
      </Box>
      <Input marginTop={2} borderRadius={20} placeholder='comment...' />
    </Box>
  )
}

export default Component;
