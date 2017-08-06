'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Email component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Email = function (_Input) {
  _inherits(Email, _Input);

  function Email() {
    _classCallCheck(this, Email);

    return _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).apply(this, arguments));
  }

  _createClass(Email, [{
    key: 'getLabelClassName',
    value: function getLabelClassName() {
      return _get(Email.prototype.__proto__ || Object.getPrototypeOf(Email.prototype), 'getLabelClassName', this).call(this) + ' email';
    }
  }, {
    key: 'getInputClassName',
    value: function getInputClassName() {
      return _get(Email.prototype.__proto__ || Object.getPrototypeOf(Email.prototype), 'getInputClassName', this).call(this) + ' email';
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          required = _props.required,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          placeholder = _props.placeholder;


      return _react2.default.createElement('input', {
        id: this.getId(),
        name: name,
        defaultValue: value,
        required: required,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: placeholder,
        className: this.getInputClassName(),
        type: 'email',
        ref: this.setRef
      });
    }
  }]);

  return Email;
}(_2.default);

exports.default = Email;