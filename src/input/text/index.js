/**
 * Text component
 */
import React from 'react'
import Input from '~/src/input'

export default class Text extends Input {
  getInputClassName () {
    return 'text'
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
        type='text'
        ref={this.setRef}
      />
    )
  }
}
