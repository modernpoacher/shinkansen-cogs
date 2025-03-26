/**
 * CheckboxErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#cogs/components/error-message'

export default class CheckboxErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}
