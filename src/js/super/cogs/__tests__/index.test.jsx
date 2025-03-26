/**
 *  @typedef {CogsTypes.Cogs.CogProps} CogProps
 */

import React from 'react'
import classnames from 'classnames'

import {
  snapshotOf
} from 'react-component-snapshot'

import {
  getInstanceFromContainerElement
} from 'react-component-instance'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Cog from '#cogs/super/cogs'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

const MOCK_CHANGE_ERROR_MESSAGE = {
  type: 'MOCK CHANGE TYPE',
  params: {},
  uri: 'MOCK CHANGE URI'
}

describe('#cogs/super/cogs', () => {
  describe('<Cog />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <Cog
            name='MOCK NAME'
          />
        )

        expect(cog)
          .toBeInstanceOf(HTMLDivElement)
      })

      describe('Always', () => {
        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let getClassNameSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderTitleSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderDescriptionSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderErrorMessageSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderFieldSpy

        beforeEach(() => {
          getClassNameSpy = jest.spyOn(Cog.prototype, 'getClassName')

          renderTitleSpy = jest.spyOn(Cog.prototype, 'renderTitle')

          renderDescriptionSpy = jest.spyOn(Cog.prototype, 'renderDescription')

          renderErrorMessageSpy = jest.spyOn(Cog.prototype, 'renderErrorMessage')

          renderFieldSpy = jest.spyOn(Cog.prototype, 'renderField')

          render(
            <Cog
              name='MOCK NAME'
            />
          )
        })

        it('invokes `getClassName`', () => {
          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderTitle`', () => {
          expect(renderTitleSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderDescription`', () => {
          expect(renderDescriptionSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderErrorMessage`', () => {
          expect(renderErrorMessageSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderField`', () => {
          expect(renderFieldSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <Cog
            name='MOCK NAME'
          />
        )

        expect(snapshotOf(cog))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            value='MOCK VALUE'
            description='MOCK DESCRIPTION'
            errorMessage='MOCK ERROR MESSAGE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        expect(cog)
          .toBeInstanceOf(HTMLDivElement)
      })

      describe('Always', () => {
        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let getClassNameSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderTitleSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderDescriptionSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderErrorMessageSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderFieldSpy

        beforeEach(() => {
          getClassNameSpy = jest.spyOn(Cog.prototype, 'getClassName')

          renderTitleSpy = jest.spyOn(Cog.prototype, 'renderTitle')

          renderDescriptionSpy = jest.spyOn(Cog.prototype, 'renderDescription')

          renderErrorMessageSpy = jest.spyOn(Cog.prototype, 'renderErrorMessage')

          renderFieldSpy = jest.spyOn(Cog.prototype, 'renderField')

          render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              value='MOCK VALUE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              checked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )
        })

        it('invokes `getClassName`', () => {
          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderTitle`', () => {
          expect(renderTitleSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderDescription`', () => {
          expect(renderDescriptionSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderErrorMessage`', () => {
          expect(renderErrorMessageSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderField`', () => {
          expect(renderFieldSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            value='MOCK VALUE'
            description='MOCK DESCRIPTION'
            errorMessage='MOCK ERROR MESSAGE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        expect(snapshotOf(cog))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Cog<CogProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            value='MOCK VALUE'
            description='MOCK DESCRIPTION'
            errorMessage='MOCK ERROR MESSAGE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        instance = getInstanceFromContainerElement(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `name` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              name: 'MOCK CHANGE NAME'
            }))
              .toBe(true)
          })
        })

        describe('Prop `id` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              id: 'MOCK CHANGE ID'
            }))
              .toBe(true)
          })
        })

        describe('Prop `title` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              title: 'MOCK CHANGE TITLE'
            }))
              .toBe(true)
          })
        })

        describe('Prop `value` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              value: 'MOCK CHANGE VALUE'
            }))
              .toBe(true)
          })
        })

        describe('Prop `description` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              description: 'MOCK CHANGE DESCRIPTION'
            }))
              .toBe(true)
          })
        })

        describe('Prop `errorMessage` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              errorMessage: MOCK_CHANGE_ERROR_MESSAGE
            }))
              .toBe(true)
          })
        })

        describe('Prop `required` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              required: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `disabled` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              disabled: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `readOnly` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              readOnly: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `tabIndex` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              tabIndex: 0
            }))
              .toBe(true)
          })
        })

        describe('Prop `accessKey` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              accessKey: 'MOCK CHANGE ACCESS KEY'
            }))
              .toBe(true)
          })
        })

        describe('Prop `placeholder` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              placeholder: 'MOCK CHANGE PLACEHOLDER'
            }))
              .toBe(true)
          })
        })

        describe('Prop `onChange` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              onChange: jest.fn()
            }))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        const {
          container
        } = render(
          <Cog
            name='MOCK NAME'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Ensure it is reset after render
         */
        classnames.mockClear()

        instance.getClassName()

        expect(classnames)
          .toHaveBeenCalledWith('cog', { required: false, disabled: false, readOnly: false, error: false })
      })
    })

    describe('`renderTitle()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Spy (and mock the return value)
         */
        const getIdSpy = jest.spyOn(instance, 'getId').mockReturnValue('MOCK ID')

        instance.renderTitle()

        expect(getIdSpy)
          .toHaveBeenCalled()
      })
    })

    describe('`renderField()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Spy (and mock the return value)
         */
        const getIdSpy = jest.spyOn(instance, 'getId').mockReturnValue('MOCK ID')

        instance.renderField()

        expect(getIdSpy)
          .toHaveBeenCalled()
      })
    })
  })
})
