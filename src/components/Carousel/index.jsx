import React, { useState, useEffect, useRef } from "react";
import { Flex } from "components/ui";

import { Arrow, SlideBtn, SlideItem, Container, ContainerItem, CarouselTrack } from "./styled";

function Carousel({ children, width = "670px", height = "502px" }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [transform, setTransform] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const transVal = containerRef.current.offsetWidth * activeSlide;
        setTransform(`-${transVal}px`);
    }, [activeSlide])

    const nextSlide = () => {
        if(activeSlide < children.length - 1){
            setActiveSlide(activeSlide + 1);
        }
    }

    const prevSlide = () => {
        if(activeSlide > 0){
            setActiveSlide(activeSlide - 1);
        }
    }

    const selectSlide = (i) => () => {
        setActiveSlide(i);
    }

    return (
        <div>
            <Container ref={containerRef} width={width} height={height}>
                <SlideBtn onClick={prevSlide}>
                    <Arrow />
                </SlideBtn>

                <CarouselTrack transform={transform}>
                    {children.map((item, i) => (
                        <ContainerItem key={"container_item_key" + i} width={width} height={height}>
                            {item}
                        </ContainerItem>
                    ))}
                </CarouselTrack>

                <SlideBtn rotate="true" onClick={nextSlide}>
                    <Arrow />
                </SlideBtn>
            </Container>

            <Flex width="670px" gap="10px" margin="38px 0 0" wrap="wrap">
                {children.map((item, i) => <SlideItem key={i} onClick={selectSlide(i)}>{item}</SlideItem>)}
            </Flex>
        </div>

    );
}

export default Carousel;
