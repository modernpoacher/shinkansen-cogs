/**
 * CheckboxErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from 'shinkansen-cogs/components/error-message'

export default class CheckboxErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}

CheckboxErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}

CheckboxErrorMessage.defaultProps = {
  ...ErrorMessage.defaultProps
}
