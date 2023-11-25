"use client"
import { FC } from 'react';
import { Box, Text, Input } from '@chakra-ui/react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useAction from './actions';

dayjs.extend(relativeTime);

interface ICommentProps {
  imageId: string
}
const Component:FC<ICommentProps> = (props) => {
  const { comments, newComment, onChange, onEnter } = useAction({ imageId: props?.imageId });

  return (
    <Box position={"relative"} marginBottom={20}>
      <Box height={300} overflow="scroll">
        <Text fontSize={32}>Comments</Text>
        {!!comments?.length ? comments.map(
          ({ userName, comment: text, createdAt }, key) => (
            <Box key={key} display="grid" gridTemplateColumns="50px auto" margin="10px 0px">
              <Box width={30} height={30} borderRadius="30" backgroundColor="gray" display="flex" justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={12} textAlign="center" color="white">M</Text>
              </Box>
              <Box>
                <Box display={"flex"}>
                  <Text fontSize={14} fontWeight="bold">{userName}</Text>
                  <Text marginLeft={2} fontSize={14}>{text}</Text>
                </Box>
                <Box>
                  <Text fontSize={12}>{dayjs(createdAt).fromNow()}</Text>
                </Box>
              </Box>
            </Box>
          )
        ) : (
          <Box padding={6}>
            <Text textAlign="center">No Comments</Text>
          </Box>
        )}
      </Box>
      <Input
        value={newComment}
        onChange={onChange}
        onKeyDown={onEnter}
        marginTop={2}
        borderRadius={20}
        placeholder='comment...'
      />
    </Box>
  )
}

export default Component;
