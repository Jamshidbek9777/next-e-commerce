"use client";
import React from "react";
import { Container } from "./style";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
export default function Home() {
     return (
          <Container>
               <Banner />
               <Products />
          </Container>
     );
}
