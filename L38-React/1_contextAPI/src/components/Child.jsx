import React from 'react'
import Grandchild from './Grandchild'

const Child = () => {
  return (
    <div>
      I am a Child
      <Grandchild />
    </div>
  )
}

export default Child
