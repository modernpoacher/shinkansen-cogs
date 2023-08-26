/**
 * TextDescription component
 */
import classnames from 'classnames'
import Description from '@modernpoacher/cogs/components/description'

export default class TextDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}

TextDescription.propTypes = {
  ...Description.propTypes
}

TextDescription.defaultProps = {
  ...Description.defaultProps
}
