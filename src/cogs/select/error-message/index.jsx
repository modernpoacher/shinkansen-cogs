/**
 * SelectErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#cogs/components/error-message'

export default class SelectErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }
}
