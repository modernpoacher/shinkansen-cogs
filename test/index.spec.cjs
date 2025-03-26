const {
  expect
} = require('chai')

const {
  CheckboxCog,
  EmailCog,
  NumberCog,
  PasswordCog,
  RadioCog,
  SelectCog,
  TextCog,
  TextareaCog
} = require('#cogs')

describe('#cogs', () => {
  describe('`CheckboxCog`', () => {
    it('is a function', () => {
      expect(CheckboxCog)
        .to.be.a('function')
    })
  })

  describe('`EmailCog`', () => {
    it('is a function', () => {
      expect(EmailCog)
        .to.be.a('function')
    })
  })

  describe('`NumberCog`', () => {
    it('is a function', () => {
      expect(NumberCog)
        .to.be.a('function')
    })
  })

  describe('`PasswordCog`', () => {
    it('is a function', () => {
      expect(PasswordCog)
        .to.be.a('function')
    })
  })

  describe('`RadioCog`', () => {
    it('is a function', () => {
      expect(RadioCog)
        .to.be.a('function')
    })
  })

  describe('`SelectCog`', () => {
    it('is a function', () => {
      expect(SelectCog)
        .to.be.a('function')
    })
  })

  describe('`TextCog`', () => {
    it('is a function', () => {
      expect(TextCog)
        .to.be.a('function')
    })
  })

  describe('`TextareaCog`', () => {
    it('is a function', () => {
      expect(TextareaCog)
        .to.be.a('function')
    })
  })
})
