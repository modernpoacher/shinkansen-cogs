/**
 * CheckboxTitle component
 */
import classnames from 'classnames'
import Title from 'shinkansen-cogs/components/title'

export default class CheckboxTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}

CheckboxTitle.propTypes = {
  ...Title.propTypes
}

CheckboxTitle.defaultProps = {
  ...Title.defaultProps
}
