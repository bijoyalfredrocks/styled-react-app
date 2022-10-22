import React from 'react'

export const ExtraCoverTitle = ({titleTxt}) => {
  return (
    <div className='mt-5 mb-5'>
    <h1 data-testid="cover-title">{titleTxt}</h1>
    </div>
  )
}
