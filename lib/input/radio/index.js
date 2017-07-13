'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Radio component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Radio = function (_Input) {
  _inherits(Radio, _Input);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'getInputClassName',
    value: function getInputClassName() {
      return 'radio';
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var _props = this.props,
          id = _props.id,
          label = _props.label;


      return _react2.default.createElement(
        'label',
        { htmlFor: id, className: this.getLabelClassName() },
        label,
        this.getRequired()
      );
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      var _props2 = this.props,
          id = _props2.id,
          name = _props2.name,
          value = _props2.value,
          required = _props2.required,
          checked = _props2.checked;


      return _react2.default.createElement('input', {
        id: id,
        name: name,
        defaultValue: value,
        required: required,
        defaultChecked: checked,
        type: 'radio',
        className: this.getInputClassName(),
        ref: this.setRef
      });
    }
  }]);

  return Radio;
}(_2.default);

exports.default = Radio;


Radio.propTypes = _extends({}, _2.default.propTypes, {
  id: _react2.default.PropTypes.string.isRequired
});