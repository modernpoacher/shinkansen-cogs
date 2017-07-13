/**
 * Email component
 */
import React from 'react'
import Input from '~/src/input'

export default class Email extends Input {
  getInputClassName () {
    return 'email'
  }

  getInput () {
    const {
      name,
      value
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={this.getRequired()}
        disabled={this.getDisabled()}
        className={this.getInputClassName()}
        placeholder={this.getPlaceholder()}
        type='email'
        ref={this.setRef}
      />
    )
  }
}
