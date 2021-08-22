/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/hooks/WindowDimensions.tsx

Implement:

import useWindowDimensions from '../../hooks/WindowDimensions'
const { height, width } = useWindowDimensions()

*/

import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
