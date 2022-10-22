import { Button,CardWrapper } from '../../globalStyles';
import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { QuotePrice } from '../QuotePrice/QuotePrice';
//import './QuoteSummary.css';

import {
    PricingContainer,
    PricingCard,
    PricingCardInfo,    
    PricingCardLength,
    TextWrapper

  } from './QuoteSummary.styled';

export const QuoteSummary = () => {
    const [toggleBtnContent, setToggleBtnContent] = useState(false);
    const { dispatch, data, status } = useFetch('quote');

    const togglePayment = (e) => {
        setToggleBtnContent(!toggleBtnContent);
        dispatch({ type: "TOGGLE_PAYMENT" });
    }
    const displayPrice = () => {
        return (<>
            {(status === "loading") && <div>Loading...</div>}
            {data?.map((user, index) => {
                return (
                    <QuotePrice
                        key={user.annualPrice + "_" + index}
                        paymentType = {toggleBtnContent}
                        baseMonthlyPrice={user?.monthlyPrice}
                        baseAnnualPrice={user?.annualPrice} />)
            })}
        </>)
    }

    return (
        
            <PricingContainer>
                <PricingCard>
                <PricingCardInfo>
                    {displayPrice()}
                    <PricingCardLength>{toggleBtnContent ? "per annum" : "per month"}</PricingCardLength>
                    <TextWrapper>{`This price includes Insurance Premium Tax at the current rate. No charge for paying ${toggleBtnContent ? "annuam" : "monthly"}`}</TextWrapper>
                    <Button
                        primary fontBig
                        large
                        onClick={togglePayment}
                        alignCenter>
                        <strong>{toggleBtnContent ? "Switch to monthly" : "Switch to annum"}</strong>
                    </Button>                    
                    </PricingCardInfo>
                </PricingCard>
            </PricingContainer>
        
    )
}
