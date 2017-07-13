/**
 * Select component
 */
import React from 'react'
import Input from '~/src/input'

export default class Select extends Input {
  getInputClassName () {
    return 'select'
  }

  getInput () {
    const {
      name,
      value
    } = this.props

    return (
      <select
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
