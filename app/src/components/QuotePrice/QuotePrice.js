import React, { useEffect, useState } from 'react';
import { useAppData } from '../../context/AppProvider';

export const QuotePrice = ({ paymentType, baseMonthlyPrice, baseAnnualPrice }) => {
    const [totalPrice, setTotalPrice] = useState(baseMonthlyPrice);
    const { appState: { addOns } } = useAppData();

    //console.log("addOns",addOns);

    let total = 0;
    const annualPrice = () => {
        addOns?.forEach(addOn => {
            total += addOn.annualPrice;
            setTotalPrice(parseFloat(total).toFixed(2));
        });
    }

    const monthlyPrice = () => {
        addOns?.forEach(addOn => {
            total += addOn.monthlyPrice;
            setTotalPrice(parseFloat(total).toFixed(2));
        });
    }
    
    useEffect(() => {
        if (addOns.length === 0) {
            paymentType ? setTotalPrice(baseAnnualPrice) : setTotalPrice(baseMonthlyPrice);
        } else {
            total = paymentType ? baseAnnualPrice : baseMonthlyPrice;
            paymentType ? annualPrice(total) : monthlyPrice(total)
        }
    }, [addOns, paymentType]);

    return (
        <h1 className="card-title display-3">
            <strong data-testid="total-price">{`£${totalPrice}`}</strong>
        </h1>
    )
}
