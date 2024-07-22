import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'

const Box = () => {
    let counter = useSelector((state)=> state.counter)
  return (
    <div>
      this is box {counter}
      <GrandSonBox/>
    </div>
  )
}

export default Box
