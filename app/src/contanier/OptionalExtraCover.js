import React from 'react';
import { CoverOption } from '../components/Card/CoverOption';
import DataQuery from '../hooks/useFetch';
import {ExtraCoverRow} from './OptionalExtraCover.styled'
export const OptionalExtraCover = () => {
  const { data, status} = DataQuery('addons'); 
  return (
    <>
      {status ==="error" && <div>{"Something went wrong"}</div>}
      {status ==="loading" && <div>Loading...</div>}
      <ExtraCoverRow>
        {data?.map((addon, index) => {
          return (<CoverOption
            id={addon.title}
            key={`${addon.title}_${index}`}
            title={addon.title}
            text={addon.text}
            monthlyPrice={addon.monthlyPrice}
            annualPrice={addon.annualPrice}/>
          );
        })}
      </ExtraCoverRow>
    </>
  )
}
