'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Password component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Password = function (_Input) {
  _inherits(Password, _Input);

  function Password() {
    _classCallCheck(this, Password);

    return _possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).apply(this, arguments));
  }

  _createClass(Password, [{
    key: 'getInputClassName',
    value: function getInputClassName() {
      return 'password';
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      var _props = this.props,
          id = _props.id,
          name = _props.name,
          value = _props.value,
          required = _props.required;


      return _react2.default.createElement('input', {
        id: id || name,
        name: name,
        defaultValue: value,
        required: required,
        className: this.getInputClassName(),
        placeholder: this.getPlaceholder(),
        type: 'password',
        ref: this.setRef
      });
    }
  }]);

  return Password;
}(_2.default);

exports.default = Password;