/**
 * NumberTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

export default class NumberTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }
}

NumberTitle.propTypes = {
  ...Title.propTypes
}
