import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Address } from '../Address/Address';

export const QuoteInfo = () => {
    const { data, status } = useFetch('quote')

    return (
        <>
            {status === "error" && <div>{"Something went wrong"}</div>}
            {status === "loading" && <div>Loading...</div>}
            <div className="mt-lg-5 mt-md-5 mb-5 mb-md-0">
                {data?.map((user, index) => {
                    return (<div key={user.quoteRef + "_" + index}>
                        <h1 className="mb-md-5">{`Hey ${user.firstName},`}</h1>
                        <Address
                            addressLine1={user?.address1}
                            addressLine2={user?.address2}
                            addressLine3={user?.address3}
                            town={user.town} />
                        <div className="mt-4 fs-5">{`Quote Reference: ${user.quoteRef}`}</div>
                        <div className="mt-4 fs-5">{`Cover starts on ${(user.startDate).split('T')[0]}`}</div>
                    </div>
                    );
                })}
            </div>
        </>
    )
}
