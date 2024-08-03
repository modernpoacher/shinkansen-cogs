/**
 * CheckboxErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '@modernpoacher/cogs/components/error-message'

export default class CheckboxErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}

CheckboxErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}
