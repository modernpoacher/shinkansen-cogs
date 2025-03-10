import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import {
  ValueCog
} from '#cogs/cogs'
import Cog from '#cogs/cogs/select'

import Title from '#cogs/cogs/select/title'
import Description from '#cogs/cogs/select/description'
import ErrorMessage from '#cogs/cogs/select/error-message'
import Field from '#cogs/cogs/select/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () {
      return 'MOCK CLASSNAME'
    }

    getId () {
      return 'MOCK ID'
    }

    shouldComponentUpdate () {
      return true
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

jest.mock('#cogs/cogs/select/title')
jest.mock('#cogs/cogs/select/description')
jest.mock('#cogs/cogs/select/error-message')
jest.mock('#cogs/cogs/select/field')

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

const MOCK_CHANGE_ERROR_MESSAGE = {
  type: 'MOCK CHANGE TYPE',
  params: {},
  uri: 'MOCK CHANGE URI'
}

describe('#cogs/cogs/select', () => {
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
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
          it('renders', () => {
            const component = (
              <Cog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage={MOCK_ERROR_MESSAGE}
                value={['MOCK VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                placeholder='MOCK PLACEHOLDER'
                multiple
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            return expect(renderer.create(component).toJSON())
              .toMatchSnapshot()
          })
        })

        describe('Default value is an array', () => {
          it('renders', () => {
            const component = (
              <Cog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage={MOCK_ERROR_MESSAGE}
                defaultValue={['MOCK VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                placeholder='MOCK PLACEHOLDER'
                multiple
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            return expect(renderer.create(component).toJSON())
              .toMatchSnapshot()
          })
        })
      })

      describe('Multiple is not true', () => {
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
                multiple
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
                defaultValue='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                placeholder='MOCK PLACEHOLDER'
                multiple
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            return expect(renderer.create(component).toJSON())
              .toMatchSnapshot()
          })
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
          .toBeCalledWith('MOCK GETCLASSNAME', 'select')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {string[]}
       */
      const MOCK_VALUE = []

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value={MOCK_VALUE}
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          multiple
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}>
          MOCK CHILDREN
        </Cog>
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(ValueCog.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            title: 'MOCK CHANGE TITLE',
            description: 'MOCK CHANGE DESCRIPTION',
            errorMessage: MOCK_CHANGE_ERROR_MESSAGE,
            value: MOCK_VALUE,
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
            multiple: true,
            children: 'MOCK CHANGE CHILDREN',
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            name: 'MOCK NAME',
            id: 'MOCK ID',
            title: 'MOCK TITLE',
            description: 'MOCK DESCRIPTION',
            errorMessage: MOCK_ERROR_MESSAGE,
            value: MOCK_VALUE,
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            children: 'MOCK CHILDREN',
            multiple: true,
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(false)
        })
      })
    })

    describe('`renderTitle()`', () => {
      /**
       *  @type {string[]}
       */
      const MOCK_VALUE = []

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value={MOCK_VALUE}
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          multiple
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      /**
       *  @type {void | jest.SpyInstance}
       */
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
      /**
       *  @type {string[]}
       */
      const MOCK_VALUE = []

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value={MOCK_VALUE}
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          multiple
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
      /**
       *  @type {string[]}
       */
      const MOCK_VALUE = []

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value={MOCK_VALUE}
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          multiple
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
      /**
       *  @type {string[]}
       */
      const MOCK_VALUE = []

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage={MOCK_ERROR_MESSAGE}
          value={MOCK_VALUE}
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          multiple
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}>
          MOCK CHILDREN
        </Cog>
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
            value: expect.any(Array),
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            multiple: true,
            fieldRef: expect.any(Object),
            onChange: expect.any(Function),
            children: 'MOCK CHILDREN'
          }, {})
      })
    })
  })
})
