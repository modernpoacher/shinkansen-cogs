/**
 * TextareaErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#components/error-message'

export default class TextareaErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}

TextareaErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}

TextareaErrorMessage.defaultProps = {
  ...ErrorMessage.defaultProps
}
