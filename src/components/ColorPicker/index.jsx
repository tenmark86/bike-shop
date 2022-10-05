import React, { useContext } from "react";
import { Flex, Text } from "components/ui";
import Context from "containers/context/context";

import { Button } from "./styled";

function ColorPicker({items}) {

    const { color, setColor } = useContext(Context);
    const handleClick = (id) => () => setColor(id);

    return (
        <Flex direction="column" align="flex-start">
            <Text weight={500}>Color</Text>

            <Flex grap="12px" margin="20px 0 0">
                {items.map((item) => (
                    <Button 
                        key={item.id}
                        color={item.color}
                        active={item.id === color}
                        onClick={handleClick(item.id)}
                    />
                )) }
            </Flex>
        </Flex>
    )
}

export default ColorPicker;
