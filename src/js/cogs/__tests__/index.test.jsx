/**
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 */
import React from 'react'

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

import {
  ValueCog,
  CheckCog
} from '#cogs/cogs'

import Super from '#cogs/super/cogs'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#cogs/cogs', () => {
  describe('<ValueCog />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <ValueCog
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
          getClassNameSpy = jest.spyOn(ValueCog.prototype, 'getClassName')

          renderTitleSpy = jest.spyOn(ValueCog.prototype, 'renderTitle')

          renderDescriptionSpy = jest.spyOn(ValueCog.prototype, 'renderDescription')

          renderErrorMessageSpy = jest.spyOn(ValueCog.prototype, 'renderErrorMessage')

          renderFieldSpy = jest.spyOn(ValueCog.prototype, 'renderField')

          render(
            <ValueCog
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
            firstElementChild: element
          }
        } = render(
          <ValueCog
            name='MOCK NAME'
          />
        )

        expect(snapshotOf(element))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Value is a string', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: cog
            }
          } = render(
            <ValueCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
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
            getClassNameSpy = jest.spyOn(ValueCog.prototype, 'getClassName')

            renderTitleSpy = jest.spyOn(ValueCog.prototype, 'renderTitle')

            renderDescriptionSpy = jest.spyOn(ValueCog.prototype, 'renderDescription')

            renderErrorMessageSpy = jest.spyOn(ValueCog.prototype, 'renderErrorMessage')

            renderFieldSpy = jest.spyOn(ValueCog.prototype, 'renderField')

            render(
              <ValueCog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage='MOCK ERROR MESSAGE'
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
              firstElementChild: element
            }
          } = render(
            <ValueCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
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

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })

      describe('Default value is a string', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: cog
            }
          } = render(
            <ValueCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
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
            getClassNameSpy = jest.spyOn(ValueCog.prototype, 'getClassName')

            renderTitleSpy = jest.spyOn(ValueCog.prototype, 'renderTitle')

            renderDescriptionSpy = jest.spyOn(ValueCog.prototype, 'renderDescription')

            renderErrorMessageSpy = jest.spyOn(ValueCog.prototype, 'renderErrorMessage')

            renderFieldSpy = jest.spyOn(ValueCog.prototype, 'renderField')

            render(
              <ValueCog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage='MOCK ERROR MESSAGE'
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
              firstElementChild: element
            }
          } = render(
            <ValueCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
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

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      describe('Value is a string', () => {
        /**
         *  @type {undefined | Super<ValueProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <ValueCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              value='MOCK VALUE'
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `value` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                value: 'MOCK CHANGED VALUE'
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

      describe('Default value is a string', () => {
        /**
         *  @type {undefined | Super<ValueProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <ValueCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              defaultValue='MOCK DEFAULT VALUE'
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `defaultValue` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                defaultValue: 'MOCK CHANGED DEFAULT VALUE'
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
    })

    describe('`renderTitle()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <ValueCog
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
          <ValueCog
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

  describe('<CheckCog />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <CheckCog
            name='MOCK NAME'
            value='MOCK VALUE'
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
          getClassNameSpy = jest.spyOn(CheckCog.prototype, 'getClassName')

          renderTitleSpy = jest.spyOn(CheckCog.prototype, 'renderTitle')

          renderDescriptionSpy = jest.spyOn(CheckCog.prototype, 'renderDescription')

          renderErrorMessageSpy = jest.spyOn(CheckCog.prototype, 'renderErrorMessage')

          renderFieldSpy = jest.spyOn(CheckCog.prototype, 'renderField')

          render(
            <CheckCog
              name='MOCK NAME'
              value='MOCK VALUE'
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
            firstElementChild: element
          }
        } = render(
          <CheckCog
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        expect(snapshotOf(element))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Checked is a boolean', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: cog
            }
          } = render(
            <CheckCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
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
            getClassNameSpy = jest.spyOn(CheckCog.prototype, 'getClassName')

            renderTitleSpy = jest.spyOn(CheckCog.prototype, 'renderTitle')

            renderDescriptionSpy = jest.spyOn(CheckCog.prototype, 'renderDescription')

            renderErrorMessageSpy = jest.spyOn(CheckCog.prototype, 'renderErrorMessage')

            renderFieldSpy = jest.spyOn(CheckCog.prototype, 'renderField')

            render(
              <CheckCog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage='MOCK ERROR MESSAGE'
                value='MOCK VALUE'
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
              firstElementChild: element
            }
          } = render(
            <CheckCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
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

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })

      describe('Default checked is a boolean', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: cog
            }
          } = render(
            <CheckCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              defaultChecked
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
            getClassNameSpy = jest.spyOn(CheckCog.prototype, 'getClassName')

            renderTitleSpy = jest.spyOn(CheckCog.prototype, 'renderTitle')

            renderDescriptionSpy = jest.spyOn(CheckCog.prototype, 'renderDescription')

            renderErrorMessageSpy = jest.spyOn(CheckCog.prototype, 'renderErrorMessage')

            renderFieldSpy = jest.spyOn(CheckCog.prototype, 'renderField')

            render(
              <CheckCog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage='MOCK ERROR MESSAGE'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                defaultChecked
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
              firstElementChild: element
            }
          } = render(
            <CheckCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              defaultChecked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      describe('Checked is a boolean', () => {
        /**
         *  @type {undefined | Super<CheckProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <CheckCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              checked
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `checked` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                checked: false
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

      describe('Default checked is a boolean', () => {
        /**
         *  @type {undefined | Super<CheckProps>}
         */
        let instance

        beforeEach(() => {
          /**
           *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
           */
          jest.spyOn(Super.prototype, 'shouldComponentUpdate').mockReturnValue(false)

          const {
            container
          } = render(
            <CheckCog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              defaultChecked
            />
          )

          instance = getInstanceFromContainerElement(container)
        })

        describe('`props` have changed', () => {
          describe('Prop `defaultChecked` has changed', () => {
            it('returns true', () => {
              expect(instance.shouldComponentUpdate({
                ...instance.props,
                defaultChecked: false
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
    })

    describe('`renderTitle()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <CheckCog
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
          <CheckCog
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
