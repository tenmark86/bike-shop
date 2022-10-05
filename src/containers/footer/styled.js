import styled from "styled-components";

export const FooterSC = styled.footer`
    background-color: #020106;
    height: 100px;
    width: 100%;
`;

export const LinkContainer = styled.div`
    & > * + * {
        margin-left: 25px;
    }
`;
