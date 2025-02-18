import React from 'react'

const READONLY = String.fromCharCode(42)

export default function ReadOnly () {
  return (
    <span className='is-readonly'>
      {READONLY}
    </span>
  )
}
