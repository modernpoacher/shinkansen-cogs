/**
 * TextareaDescription component
 */
import classnames from 'classnames'
import Description from '@modernpoacher/cogs/components/description'

export default class TextareaDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}

TextareaDescription.propTypes = {
  ...Description.propTypes
}

TextareaDescription.defaultProps = {
  ...Description.defaultProps
}
