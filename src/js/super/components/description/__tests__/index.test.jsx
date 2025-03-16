/**
 *  @typedef {CogsTypes.Super.Components.Description.DescriptionProps} DescriptionProps
 */

import React from 'react'
import snapshotOf from 'react-component-snapshot'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Description from '#cogs/super/components/description'

describe('#cogs/super/components/description', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description />
        )

        expect(description)
          .toBeNull()
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description />
        )

        expect(snapshotOf(description))
          .toMatchSnapshot()
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
        expect(renderer.create((
          <Description />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        expect(description)
          .toBeInstanceOf(HTMLSpanElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Description.prototype, 'getClassName')

          render(
            <Description
              description='MOCK DESCRIPTION'
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        expect(snapshotOf(description))
          .toMatchSnapshot()
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
        expect(renderer.create((
          <Description
            description='MOCK DESCRIPTION'
          />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Component<DescriptionProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        instance = getComponentInstanceFrom(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `description` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              description: 'MOCK CHANGE DESCRIPTION'
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
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        const instance = getComponentInstanceFrom(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
