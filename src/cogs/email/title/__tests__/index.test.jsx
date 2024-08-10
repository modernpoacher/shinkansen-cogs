import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import Super from '@modernpoacher/cogs/components/title'
import Title from '@modernpoacher/cogs/cogs/email/title'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/cogs/components/title', () => {
  return {
    __esModule: true,
    default: class MockTitle extends mockComponent {
      getClassName () {
        return 'MOCK CLASSNAME'
      }

      render () {
        const { title } = this.props

        if (title) {
          const { id } = this.props

          return (
            <label htmlFor={id} className={this.getClassName()}>
              {title}
            </label>
          )
        }

        return null
      }
    }
  }
})

describe('@modernpoacher/cogs/cogs/email/title', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      const component = (
        <Title id='MOCK ID' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Title
            id='MOCK ID'
            title='MOCK TITLE'
            required
            disabled
            readOnly
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Title id='MOCK ID' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'email')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
