import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getInstanceFrom from 'react-component-instance/container'

import {
  ValueCog
} from '#cogs/cogs'

import Cog from '#cogs/cogs/select'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

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

      /**
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        expect(renderer.create((
          <Cog
            name='MOCK NAME'
          />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
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
                description='MOCK DESCRIPTION'
                errorMessage={MOCK_ERROR_MESSAGE}
                value={['MOCK VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple
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
                  description='MOCK DESCRIPTION'
                  errorMessage={MOCK_ERROR_MESSAGE}
                  value={['MOCK VALUE']}
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create(
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
                multiple
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            ).toJSON())
              .toMatchSnapshot()
          })
        })

        describe('Default value is an array', () => {
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
                description='MOCK DESCRIPTION'
                errorMessage={MOCK_ERROR_MESSAGE}
                defaultValue={['MOCK DEFAULT VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple
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
                  description='MOCK DESCRIPTION'
                  errorMessage={MOCK_ERROR_MESSAGE}
                  defaultValue={['MOCK DEFAULT VALUE']}
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create(
              <Cog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage={MOCK_ERROR_MESSAGE}
                defaultValue={['MOCK DEFAULT VALUE']}
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            ).toJSON())
              .toMatchSnapshot()
          })
        })
      })

      describe('Multiple is not true', () => {
        describe('Value is a string', () => {
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
                description='MOCK DESCRIPTION'
                errorMessage={MOCK_ERROR_MESSAGE}
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                required
                disabled
                readOnly
                multiple={false}
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
                  description='MOCK DESCRIPTION'
                  errorMessage={MOCK_ERROR_MESSAGE}
                  value='MOCK VALUE'
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple={false}
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create(
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
                multiple={false}
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            ).toJSON())
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
                multiple={false}
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
                  description='MOCK DESCRIPTION'
                  errorMessage={MOCK_ERROR_MESSAGE}
                  defaultValue='MOCK DEFAULT VALUE'
                  tabIndex={1}
                  accessKey='MOCK ACCESS KEY'
                  required
                  disabled
                  readOnly
                  multiple={false}
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create(
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
                multiple={false}
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            ).toJSON())
              .toMatchSnapshot()
          })
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {string[]}
       */
      const MOCK_VALUE = []

      /**
       *  @type {undefined | Cog<CheckProps & CheckboxProps>}
       */
      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(ValueCog.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        const {
          container
        } = render(
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
            multiple={false}
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}>
            MOCK CHILDREN
          </Cog>
        )

        instance = getInstanceFrom(container)
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
            multiple: false,
            children: 'MOCK CHILDREN',
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(ValueCog.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Cog
            name='MOCK NAME'
          />
        )

        const instance = getInstanceFrom(container)

        /**
         *  Ensure it is reset after render
         */
        classnames.mockClear()

        /**
         *  Ensure it is reset after render
         */
        getClassNameSpy.mockClear()

        instance.getClassName()

        expect(classnames)
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'select')
      })
    })

    describe('`handleChange()`', () => {
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Cog
                name='MOCK NAME'
                value={['MOCK VALUE']}
                multiple
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange('MOCK NAME', ['MOCK CHANGED VALUE'])

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', ['MOCK CHANGED VALUE'])
          })
        })

        describe('Default value is an array', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Cog
                name='MOCK NAME'
                defaultValue={['MOCK DEFAULT VALUE']}
                multiple
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange('MOCK NAME', ['MOCK CHANGED DEFAULT VALUE'])

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', ['MOCK CHANGED DEFAULT VALUE'])
          })
        })
      })

      describe('Multiple is not true', () => {
        describe('Value is a string', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Cog
                name='MOCK NAME'
                value='MOCK VALUE'
                multiple={false}
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange('MOCK NAME', 'MOCK CHANGED VALUE')

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', 'MOCK CHANGED VALUE')
          })
        })

        describe('Default value is a string', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Cog
                name='MOCK NAME'
                defaultValue='MOCK DEFAULT VALUE'
                multiple={false}
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange('MOCK NAME', 'MOCK CHANGED DEFAULT VALUE')

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', 'MOCK CHANGED DEFAULT VALUE')
          })
        })
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

        const instance = getInstanceFrom(container)

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

        const instance = getInstanceFrom(container)

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
