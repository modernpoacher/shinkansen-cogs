/**
 * NumberErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from 'shinkansen-cogs/components/error-message'

export default class NumberErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }
}

NumberErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}

NumberErrorMessage.defaultProps = {
  ...ErrorMessage.defaultProps
}
