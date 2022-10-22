import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import {CoverOptionColumn, CoverOptionCard} from "./CoverOption.styled";
import { useAppData } from '../../context/AppProvider';

export const CoverOption = ({ id, title, text, monthlyPrice, annualPrice }) => {

    const { dispatch, appState: { togglePayment } } = useAppData();
    const [selected, setSelected] = useState(false);

    const addExtra = (id, monthlyPrice, annualPrice) => {
        dispatch({
            type: "ADD_EXTRA",
            payload: {
                id: id,
                monthlyPrice: monthlyPrice,
                annualPrice: annualPrice
            }
        });
    }

    const removeExtra = (id) => {
        dispatch({ type: "REMOVE_EXTRA", payload: { id: id } });
    }

    return (
        
            <CoverOptionColumn className={`${selected ? 'border border-4 border-primary' : ''}`}>
                <CoverOptionCard>
                <div>
                    <div>
                        <div>
                            <h3>{title}</h3>
                        </div>
                        <div>
                            <div>{`£${togglePayment ? annualPrice : monthlyPrice} per ${togglePayment ? 'annuam' : 'monthly'}`}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{text}</p>
                </div>
                <div>
                    <Button fontBig
                        onClick={(e) => {
                            setSelected(!selected);
                            selected ? removeExtra(id) : addExtra(id, monthlyPrice, annualPrice);
                        }}
                        primary={selected ? false : true}>
                        <strong>{selected ? "Remove this extra" : "Select this extra"}</strong>
                    </Button>
                    
                </div>
                </CoverOptionCard>
            </CoverOptionColumn>
        
    )
}
