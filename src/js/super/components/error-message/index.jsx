/**
 *  @typedef {CogsTypes.Super.Components.ErrorMessage.ErrorMessageProps} ErrorMessageProps
 *  @typedef {CogsTypes.Super.Components.ErrorMessage.ErrorMessageState} ErrorMessageState
 */

/**
 *  ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from '#cogs/components/common/text-content'

/**
 *  @extends {Component<ErrorMessageProps, ErrorMessageState>}
 */
export default class ErrorMessage extends Component {
  /**
   *  @type {ErrorMessageState}
   */
  state = {}

  getClassName () {
    return 'error-message'
  }

  /**
   *  Compare current and latest `state` for changes to `errorMessage`
   *
   *  @param {ErrorMessageProps} props   Latest props
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
          <TextContent
            textContent={errorMessage}
          />
        </span>
      )
    }

    return null
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape({}).isRequired,
    uri: PropTypes.string.isRequired
  })
}
