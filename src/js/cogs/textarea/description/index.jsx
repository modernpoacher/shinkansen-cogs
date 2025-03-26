/**
 * TextareaDescription component
 */
import classnames from 'classnames'
import Description from '#cogs/components/description'

export default class TextareaDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}
