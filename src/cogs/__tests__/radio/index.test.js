import 'jsdom-global/register'

import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Title from 'shinkansen-cogs/components/title/radio'
import Description from 'shinkansen-cogs/components/description/radio'
import ErrorMessage from 'shinkansen-cogs/components/error-message/radio'
import Field from 'shinkansen-cogs/components/field/radio'

import { CheckCog } from 'shinkansen-cogs/cogs'
import Cog from 'shinkansen-cogs/cogs/radio'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () { }

    getId () { }

    shouldComponentUpdate () { }

    renderTitle () { }

    renderDescription () { }

    renderErrorMessage () { }

    renderField () { }

    render () {
      const className = this.getClassName()

      return (
        <div className={className}>
          {this.renderField()}
          {this.renderTitle()}
          {this.renderDescription()}
          {this.renderErrorMessage()}
        </div>
      )
    }
  }

  return {
    __esModule: true,
    CheckCog: class CheckCog extends MockCog { },
    default: MockCog
  }
})

jest.mock('shinkansen-cogs/components/title/radio')
jest.mock('shinkansen-cogs/components/description/radio')
jest.mock('shinkansen-cogs/components/error-message/radio')
jest.mock('shinkansen-cogs/components/field/radio')

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

describe('shinkansen-cogs/cogs/radio', () => {
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
        <Cog name='MOCK NAME' value='MOCK VALUE' />
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
            onClick={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(CheckCog.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Cog name='MOCK NAME' value='MOCK VALUE' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('does not invoke `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'radio')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
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
        />
      )

      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(CheckCog.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            value: 'MOCK CHANGE VALUE',
            title: 'MOCK CHANGE TITLE',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            name: 'MOCK NAME',
            id: 'MOCK ID',
            value: 'MOCK VALUE',
            title: 'MOCK TITLE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER'
          }))
            .toBe(false)
        })
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
          onChange={jest.fn()}
          onClick={jest.fn()}
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
            onChange: expect.any(Function),
            onClick: expect.any(Function)
          }, {})
      })
    })
  })
})
