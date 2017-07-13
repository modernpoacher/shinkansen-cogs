'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classNames = require('src/classNames');

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.getRef = function () {
      return _this.input;
    }, _this.setRef = function (ref) {
      _this.input = ref;
    }, _this.validate = function () {
      var validator = _this.props.validator;

      var value = _this.getValue();
      var error = validator(value);

      _this.setState({ error: error });
      return error === null;
    }, _this.handleChange = function () {
      return _this.validate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'getError',
    value: function getError() {
      var error = this.state.error;


      if (error) {
        return _react2.default.createElement(
          'p',
          null,
          error
        );
      }
    }
  }, {
    key: 'getLabelClassName',
    value: function getLabelClassName() {
      return 'label';
    }
  }, {
    key: 'getInputClassName',
    value: function getInputClassName() {
      return 'input';
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      return 'shinkansen-cogs';
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input.value;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var _props = this.props,
          id = _props.id,
          name = _props.name,
          label = _props.label,
          required = _props.required;


      return _react2.default.createElement(
        'label',
        { htmlFor: id || name, className: this.getLabelClassName() },
        _react2.default.createElement(
          'span',
          null,
          label
        ),
        required ? _react2.default.createElement(
          'span',
          { className: 'required' },
          '\xA0*'
        ) : false
      );
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      var _props2 = this.props,
          id = _props2.id,
          name = _props2.name,
          value = _props2.value,
          required = _props2.required;


      return _react2.default.createElement('input', {
        id: id || name,
        name: name,
        defaultValue: value,
        required: required,
        className: this.getInputClassName(),
        type: 'text',
        placeholder: this.getPlaceholder(),
        ref: this.setRef
      });
    }
  }, {
    key: 'getPlaceholder',
    value: function getPlaceholder() {
      var placeholder = this.props.placeholder;


      if (placeholder) {
        return placeholder;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(props) {
      return props.id !== this.props.id || props.label !== this.props.label || props.value !== this.props.value || props.required !== this.props.required || props.placeholder !== this.props.placeholder || props.description !== this.props.description;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.getClassName(), onChange: this.handleChange },
        this.getLabel(),
        this.getInput()
      );
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;


Input.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  label: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  required: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  description: _react2.default.PropTypes.string,
  validator: _react2.default.PropTypes.func
};

Input.defaultProps = {
  label: String.fromCharCode(32),
  value: '',
  required: false,
  placeholder: '',
  description: '',
  validator: function validator() {
    return null;
  }
};