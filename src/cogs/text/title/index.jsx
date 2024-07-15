/**
 * TextTitle component
 */
import classnames from 'classnames'
import Title from 'shinkansen-cogs/components/title'

export default class TextTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}

TextTitle.propTypes = {
  ...Title.propTypes
}
