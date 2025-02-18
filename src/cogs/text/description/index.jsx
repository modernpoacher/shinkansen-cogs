/**
 * TextDescription component
 */
import classnames from 'classnames'
import Description from '#cogs/components/description'

export default class TextDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}
