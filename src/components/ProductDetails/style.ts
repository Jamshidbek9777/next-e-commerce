import styled from "styled-components";

export const Container = styled.div`
     user-select: none;
     max-width: 1240px;
     margin: auto;
     padding: 0 20px;
`;
export const Content = styled.div`
     @media screen and (max-width: 1100px) {
          display: flex;
          justify-content: space-between;
     }
     @media screen and (max-width: 820px) {
          display: flex;
          flex-direction: column;
     }
     display: flex;
     justify-content: space-between;
`;
export const ImagesView = styled.div`
     width: 350px;
     display: flex;
     flex-direction: column;
     @media screen and (max-width: 820px) {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
     }
`;

export const MainImage = styled.div`
     > img {
          @media screen and (max-width: 1250px) {
          }
          width: 100%;
          border-radius: 16px;
     }
`;
export const OtherImages = styled.div`
     gap: 11px;
     margin-top: 20px;
     display: flex;
     justify-content: space-between;
     @media screen and (max-width: 820px) {
          height: inherit;
          display: flex;
          flex-direction: column;
          margin-top: 0px;
          margin-right: 20px;
     }
     > img {
          @media screen and (max-width: 820px) {
               max-width: 250px;
               width: 100%;
          }
          width: 60px;
          border-radius: 10px;
          border: 1px solid #dee2e7;
     }
`;
export const Description = styled.div`
     @media screen and (max-width: 1100px) {
          margin: auto;
     }
     @media screen and (max-width: 820px) {
          margin-top: 20px;
     }
`;
export const About = styled.div`
     @media screen and (max-width: 1250px) {
          display: none;
     }
     width: 280px;
     height: 325px;
     flex-shrink: 0;
     border: 1px solid #dee2e7;
     border-radius: 16px;
     padding: 17px;
`;
export const Availability = styled.div`
     gap: 5px;
     border: 1px solid;
     display: flex;
     align-items: center;
     color: #00b517;
     text-align: center;
     width: 120px;
     font-size: 16px;
     padding: 2px 10px;
     border-radius: 10px;
     > img {
          display: flex;
          justify-content: center;
          align-items: center;
     }
`;
export const ProductInfo = styled.div`
     @media screen and (max-width: 1100px) {
          width: 300px;
     }
     @media screen and (max-width: 820px) {
          width: 100%;
     }
     color: #000;
     width: 437px;
     font-size: 28px;
     font-style: normal;
     font-weight: 600;
     line-height: normal;
     margin-top: 10px;
`;
export const Reviews = styled.div`
     display: flex;
`;
export const Info = styled.div`
     @media screen and (max-width: 1100px) {
          width: 300px;
     }
     @media screen and (max-width: 430px) {
          max-width: 250px;
          width: 100%;
     }
     max-width: 430px;
     width: 100%;
     margin-top: 20px;
     height: auto;
     flex-shrink: 0;
     background-color: #fafbfc;
     > p {
          color: #000;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: 15px;
          letter-spacing: 0.24px;
     }
     > li {
          color: #000;
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 177.994%;
          letter-spacing: 0.24px;
     }
`;
export const Image = styled.div``;
export const Rating = styled.div`
     display: flex;
`;
export const Size = styled.div`
     margin-top: 20px;
`;
export const Sizes = styled.div`
     display: flex;
     gap: 10px;
     > p {
          width: fit-content;
          @media screen and (max-width: 1100px) {
               padding: 3px 11px;
          }
          padding: 3px 15px;
          display: flex;
          align-items: center;
          background: var(
               --primary-gradient,
               linear-gradient(180deg, #127fff 0%, #0067ff 100%)
          );
          border-radius: 4px;
          color: #fff;
          margin-top: 10px;
          cursor: pointer;
          @media screen and (max-width: 430px) {
               padding: 2px 9px;
               font-size: 13px;
          }
     }
`;
export const BuySection = styled.div`
     display: flex;
     flex-wrap: wrap;
     cursor: pointer;
     gap: 10px;
     margin-top: 30px;
`;
export const Amount = styled.div`
     user-select: none;
     display: flex;
     width: 70px;
     align-items: center;
     justify-content: center;
     border: 1px solid #0d79ff;
     border-radius: 4px;
     > button {
          border: none;
          background-color: #fff;
          margin: 0 10px;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
     }
`;
export const AddToCart = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 40px;
     width: 200px;
     font-size: 14px;
     border-radius: 4px;
     font-weight: 500;
     background: var(
          --primary-gradient,
          linear-gradient(180deg, #127fff 0%, #0067ff 100%)
     );
     color: white;
     gap: 10px;
     @media screen and (max-width: 430px) {
          width: 150px;
     }
`;
export const Favourites = styled.div`
     width: 200px;
     height: 40px;
     border: 1px solid #0d79ff;
     display: flex;
     align-items: center;
     justify-content: center;
     font-weight: 500;
     border-radius: 4px;
     color: #0067ff;
     width: 150px;
     gap: 5px;
     font-size: 14px;
`;
export const Price = styled.div`
     display: flex;
     margin-top: 40px;
     gap: 20px;
`;
export const Supplier = styled.div`
     gap: 10px;
     display: flex;
     > h3 {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: rgba(76, 167, 167, 0.6);
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: -0.2px;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 4px;
          background: #c6f3f1;
     }
     > p {
          color: var(--dark, #1c1c1c);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.2px;
     }
`;
export const Location = styled.div`
     margin-top: 13px;
     > p {
          gap: 20px;
          display: flex;
          margin-top: 8px;
          color: var(--gray-500, #8b96a5);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.2px;
          > img {
               display: flex;
               align-items: center;
               width: 26px;
          }
     }
`;
export const Buttons = styled.div`
     margin-top: 28px;
`;
export const Line = styled.div`
     background-color: #e0e0e0;
     width: auto;
     height: 1px;
     margin-top: 20px;
`;
export const Button1 = styled.div`
     > button {
          border-radius: 4px;
          background: var(
               --primary-gradient,
               linear-gradient(180deg, #127fff 0%, #0067ff 100%)
          );
          border: none;
          width: 100%;
          font-size: 16px;
          height: 40px;
          margin-bottom: 8px;
          color: #fff;
     }
`;
export const Button2 = styled.div`
     > button {
          width: 100%;
          background-color: #fff;
          border: 1px solid #dee2e7;
          border-radius: 4px;
          font-size: 16px;
          height: 40px;
          color: #0067ff;
     }
`;
