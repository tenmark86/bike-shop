import React, { forwardRef } from "react";
import { Title, Text, Wrapper } from "components/ui";
import Form from "components/Form";

const Order = forwardRef((_, ref) => (
  <section>
    <Wrapper>
      <Title ref={ref} withBorder margin="70px 0 30px">
      BE THE FIRST
      </Title>
      <Text>
      Hurry up to be on the list of the first riders who managed to become the owners of a new
        FUEL EX 9.8 and feel all the emotions conveyed by the future downhill legend.
        At the same time, the first riders who ordered the new model will receive an additional
        maintenance support package from Trek.
      </Text>
      <Form />
    </Wrapper>
  </section>
));

export default Order;
