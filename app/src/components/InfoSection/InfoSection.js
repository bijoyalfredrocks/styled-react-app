import React from 'react'
import { Container } from '../../globalStyles'
import { QuoteInfo } from '../QuoteInfo/QuoteInfo'
import { QuoteSummary } from '../QuoteSummary/QuoteSummary'
import { InfoColumn, InfoRow, InfoWrapper } from './InfoSection.styled'

export const InfoSection = () => {
  return (
    <InfoWrapper>
     
        <InfoRow>
            <InfoColumn>
                <QuoteInfo/>
            </InfoColumn>
            <InfoColumn>
                <QuoteSummary/>
            </InfoColumn>
        </InfoRow>
     
        </InfoWrapper>
  )
}
