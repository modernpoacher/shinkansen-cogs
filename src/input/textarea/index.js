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
      name,
      value
    } = this.props

    return (
      <textarea
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={this.getRequired()}
        disabled={this.getDisabled()}
        className={this.getInputClassName()}
        placeholder={this.getPlaceholder()}
        ref={this.setRef}
      />
    )
  }
}
