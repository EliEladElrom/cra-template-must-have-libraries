/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/TemplateName/TemplateName.tsx
*/

import React, { useEffect } from 'react'
import './TemplateName.scss'
// import { useRecoilValue } from 'recoil'

const TemplateName = () /* or ( props : ITemplateNameProps ) */ => {
  const results: boolean = true // useRecoilValue( getMethod )
  useEffect(() => {
    // TODO
  })
  return (
    <>
      {results ? (
        <div style={{ width: '100%', height: '400px', backgroundColor: 'lightgrey' }}>
          TemplateName Loaded
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  )
}

/*
interface ITemplateNameProps {
  // TODO
}
*/

export default TemplateName
