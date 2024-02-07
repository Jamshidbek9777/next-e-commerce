"use client";
type Products = {
     _id: number;
     name: string;
     description: string;
     price: number;
};

import React, { useEffect, useState } from "react";
import {
     Container,
     OffersContainer,
     Products,
     ProductCard,
     Description,
     Image,
     Name,
     Price,
     AddToCartButton,
} from "./style";
import { Carousel, message } from "antd";
import axios from "axios";

const ProductsPage = () => {

     //getProducts
     const [products, setProducts] = useState<Products[]>([]);
     const getAllProducts = async () => {
          try {
               const res = await axios.get(
                    `http://localhost:8000/api/v1/products/get-products`
               );

               if (res.data.success) {
                    setProducts(res.data.products);
               }
          } catch (error) {
               console.log(error);
               message.error("Something went wrong");
          }
     };
     useEffect(() => {
          getAllProducts();
     }, []);
     return (
          <Container>
               <OffersContainer>
                    <Products>
                         {products.map((item) => (
                              <ProductCard key={item._id}>
                                   <Image>
                                        <img
                                             src={`http://localhost:8000/api/v1/products/product-photo/${item._id}`}
                                             alt="..."
                                        />
                                   </Image>
                                   <AddToCartButton>
                                        Add to Cart
                                   </AddToCartButton>
                                   <Name>{item.name}</Name>
                                   <Description>
                                        <Price>{item.price}</Price>
                                   </Description>
                              </ProductCard>
                         ))}
                    </Products>
               </OffersContainer>
          </Container>
     );
};
export default ProductsPage;
