/**
 * RadioDescription component
 */
import classnames from 'classnames'
import Description from '#cogs/components/description'

export default class RadioDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }
}
