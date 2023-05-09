import PropTypes from 'prop-types'
import { ValueState } from '#stories/state'

export default class NumberState extends ValueState { }

NumberState.propTypes = {
  ...ValueState.propTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
