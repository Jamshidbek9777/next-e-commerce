import React, { useState, useEffect } from "react";

import {
     About,
     Availability,
     Container,
     Content,
     Description,
     ImagesView,
     MainImage,
     OtherImages,
     ProductInfo,
     Reviews,
     Rating,
     Info,
     Size,
     Sizes,
     BuySection,
     Amount,
     AddToCart,
     Favourites,
     Price,
     Supplier,
     Location,
     Buttons,
     Line,
     Button1,
     Button2,
} from "./style";
const ProductDetails = () => {
     return (
          <Container>
               <Content>
                    <ImagesView>
                         <MainImage>
                              <img src={"hi"} alt="" />
                         </MainImage>
                         <OtherImages>
                              <img src={""} alt="" />
                              <img src={""} alt="" />
                              <img src={""} alt="" />
                              <img src={""} alt="" />
                              {/* <img src={product.image} alt="" /> */}
                         </OtherImages>
                    </ImagesView>
                    <Description>
                         <Availability>
                              <img src={""} alt="" />
                              {""}
                         </Availability>
                         <ProductInfo>{""}</ProductInfo>
                         <Reviews>
                              <Rating>
                                   <img src={""} alt="" />
                                   <p>{""}</p>
                              </Rating>
                         </Reviews>
                         <Info>
                              <p>Description:</p>
                              <li>{""}</li>
                         </Info>
                         <Size>
                              <p>Choose size:</p>
                              <Sizes>
                                   <p>{""}</p>
                                   <p>{""}</p>
                                   <p>{""}</p>
                                   <p>{""}</p>
                              </Sizes>
                         </Size>
                         <BuySection>
                              <AddToCart>
                                   <img src={"Cart"} alt="" />
                                   Add to cart
                              </AddToCart>
                              <Favourites>
                                   <img src={"Outline"} alt="" />
                                   Favourites
                              </Favourites>
                         </BuySection>
                         <Price>
                              <p>Price: ${"calculatedPrice"}</p>
                         </Price>
                    </Description>
                    <About>
                         <Supplier>
                              <h3>R</h3>
                              <p>
                                   Supplier <br />
                                   Guanjoi Trading LLC
                              </p>
                         </Supplier>
                         <Line></Line>
                         <Location>
                              <p>
                                   <img src={""} alt="" />
                                   Germany, Berlin
                              </p>
                              <p>
                                   <img src={"VerifyLogo"} alt="" />
                                   Verified Seller
                              </p>
                              <p>
                                   <img src={"WorldLogo"} alt="" />
                                   Worldwide shipping
                              </p>
                         </Location>
                         <Buttons>
                              <Button1>
                                   <button>Send inquiry</button>
                              </Button1>
                              <Button2>
                                   <button>Seller's profile</button>
                              </Button2>
                         </Buttons>
                    </About>
               </Content>
          </Container>
     );
};

export default ProductDetails;
