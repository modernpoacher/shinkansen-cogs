import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Super from 'shinkansen-cogs/components/input'
import Input from 'shinkansen-cogs/components/input/checkbox'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/common/text-content', () => () => 'MOCK TEXT CONTENT')
jest.mock('shinkansen-cogs/components/common/required', () => () => 'MOCK REQUIRED')
jest.mock('shinkansen-cogs/components/common/disabled', () => () => 'MOCK DISABLED')
jest.mock('shinkansen-cogs/components/common/readonly', () => () => 'MOCK READONLY')

describe('shinkansen-cogs/components/input/checkbox', () => {
  describe('<Input />', () => {
    describe('With required props', () => {
      const component = (
        <Input name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Input.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Input
            id='MOCK ID'
            name='MOCK NAME'
            label='MOCK LABEL'
            required
            disabled
            readOnly
            onChange={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Input name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'checkbox')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
