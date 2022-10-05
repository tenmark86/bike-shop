import styled from "styled-components";

export const SlideBtn = styled.button`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    z-index: 100;

    position: absolute;
    top: 50%;
    transform: translateY(-50%)
    ${({ rotate }) => (rotate ? "rotate(180deg);" : null)};
    ${({ rotate }) => (rotate ? "right: 13px;" : "left: 13px;")};
`;

export const Arrow = styled.div`
    width: 9px;
    height: 9px;
    border-style: solid;
    border-width: 0 0 2px 2px;
    border-color: white;
    transform: rotate(45deg);
`;

export const SlideItem = styled.div`
    height: 120px;
    width: 160px;
    cursor: pointer;

    & > * {
        width: 100%;
        height: 100%;
    }
`;

export const Container = styled.div`
    position: relative;
    background-color: white;
    border: none;
    overflow-x: hidden;
    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};
`;

export const ContainerItem = styled.div`
    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CarouselTrack = styled.div`
    display: flex;
    width: max-content;

    transition: 0.2s linear transform;

    ${({ transform }) =>
        transform
        ? `transform: translateX(${transform});`
        : `transform: translateX(0);`}
`;
