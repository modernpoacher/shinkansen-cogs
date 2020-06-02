/**
 * ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import transform from 'shinkansen-cogs/transformers/error-message'

import TextContent from 'shinkansen-cogs/components/common/text-content'

export default class ErrorMessage extends Component {
  state = { errorMessage: Immutable.Map() }

  hasTextContent () {
    const { errorMessage } = this.props

    const {
      text
    } = transform(errorMessage)

    return !!text
  }

  getTextContent () {
    const { errorMessage } = this.props
    const {
      text
    } = transform(errorMessage)

    return text
  }

  getClassName () {
    return 'error-message'
  }

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Current state
   */
  static getDerivedStateFromProps ({ errorMessage }, { errorMessage: E }) {
    const e = Immutable.Map(errorMessage)

    return {
      errorMessage: Immutable.is(E, e) ? E : e
    }
  }

  /**
   *  Compare latest 'props' via 'state' for changes to 'errorMessage'
   *
   *  @param {Object} props   Latest props
   *  @param {Object} state   Latest state
   */
  shouldComponentUpdate (props, state) {
    const {
      errorMessage: e
    } = state

    const {
      errorMessage: E
    } = this.state

    return (e !== E)
  }

  renderTextContent () {
    if (this.hasTextContent()) {
      const textContent = this.getTextContent()

      return (
        <TextContent textContent={textContent} />
      )
    }

    return null
  }

  render () {
    const { errorMessage } = this.props

    if (errorMessage) {
      return (
        <span className={this.getClassName()}>
          {this.renderTextContent()}
        </span>
      )
    }

    return null
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    uri: PropTypes.string.isRequired
  })
}
