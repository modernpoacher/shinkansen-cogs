/**
 * SelectTitle component
 */
import classnames from 'classnames'
import Title from 'shinkansen-cogs/components/title'

export default class SelectTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }
}

SelectTitle.propTypes = {
  ...Title.propTypes
}

SelectTitle.defaultProps = {
  ...Title.defaultProps
}
