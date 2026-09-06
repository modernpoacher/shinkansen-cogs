/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
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

import Title from '#cogs/super/components/title'

describe('#cogs/super/components/title', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title
            id='MOCK ID'
          />
        )

        expect(title)
          .toBeNull()
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Title.prototype, 'getClassName')

          render(
            <Title
              id='MOCK ID'
            />
          )

          expect(getClassNameSpy)
            .not.toHaveBeenCalled()
        })
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title
            id='MOCK ID'
          />
        )

        expect(snapshotOf(title))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title
            id='MOCK ID'
            title='MOCK TITLE'
            required
            disabled
            readOnly
          />
        )

        expect(title)
          .toBeInstanceOf(HTMLLabelElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Title.prototype, 'getClassName')

          render(
            <Title
              id='MOCK ID'
              title='MOCK TITLE'
              required
              disabled
              readOnly
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title
            id='MOCK ID'
            title='MOCK TITLE'
            required
            disabled
            readOnly
          />
        )

        expect(snapshotOf(title))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Component<TitleProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <Title
            id='MOCK ID'
            title='MOCK TITLE'
            required
            disabled
            readOnly
          />
        )

        instance = getInstanceFromContainerElement(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `title` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              title: 'MOCK CHANGE TITLE'
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
      it('returns a string', () => {
        const {
          container
        } = render(
          <Title
            id='MOCK ID'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
