/**
 * PasswordErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from 'shinkansen-cogs/components/error-message'

export default class PasswordErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }
}

PasswordErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}
