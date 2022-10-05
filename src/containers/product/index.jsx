import React, { forwardRef } from "react";
import { Wrapper, Flex, Title, Text, Hr, Button } from "components/ui";
import Carousel from "components/Carousel";
import ColorPicker from "components/ColorPicker";
import SizePicker from "components/SizePicker";
import CountPicker from "components/CountPicker";

import Image1 from "assets/image-1.png";
import Image2 from "assets/image-2.png";
import Image3 from "assets/image-3.png";
import Image4 from "assets/image-4.png";
import Image5 from "assets/image-5.png";
import Image6 from "assets/image-6.png";
import Image7 from "assets/image-7.png";
import Image8 from "assets/image-8.png";

const colors = [
  {
    id: 1,
    color: "#E6110C",
  },
  {
    id: 2,
    color: "linear-gradient(180deg, #8B2936 1.47%, #000000 100%)",
  },
  {
    id: 3,
    color: "#282828",
  },
];

const sizes = [
  {
    id: 1,
    label: "XS (27.5” wheels)",
  },
  {
    id: 2,
    label: "S (27.5” wheels)",
  },
];

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const Product = forwardRef(({ handleOrderScroll }, ref) => (
  <section>
    <Wrapper>
      <Title withBorder margin="70px 0 30px">
      MEET THE NEW KING OF THE PEAK
      </Title>
      <Text margin="0 0 60px">
      Fuel EX 9.8 will take your ride to the next level with the package
        spare parts for superior performance. Same way
        We've expanded our size range to fit everyone.
        riders. You can choose the maximum wheel size that
        fits your frame: XS frames have 27.5" wheels available, per frame
        S can choose between 27.5" or 29" and sizes M to XL
        29" wheels available. Fuel EX 9.8 is a great investment for one
        a bike that can do anything.
      </Text>
      <Flex gap="30px" ref={ref}>
        <Flex flex={1}>
          <Carousel>
            {images.map((image) => (
              <img src={image} key={image} alt={image} />
            ))}
          </Carousel>
        </Flex>
        <Flex
          width="470px"
          direction="column"
          align="flex-start"
          justify="space-between"
        >
          <Title withBorder>Fuel EX 9.8</Title>
          <Flex justify="space-between" width="100%" margin="30px 0 20px">
            <Text weight={500}>2022</Text>
            <Text weight={500} color="#B5B5B5">
              Model 33408
            </Text>
          </Flex>
          <Text color="#020106" weight={700} size="26px">
            5000 - 10000ksh
          </Text>
          <Hr />
          <Text margin="5px 0">
          The Fuel EX 9.8 combines a lightweight full carbon frame with
            parts selected for the best value for money
            quality. High quality FOX suspension with upgraded
            front and rear shock absorbers, carbon wheels with rear
            Rapid Drive hub and ultra-smooth wide-range transmission
            Shimano XT give this model additional advantages,
            which you will notice the first time you press the pedal.
          </Text>
          <Hr />
          <Flex width="100%" align="flex-start">
            <Flex flex={1} justify="flex-start">
              <ColorPicker items={colors} />
            </Flex>
            <Flex flex={1}>
              <SizePicker items={sizes} />
            </Flex>
          </Flex>
          <CountPicker />
          <Button onClick={handleOrderScroll}>Checkout</Button>
        </Flex>
      </Flex>
    </Wrapper>
  </section>
));

export default Product;
