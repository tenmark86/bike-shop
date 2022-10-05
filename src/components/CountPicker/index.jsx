import React, { useContext } from "react";
import Context from "containers/context/context";
import { Flex, Text } from "components/ui";
import { Button, Input } from "./styled";

function CountPicker() {
    
    const { count, setCount } = useContext(Context);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => {
        if (count > 0) setCount((prev) => prev - 1);
    } 

    const handleChange = (e) => {
        if(e.target.value.length){
            setCount(parseInt(e.target.value), 10) 
        }else{
            setCount(1);
        }
    }

    return (
        <Flex justify="flex-start" margin="20px 0 30px">
            <Text weight={500} margin="0 30px 0 0">Quantity</Text>
            <Flex>
                <Button onClick={handleDecrement}>-</Button>
                <Input value={count} onChange={handleChange} />
                <Button onClick={handleIncrement}>+</Button>
            </Flex>
        </Flex>
    )
}

export default CountPicker;
