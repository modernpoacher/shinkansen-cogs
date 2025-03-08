import React from 'react'

const DISABLED = String.fromCharCode(42)

export default function Disabled () {
  return (
    <span className='is-disabled'>
      {DISABLED}
    </span>
  )
}
