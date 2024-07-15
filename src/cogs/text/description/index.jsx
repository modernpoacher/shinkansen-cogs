/**
 * TextDescription component
 */
import classnames from 'classnames'
import Description from 'shinkansen-cogs/components/description'

export default class TextDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}

TextDescription.propTypes = {
  ...Description.propTypes
}
