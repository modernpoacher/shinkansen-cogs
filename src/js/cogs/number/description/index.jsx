/**
 * NumberDescription component
 */
import classnames from 'classnames'
import Description from '#cogs/components/description'

export default class NumberDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }
}
