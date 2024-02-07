"use client";
import styled from "styled-components";

export const Container = styled.div`
     margin-top: 10px;
     background-color: #fff;
     border-bottom: 1px solid grey;
`;
export const NavbarContainer = styled.div`
     margin: auto;
     max-width: 1240px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 1rem;
     color: black;
`;

export const Logo = styled.h1`
     margin: 0;
`;

export const NavLinks = styled.div`
     display: flex;
     gap: 40px;
     justify-content: center;
     align-items: center;
     p {
          margin: 0;
          cursor: pointer;
     }
`;

export const RightSide = styled.div`
     display: flex;
     gap: 20px;
     > span {
          display: flex;
          justify-content: center;
          align-items: center;
     }
`;
