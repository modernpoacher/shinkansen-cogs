/**
 * TextContent component
 *
 * @typedef {import('shinkansen-cogs/components/common/text-content').TextContentProps} TextContentProps
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {TextContentProps}
 * @returns {React.JSX.Element | null}
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
