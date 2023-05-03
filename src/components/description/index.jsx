/**
 * Description component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from '#components/common/text-content'

export default class Description extends Component {
  hasTextContent () {
    const { description } = this.props

    return !!description
  }

  getTextContent () {
    const { description } = this.props

    return description
  }

  getClassName () {
    return 'description'
  }

  shouldComponentUpdate (props) {
    return (
      (props.description !== this.props.description)
    )
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
    const { description } = this.props

    if (description) {
      return (
        <span className={this.getClassName()}>
          {this.renderTextContent()}
        </span>
      )
    }

    return null
  }
}

Description.propTypes = {
  description: PropTypes.string
}
