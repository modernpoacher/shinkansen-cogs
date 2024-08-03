/**
 * TextareaTitle component
 */
import classnames from 'classnames'
import Title from '@modernpoacher/cogs/components/title'

export default class TextareaTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}

TextareaTitle.propTypes = {
  ...Title.propTypes
}
