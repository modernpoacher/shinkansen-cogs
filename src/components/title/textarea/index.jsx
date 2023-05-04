/**
 * TextareaTitle component
 */
import classnames from 'classnames'
import Title from 'shinkansen-cogs/components/title'

export default class TextareaTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}

TextareaTitle.propTypes = {
  ...Title.propTypes
}

TextareaTitle.defaultProps = {
  ...Title.defaultProps
}
