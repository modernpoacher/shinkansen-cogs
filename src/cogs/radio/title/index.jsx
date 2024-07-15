/**
 * RadioTitle component
 */
import classnames from 'classnames'
import Title from 'shinkansen-cogs/components/title'

export default class RadioTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }
}

RadioTitle.propTypes = {
  ...Title.propTypes
}
