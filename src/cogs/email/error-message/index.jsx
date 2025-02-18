/**
 * EmailErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#cogs/components/error-message'

export default class EmailErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }
}
