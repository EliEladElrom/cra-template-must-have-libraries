/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/TemplateName/TemplateName.tsx
*/

import React, { useEffect } from 'react'
import './TemplateName.scss'
import { useRecoilValue } from 'recoil'

const TemplateName = () => {
  const results: boolean = true // useRecoilValue( getMethod )
  useEffect(() => {
    // TODO
  })
  return (
    <>
      {results ? (
        <>Loaded</>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default TemplateName
