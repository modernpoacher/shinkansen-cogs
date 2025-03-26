/**
 * NumberErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#cogs/components/error-message'

export default class NumberErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }
}
