import React from 'react'
import PropTypes from 'prop-types'

const TextContent = ({ textContent }) => (
  <span className='text-content'>
    {textContent}
  </span>
)

TextContent.propTypes = {
  textContent: PropTypes.string.isRequired
}

export default TextContent
