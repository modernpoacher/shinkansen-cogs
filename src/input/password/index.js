/**
 * Password component
 */
import React from 'react'
import Input from '~/src/input'

export default class Password extends Input {
  getInputClassName () {
    return 'password'
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
        type='password'
        ref={this.setRef}
      />
    )
  }
}
