/**
 * Textarea component
 */
import React from 'react'
import Input from '~/src/input'

export default class Textarea extends Input {
  getInputClassName () {
    return 'textarea'
  }

  getInput () {
    const {
      id,
      name,
      value,
      required
    } = this.props

    return (
      <textarea
        id={id || name}
        name={name}
        defaultValue={value}
        required={required}
        className={this.getInputClassName()}
        placeholder={this.getPlaceholder()}
        ref={this.setRef}
      />
    )
  }
}
