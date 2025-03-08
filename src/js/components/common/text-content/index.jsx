/**
 *  @typedef {CogsTypes.Components.Common.TextContent.TextContentProps} TextContentProps
 */

/**
 *  TextContent component
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 *  @param {TextContentProps} props
 *  @returns {React.JSX.Element | null}
 */
export default function TextContent ({ textContent }) {
  if (textContent) {
    return (
      <span className='text-content'>
        {textContent}
      </span>
    )
  }

  return null
}

TextContent.propTypes = {
  textContent: PropTypes.string.isRequired
}
