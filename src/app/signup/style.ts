"use client";
import styled from "styled-components";

export const Container = styled.div`
     padding: 0 40px;
     margin-top: 40px;
     border-bottom: 1px solid #f5f5f5;
`;
export const Wrapper = styled.div`
     max-width: 1240px;
     height: 70vh;
     margin: auto;
     display: flex;
     justify-content: center;
     align-items: center;
`;
export const Registration = styled.div`
     display: flex;
     flex-direction: column;
     place-items: center;
     justify-content: center;
     border: 1px solid black;
     border-radius: 16px;
     padding: 50px;
     > h1 {
          color: var(--Text2, #000);
          font-size: 36px;
          font-style: normal;
          font-weight: 500;
          margin-bottom: 24px;
          line-height: 30px; /* 83.333% */
          letter-spacing: 1.44px;
     }
     > p {
          margin-bottom: 40px;
     }
`;
export const Inputs = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap: 30px;
     > input {
          outline: none;
          width: 340px;
          &::placeholder {
               color: var(--Text2, #000);
               font-size: 14px;
               font-style: normal;
               font-weight: 400;
               line-height: 24px; /* 150% */
               opacity: 0.4;
          }
     }
`;
export const Buttons = styled.div`
     display: flex;
     flex-direction: column;

     > div {
          display: flex;
          flex-direction: column;
          > button {
               margin-top: 20px;
               width: 340px;
               cursor: pointer;
          }
     }
`;
export const RegisterOptions = styled.div`
     display: flex;
     margin-top: 15px;
     gap: 15px;
     cursor: pointer;
`;
