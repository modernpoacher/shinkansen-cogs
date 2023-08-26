/**
 * TextContent component
 *
 * @typedef {import('@modernpoacher/cogs/components/common/text-content').TextContentProps} TextContentProps
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {TextContentProps}
 * @returns {React.JSX.Element}
 */
const TextContent = ({ textContent }) => (
  <span className='text-content'>
    {textContent}
  </span>
)

TextContent.propTypes = {
  textContent: PropTypes.string.isRequired
}

export default TextContent
