/**
 * SelectErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#components/error-message'

export default class SelectErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }
}

SelectErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}

SelectErrorMessage.defaultProps = {
  ...ErrorMessage.defaultProps
}
