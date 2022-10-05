import React, { useContext } from "react";
import Context from "containers/context/context";
import { Flex, Text } from "components/ui";
import { Label, Input, Checked } from "./styled";


function SizePicker({items}) {

    const { size, setSize } = useContext(Context);
    const handleClick = (id) => () => setSize(id);
    
    return (
        <Flex direction="column" align="flex-start">
            <Text weight={500}>The size</Text>
            {items.map((item, index) => (
                <Label first={index === 0} key={item.id}>
                    <Checked checked={size === item.id}/>
                    <Input 
                        name='size'
                        type='radio'
                        value={size === item.id}
                        checked={size === item.id}
                        onChange={handleClick(item.id)}
                    />
                    {item.label}
                </Label>
            ))}
        </Flex>
    )
}

export default SizePicker;
