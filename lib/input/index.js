'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input component
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
      if (ref) {
        _this.input = ref;
      } else {
        delete _this.input;
      }
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
    key: 'getLabelClassName',
    value: function getLabelClassName() {
      var _props = this.props,
          required = _props.required,
          disabled = _props.disabled,
          readOnly = _props.readOnly;


      return 'label ' + (0, _classnames2.default)({ required: required, disabled: disabled, readOnly: readOnly });
    }
  }, {
    key: 'getInputClassName',
    value: function getInputClassName() {
      var _props2 = this.props,
          required = _props2.required,
          disabled = _props2.disabled,
          readOnly = _props2.readOnly;


      return 'input ' + (0, _classnames2.default)({ required: required, disabled: disabled, readOnly: readOnly });
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      return 'cog';
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _getRef = this.getRef(),
          value = _getRef.value;

      return value;
    }
  }, {
    key: 'getId',
    value: function getId() {
      var _props3 = this.props,
          id = _props3.id,
          name = _props3.name;


      return id || name;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(props) {
      return props.id !== this.props.id || props.label !== this.props.label || props.value !== this.props.value || props.required !== this.props.required || props.disabled !== this.props.disabled || props.readOnly !== this.props.readOnly || props.placeholder !== this.props.placeholder;
    }
  }, {
    key: 'renderLabelTextContent',
    value: function renderLabelTextContent() {
      var label = this.props.label;


      if (label) {
        return _react2.default.createElement(
          'span',
          { className: 'text-content' },
          label
        );
      }
    }
  }, {
    key: 'renderLabelRequireText',
    value: function renderLabelRequireText() {
      var required = this.props.required;


      if (required) {
        return _react2.default.createElement(
          'span',
          { className: 'require-text' },
          String.fromCharCode(42)
        );
      }
    }
  }, {
    key: 'renderError',
    value: function renderError() {
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
    key: 'renderLabel',
    value: function renderLabel() {
      return _react2.default.createElement(
        'label',
        { htmlFor: this.getId(), className: this.getLabelClassName() },
        this.renderLabelTextContent(),
        this.renderLabelRequireText()
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props4 = this.props,
          name = _props4.name,
          value = _props4.value,
          required = _props4.required,
          disabled = _props4.disabled,
          readOnly = _props4.readOnly,
          placeholder = _props4.placeholder;


      return _react2.default.createElement('input', {
        id: this.getId(),
        name: name,
        defaultValue: value,
        required: required,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: placeholder,
        className: this.getInputClassName(),
        type: 'text',
        ref: this.setRef
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.getClassName(), onChange: this.handleChange },
        this.renderLabel(),
        this.renderInput(),
        this.renderError()
      );
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;


Input.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  validator: _propTypes2.default.func
};

Input.defaultProps = {
  required: false,
  disabled: false,
  readOnly: false,
  validator: function validator() {
    return null;
  }
};