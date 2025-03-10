import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import {
  ValueCog
} from '#cogs/cogs'
import Cog from '#cogs/cogs/password'

import Title from '#cogs/cogs/password/title'
import Description from '#cogs/cogs/password/description'
import ErrorMessage from '#cogs/cogs/password/error-message'
import Field from '#cogs/cogs/password/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () {
      return 'MOCK CLASSNAME'
    }

    getId () {
      return 'MOCK ID'
    }

    renderTitle () {
      return 'MOCK TITLE'
    }

    renderDescription () {
      return 'MOCK DESCRIPTION'
    }

    renderErrorMessage () {
      return 'MOCK ERROR MESSAGE'
    }

    renderField () {
      return 'MOCK FIELD'
    }

    render () {
      const className = this.getClassName()

      return (
        <div className={className}>
          {this.renderTitle()}
          {this.renderDescription()}
          {this.renderErrorMessage()}
          {this.renderField()}
        </div>
      )
    }
  }

  return {
    __esModule: true,
    ValueCog: MockCog
  }
})

jest.mock('#cogs/cogs/password/title')
jest.mock('#cogs/cogs/password/description')
jest.mock('#cogs/cogs/password/error-message')
jest.mock('#cogs/cogs/password/field')

class MockErrorMessage extends mockComponent {
  state = {}

  static getDerivedStateFromProps () {
    return {}
  }

  render () {
    return null
  }
}

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {},
  uri: '#/'
}

describe('#cogs/cogs/password', () => {
  beforeAll(() => {
    /*
     *  class defines `state` for instance
     */
    ErrorMessage.mockImplementation(() => new MockErrorMessage())
    /*
     *  function returns `state`
     */
    ErrorMessage.getDerivedStateFromProps.mockReturnValue({})
  })

  describe('<Cog />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      const component = (
        <Cog
          name='MOCK NAME'
        />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`renderTitle`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderTitle)
            .toBeDefined()
        })
      })

      describe('`renderDescription`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderDescription)
            .toBeDefined()
        })
      })

      describe('`renderErrorMessage`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderErrorMessage)
            .toBeDefined()
        })
      })

      describe('`renderField`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderField)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      describe('Value is a string', () => {
        it('renders', () => {
          const component = (
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage={MOCK_ERROR_MESSAGE}
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('Default value is a string', () => {
        it('renders', () => {
          const component = (
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage={MOCK_ERROR_MESSAGE}
              defaultValue='MOCK DEFAULT VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(ValueCog.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Cog
            name='MOCK NAME'
            fieldRef={MOCK_FIELD_REF}
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('does not invoke `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'password')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`renderTitle()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        getIdSpy = jest.spyOn(Cog.prototype, 'getId').mockReturnValue('MOCK ID')

        instance.renderTitle()
      })

      it('invokes `getId`', () => {
        return expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Title />`', () => {
        return expect(Title)
          .toBeCalledWith({
            id: 'MOCK ID',
            title: 'MOCK TITLE',
            disabled: true,
            required: true,
            readOnly: true
          }, {})
      })
    })

    describe('`renderDescription()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.renderDescription()
      })

      it('renders `<Description />`', () => {
        return expect(Description)
          .toBeCalledWith({
            description: 'MOCK DESCRIPTION'
          }, {})
      })
    })

    describe('`renderErrorMessage()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.renderErrorMessage()
      })

      it('renders `<ErrorMessage />`', () => {
        return expect(ErrorMessage)
          .toBeCalledWith({
            errorMessage: MOCK_ERROR_MESSAGE
          }, {})
      })
    })

    describe('`renderField()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        getIdSpy = jest.spyOn(Cog.prototype, 'getId').mockReturnValue('MOCK ID')

        instance.renderField()
      })

      it('invokes `getId`', () => {
        return expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Field />`', () => {
        return expect(Field)
          .toBeCalledWith({
            name: 'MOCK NAME',
            id: 'MOCK ID',
            value: 'MOCK VALUE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            fieldRef: expect.any(Object),
            onChange: expect.any(Function)
          }, {})
      })
    })
  })
})
