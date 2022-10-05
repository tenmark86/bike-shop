import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    position: ${({ relative }) => (relative ? 'relative' : null)};
    height: ${({ height }) => (height ? height : null)};
`

const Flex = styled.div`
    display: flex;
    width: ${({ width }) => (width ? width : null)};
    justify-content: ${({ justify }) => (justify ? justify : 'center')};
    align-items: ${({ align }) => (align ? align : 'center')};
    flex-wrap: ${({ wrap = 'no-wrap' }) => wrap};
    flex-direction: ${({ direction }) => (direction ? direction : 'row')};
    padding: ${({ padding }) => (padding ? padding : null)};
    margin: ${({ margin }) => (margin ? margin : null)};
    height: ${({ height }) => (height ? height : null)};
    flex: ${({ flex }) => (flex ? flex : null)};
    column-gap: ${({ gap }) => (gap ? gap : null)};
    row-gap: ${({ gap }) => (gap ? gap : null)};
`

const Title = styled.h2`
    font-family: Roboto;
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
    color: #020106;

    padding: ${({ padding }) => (padding ? padding : null)};
    margin: ${({ margin }) => (margin ? margin : '0')};
    border-left: ${({ withBorder }) => (withBorder ? '3px solid #E6110C' : null)};
    padding-left: ${({ withBorder }) => (withBorder ? '15px' : null)};
`

const SubTitle = styled.h3`
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    color: #020106;
    
    padding: ${({ padding }) => (padding ? padding : null)};
    margin: ${({ margin }) => (margin ? margin : '0')};

    ${({ withBorder }) =>
        withBorder
        ? `
            position: relative;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -10px;
                width: 45px;
                height: 3px;
                background: #E6110C;
            }
        `
        : null}
`

const Text = styled.p`
    font-family: 'Roboto';
    font-size: ${({ size }) => (size ? size : '18px')};
    font-weight: ${({ weight }) => (weight ? weight : 400)};
    color: ${({ color }) => (color ? color : '#282828')};
    padding: ${({ padding }) => (padding ? padding : null)};
    margin: ${({ margin }) => (margin ? margin : '0')};
`

const Hr = styled.hr`
    width: 100%;
    margin: 20px 0;
    border-color: #B5B5B5;
    border-bottom: none;
`

const Button = styled.button`
    height: 60px;
    width: ${({ width }) => (width ? width : '470px')};
    color: ${({ color }) => (color ? color : '#020106')};
    background: ${({ background }) => (background ? background : '#E6110C')};
    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export { Wrapper, Flex, Title, SubTitle, Text, Hr, Button };
