import React from "react";
import { SubTitle, Text, Flex } from "components/ui";

function PostCard({image, title, text}) {
  return (
    <Flex direction="column" align="flex-start" flex={1}>
      <img src={image} alt={title} />
      <SubTitle withBorder margin="30px 0">{title}</SubTitle>
      <Text margin="0">{text}</Text>
    </Flex>
  );
}

export default PostCard;
