/**
 * Select component
 *
*/
import React from 'react'
import Input from '~/src/input'

export default class Select extends Input {
  getInputClassName () {
    return 'select'
  }

  getInput () {
    const {
      id,
      name,
      value,
      required
    } = this.props

    return (
      <select
        id={id || name}
        name={name}
        defaultValue={value}
        required={required}
        className={this.getInputClassName()}
        placeholder={this.getPlaceholder()}
        type='text'
        ref={this.setRef}
      />
    )
  }
}
