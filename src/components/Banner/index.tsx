"use client";
import React from "react";
import { Carousel, message } from "antd";
import { Container, CarouselImg, CarouselContainer } from "./style";
//antd carousel
const contentStyle: React.CSSProperties = {
     margin: 0,
     height: "auto",
     color: "#fff",
     lineHeight: "160px",
     textAlign: "center",
     background: "#364d79",
     borderRadius: "16px",
     overflow: "hidden",
};
const onChange = (currentSlide: number) => {
     console.log(currentSlide);
};

const Banner = () => {
     return (
          <Container>
               <Carousel afterChange={onChange}>
                    <div>
                         <CarouselImg
                              src="https://images.uzum.uz/cmrkf1p25ku8ad8j5040/main_page_banner.jpg"
                              alt=""
                         />
                    </div>
                    <div>
                         <CarouselImg
                              src="https://images.uzum.uz/cmt8nt125ku8jql6fuig/main_page_banner.jpg"
                              alt=""
                         />
                    </div>
                    <div>
                         <CarouselImg
                              src="https://images.uzum.uz/cmt4o5125ku8jql6eta0/main_page_banner.jpg"
                              alt=""
                         />
                    </div>
                    <div>
                         <CarouselImg
                              src="https://images.uzum.uz/cmrobb9s99ouqbfsd85g/main_page_banner.jpg"
                              alt=""
                         />
                    </div>
               </Carousel>
          </Container>
     );
};

export default Banner;
