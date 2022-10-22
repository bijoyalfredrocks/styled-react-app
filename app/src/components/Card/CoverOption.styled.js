import styled from "styled-components";

export const CoverOptionColumn = styled.div`
   flex:50%;
   flex-wrap:wrap;
   align-items: stretch;
  flex-direction: column;
  flex-grow: 1;

   
  `;



// export const CoverOptionColumn = styled.div`
//   flex: 50%;

//   //display: flex;
//   flex-wrap: wrap;
//   gap: 5em;

//   `;

// export const CardWrapper = styled.div`
//   overflow: hidden;
//   padding: 0 0 32px;
//   margin: 48px auto 0;
//   padding:32px 32px;  
//  // font-family: Quicksand, arial, sans-serif;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
//   border-radius: 5px;
// `;
export const CoverOptionCard = styled.div` 
  padding: 20px 20px;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-width: max(1px, 0.1em);
  border-style: solid; 
  border-color: lightgrey;
  max-width: 720px;
  height:100%;
    @media screen and (max-width: 960px) {
    width: 90%;
  }

`;
// // .card {
// //     display: flex;
// //     flex-direction: column;
// //     margin: 1rem auto;
// //     overflow: hidden;
// //     border-radius: 5px;
// //     /* for the rounded corners */
// //     box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
// //     /* Changes below */
// //     max-width: 700px;
// //     max-height: 512px;
// //     /* Changes above */
// //     text-align: center;
// //     font-family: 'Open Sans', sans-serif;
// //   }
  
// export const CardHeader = styled.header`
//   padding-top:0px;
//   padding-bottom: 0px;
// `;

// export const CardHeading = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: left;
// `;

// export const CardBody = styled.div`
//   padding-right: 32px;
//   padding-left: 32px;
// `;