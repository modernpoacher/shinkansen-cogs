/**
 * TextTitle component
 */
import classnames from 'classnames'
import Title from '#components/title'

export default class TextTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}

TextTitle.propTypes = {
  ...Title.propTypes
}

TextTitle.defaultProps = {
  ...Title.defaultProps
}
