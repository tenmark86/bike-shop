import React from "react";
import { Wrapper, Title, Flex } from "components/ui";
import PostCard from "components/PostCard";
import Post1 from "assets/post-1.png"
import Post2 from "assets/post-2.png"
import Post3 from "assets/post-3.png"
import Post4 from "assets/post-4.png"

const postData = [
    {
        id: 1,
        image: Post1,
        title: "Curved top tube",
        text: "Smaller frames (XS and S) have a top tube that drops down as you get closer to the seat tube. Larger frames (M and above) have a straight top tube, for taller riders."
    },
    {
        id: 2,
        image: Post2,
        title: "Active break - hinge",
        text: "Allows you to independently adjust the suspension response to acceleration and braking force. This means you have more confident control when you need it most."
    },
    {
        id: 3,
        image: Post3,
        title: "RE: THROUGH SHAFT ACTIVE",
        text: "Gives you unrivaled traction and control with a shock absorber that reacts to the terrain faster than it can be."
    },
    {
        id: 4,
        image: Post4,
        title: "Ideal Design",
        text: "The Trek Straight Shot frame design optimizes the stiffness-to-weight ratio for a more responsive ride. You will be able to work harder and stay further in your position when the going gets tough."
    }
]

function Posts() {
  return (
    <section>
      <Wrapper>
        <Title withBorder margin="70px 0 30px">
        FUNCTIONS
        </Title>
        <Flex align="baseline" gap="30px">
            {postData.map((item) => <PostCard key={item.id} {...item} />)}
        </Flex>
      </Wrapper>
    </section>
  );
}
export default Posts;
