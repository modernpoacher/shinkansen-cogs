import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Title from 'shinkansen-cogs/components/title/textarea'
import Description from 'shinkansen-cogs/components/description/textarea'
import ErrorMessage from 'shinkansen-cogs/components/error-message/textarea'
import Field from 'shinkansen-cogs/components/field/textarea'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Cog from 'shinkansen-cogs/cogs/textarea'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () { }

    getId () { }

    renderTitle () { }

    renderDescription () { }

    renderErrorMessage () { }

    renderField () { }

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
    ValueCog: class ValueCog extends MockCog { },
    default: MockCog
  }
})

jest.mock('shinkansen-cogs/components/title/textarea')
jest.mock('shinkansen-cogs/components/description/textarea')
jest.mock('shinkansen-cogs/components/error-message/textarea')
jest.mock('shinkansen-cogs/components/field/textarea')

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
  type: 'MOCK TYPE',
  params: {},
  uri: 'MOCK URI'
}

describe('shinkansen-cogs/cogs/textarea', () => {
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
    describe('With required props', () => {
      const component = (
        <Cog name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Cog.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`renderTitle`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderTitle)
            .toBeDefined()
        })
      })

      describe('`renderDescription`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderDescription)
            .toBeDefined()
        })
      })

      describe('`renderErrorMessage`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderErrorMessage)
            .toBeDefined()
        })
      })

      describe('`renderField`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderField)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
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
            onChange={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(ValueCog.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Cog name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'textarea')
      })

      it('returns the classname', () => {
        expect(returnValue)
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
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          mount(component)
            .instance()
        )

        getIdSpy = jest.spyOn(Cog.prototype, 'getId').mockReturnValue('MOCK ID')

        instance.renderTitle()
      })

      it('invokes `getId`', () => {
        expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Title />`', () => {
        expect(Title)
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
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
        />
      )

      let instance

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          mount(component)
            .instance()
        )

        instance.renderDescription()
      })

      it('renders `<Description />`', () => {
        expect(Description)
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
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
        />
      )

      let instance

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          mount(component)
            .instance()
        )

        instance.renderErrorMessage()
      })

      it('renders `<ErrorMessage />`', () => {
        expect(ErrorMessage)
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
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          mount(component)
            .instance()
        )

        getIdSpy = jest.spyOn(Cog.prototype, 'getId')

        instance.renderField()
      })

      it('invokes `getId`', () => {
        expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Field />`', () => {
        expect(Field)
          .toBeCalledWith({
            name: 'MOCK NAME',
            id: 'MOCK ID',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onChange: expect.any(Function)
          }, {})
      })
    })
  })
})
