import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  padding: 20px 80px;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-width: max(1px, 0.1em);
  border-style: solid; 
  border-color: lightgrey;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  //height: 500px;
  padding: 10px;
  align-items: center;  
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 34px;
  margin-bottom: 24px;
`;

export const TextWrapper = styled.div`
  font-size: 20px;
  max-width: 540px;
  text-align:center;  
  padding-top: 0;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;