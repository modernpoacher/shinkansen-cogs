/**
 * CheckboxDescription component
 */
import classnames from 'classnames'
import Description from '#cogs/components/description'

export default class CheckboxDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}
