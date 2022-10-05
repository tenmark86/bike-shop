import React from "react";
import { Wrapper, Flex, Button } from "components/ui";
import { HeaderSC, Absolute, HeaderText } from "./styled";
import { ReactComponent as Logo } from "assets/logo.svg";

function Header({ handleProductScroll }) {
    return (
        <HeaderSC>
            <Wrapper relative height="100%">
                <Flex padding="24px 0 0">
                    <Logo />
                </Flex>
                <Absolute>
                    <HeaderText red weight={700}>NEW</HeaderText>
                    <HeaderText>ideal</HeaderText>
                    <HeaderText size="71px" weight={900} space="30px">Fuel EX 9.8 GX</HeaderText>
                    <Button onClick={handleProductScroll}>Checkout</Button>
                </Absolute>
            </Wrapper>
        </HeaderSC>
    )
}

export default Header;
