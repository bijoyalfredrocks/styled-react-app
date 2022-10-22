import styled from 'styled-components';

export const InfoWrapper = styled.div`
    margin: 50px;
 `;

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `;

export const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
   }
  `;
// export const InfoRow = styled.div`
//   display: flex;
//   //margin: 0 -15px -15px -15px;
//   flex-wrap: wrap;
//   align-items: center;
//   flex-direction: 'row';
// `;

// export const InfoColumn = styled.div`
//   margin-bottom: 15px;
//   padding-right: 15px;
//   padding-left: 15px;
//   flex: 1;
//   //max-width: 50%;
//   flex-basis: 100%;
//   flex-direction: 'column';

//   @media screen and (max-width: 768px) {
//     max-width: 100%;
//     flex-basis: 100%;
//     display: flex;
//     justify-content: center;
//   }
// `;

// export const ImgWrapper = styled.div`
//   max-width: 555px;
//   display: flex;
//   justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
// `;

// export const TopLine = styled.div`
//   color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
//   font-size: 18px;
//   line-height: 16px;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   margin-bottom: 16px;
// `;

// export const Heading = styled.h1`
//   margin-bottom: 24px;
//   font-size: 48px;
//   line-height: 1.1;
//   font-weight: 600;
//   color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
// `;
