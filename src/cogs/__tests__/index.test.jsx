import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import Title from 'shinkansen-cogs/components/title'
import Field from 'shinkansen-cogs/components/field'

import Cog, { ValueCog, CheckCog } from 'shinkansen-cogs/cogs'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/title')
jest.mock('shinkansen-cogs/components/field')

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'string'
  },
  uri: '#/'
}

describe('shinkansen-cogs/cogs', () => {
  describe('<Cog />', () => {
    describe('With required props', () => {
      const component = (
        <Cog name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            return expect(Cog.prototype.getClassName)
              .toBeDefined()
          })
        })

        describe('`getId`', () => {
          it('is defined', () => {
            return expect(Cog.prototype.getId)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(Cog.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })

        describe('`renderTitle`', () => {
          it('is defined', () => {
            return expect(Cog.prototype.renderTitle)
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
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      beforeEach(() => {
        classnames.mockReset()
      })

      describe('With required props', () => {
        let returnValue

        beforeEach(() => {
          classnames.mockReturnValue('MOCK CLASSNAME')

          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          returnValue = instance.getClassName()
        })

        it('invokes `classnames`', () => {
          return expect(classnames)
            .toBeCalledWith('cog', { required: false, disabled: false, readOnly: false, error: false })
        })

        it('returns the classname', () => {
          return expect(returnValue)
            .toBe('MOCK CLASSNAME')
        })
      })

      describe('With additional props', () => {
        describe('`props` has `required`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' required />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toBeCalledWith('cog', { required: true, disabled: false, readOnly: false, error: false })
          })

          it('returns the classname', () => {
            return expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `disabled`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' disabled />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toBeCalledWith('cog', { required: false, disabled: true, readOnly: false, error: false })
          })

          it('returns the classname', () => {
            return expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `readOnly`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' readOnly />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toBeCalledWith('cog', { required: false, disabled: false, readOnly: true, error: false })
          })

          it('returns the classname', () => {
            return expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `errorMessage`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' errorMessage={MOCK_ERROR_MESSAGE} />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toBeCalledWith('cog', { required: false, disabled: false, readOnly: false, error: true })
          })

          it('returns the classname', () => {
            return expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })
      })
    })

    describe('`getId()`', () => {
      describe('With required props', () => {
        describe('`props` has `name`', () => {
          it('returns the id', () => {
            const component = (
              <Cog name='MOCK NAME' />
            )

            return expect(renderer.create(component).getInstance().getId())
              .toBe('MOCK NAME')
          })
        })
      })

      describe('With additional props', () => {
        describe('`props` has `id`', () => {
          it('returns the id', () => {
            const component = (
              <Cog name='MOCK NAME' id='MOCK ID' />
            )

            return expect(renderer.create(component).getInstance().getId())
              .toBe('MOCK ID')
          })
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            title: 'MOCK CHANGE TITLE',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
            onChange: jest.fn()
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
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onChange: MOCK_ON_CHANGE
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

    describe('`renderField()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
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

  describe('<ValueCog />', () => {
    describe('With required props', () => {
      const component = (
        <ValueCog name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(ValueCog.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })
      })

      describe('Instance', () => {
        describe('Extends `<Cog />`', () => {
          it('is defined', () => {
            return expect(renderer.create(component).getInstance())
              .toBeInstanceOf(Cog)
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <ValueCog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            value='MOCK VALUE'
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <ValueCog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          value='MOCK VALUE'
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK CHANGE VALUE',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK VALUE',
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(false)
        })
      })
    })
  })

  describe('<CheckCog />', () => {
    describe('With required props', () => {
      const component = (
        <CheckCog name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(CheckCog.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })
      })

      describe('Instance', () => {
        describe('Extends `<Cog />`', () => {
          it('is defined', () => {
            return expect(renderer.create(component).getInstance())
              .toBeInstanceOf(Cog)
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <CheckCog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            checked
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
            onClick={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <CheckCog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          checked
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            checked: false
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props,
            checked: true
          }))
            .toBe(false)
        })
      })
    })
  })
})
