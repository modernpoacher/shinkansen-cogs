/**
 * RadioLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class RadioLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }
}

RadioLabel.propTypes = {
  ...Label.propTypes
}

RadioLabel.defaultProps = {
  ...Label.defaultProps,
  label: 'Radio'
}
