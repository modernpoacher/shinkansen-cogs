import React from 'react'

const REQUIRED = String.fromCharCode(42)

export default function Required () {
  return (
    <span className='is-required'>
      {REQUIRED}
    </span>
  )
}
