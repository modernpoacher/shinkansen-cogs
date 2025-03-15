import React from 'react'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getInstanceFrom from 'react-component-instance/container'

import Title from '#cogs/components/title'

describe('#cogs/components/title', () => {
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
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        expect(renderer.create((
          <Title
            id='MOCK ID'
          />
        )).toJSON())
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

      /**
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        expect(renderer.create((
          <Title
            id='MOCK ID'
            title='MOCK TITLE'
            required
            disabled
            readOnly
          />
        )).toJSON())
          .toMatchSnapshot()
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

        const instance = getInstanceFrom(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
