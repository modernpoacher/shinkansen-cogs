/**
 * ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from '@modernpoacher/cogs/components/common/text-content'

export default class ErrorMessage extends Component {
  getClassName () {
    return 'error-message'
  }

  /**
   *  Compare current and latest `props` for changes to `errorMessage`
   *
   *  @param {{errorMessage?: string}} props   Latest props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (props.errorMessage !== this.props.errorMessage)
  }

  render () {
    const { errorMessage } = this.props

    if (errorMessage) {
      return (
        <span className={this.getClassName()}>
          <TextContent textContent={errorMessage} />
        </span>
      )
    }

    return null
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
}

ErrorMessage.defaultProps = {}
