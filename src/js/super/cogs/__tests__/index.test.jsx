import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import Title from '#cogs/super/components/title'
import Field from '#cogs/super/components/field'

import Cog from '#cogs/super/cogs'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/super/components/title')
jest.mock('#cogs/super/components/field')

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'string'
  },
  uri: '#/'
}

describe('#cogs/super/cogs', () => {
  const MOCK_FIELD_REF = { current: null }
  const MOCK_ON_CHANGE = jest.fn()

  describe('<Cog />', () => {
    describe('With required props', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          fieldRef={MOCK_FIELD_REF}
        />
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
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
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
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
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

    describe('`getClassName()`', () => {
      beforeEach(() => {
        classnames.mockReset()
      })

      describe('With required props', () => {
        let returnValue

        beforeEach(() => {
          classnames.mockReturnValue('MOCK CLASSNAME')

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

        it('invokes `classnames`', () => {
          return expect(classnames)
            .toHaveBeenCalledWith('cog', { required: false, disabled: false, readOnly: false, error: false })
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
              <Cog
                name='MOCK NAME'
                required
                fieldRef={MOCK_FIELD_REF}
              />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toHaveBeenCalledWith('cog', { required: true, disabled: false, readOnly: false, error: false })
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
              <Cog
                name='MOCK NAME'
                disabled
                fieldRef={MOCK_FIELD_REF}
              />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toHaveBeenCalledWith('cog', { required: false, disabled: true, readOnly: false, error: false })
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
              <Cog
                name='MOCK NAME'
                readOnly
                fieldRef={MOCK_FIELD_REF}
              />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toHaveBeenCalledWith('cog', { required: false, disabled: false, readOnly: true, error: false })
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
              <Cog
                name='MOCK NAME'
                errorMessage={MOCK_ERROR_MESSAGE}
                fieldRef={MOCK_FIELD_REF}
              />
            )

            const instance = (
              renderer.create(component)
                .getInstance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            return expect(classnames)
              .toHaveBeenCalledWith('cog', { required: false, disabled: false, readOnly: false, error: true })
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
              <Cog
                name='MOCK NAME'
                fieldRef={MOCK_FIELD_REF}
              />
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
              <Cog
                name='MOCK NAME'
                id='MOCK ID'
                fieldRef={MOCK_FIELD_REF}
              />
            )

            return expect(renderer.create(component).getInstance().getId())
              .toBe('MOCK ID')
          })
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
          fieldRef={MOCK_FIELD_REF}
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
          .toHaveBeenCalled()
      })

      it('renders `<Title />`', () => {
        return expect(Title)
          .toHaveBeenCalledWith({
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
          fieldRef={MOCK_FIELD_REF}
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

        instance.renderField()
      })

      it('invokes `getId`', () => {
        return expect(getIdSpy)
          .toHaveBeenCalled()
      })

      it('renders `<Field />`', () => {
        return expect(Field)
          .toHaveBeenCalledWith({
            name: 'MOCK NAME',
            id: 'MOCK ID',
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
