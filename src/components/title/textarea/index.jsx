/**
 * TextareaTitle component
 */
import classnames from 'classnames'
import Title from '#components/title'

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
