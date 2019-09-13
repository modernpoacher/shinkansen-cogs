import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Label from 'shinkansen-cogs/components/label'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-cogs/components/common/text-content', () => () => 'MOCK TEXT CONTENT')
jest.mock('shinkansen-cogs/components/common/required', () => () => 'MOCK REQUIRED')
jest.mock('shinkansen-cogs/components/common/disabled', () => () => 'MOCK DISABLED')
jest.mock('shinkansen-cogs/components/common/readonly', () => () => 'MOCK READONLY')

describe('shinkansen-cogs/components/label', () => {
  describe('<Label />', () => {
    describe('With required props', () => {
      const component = (
        <Label id='MOCK ID' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`textContent`', () => {
        it('is defined', () => {
          expect(Label.prototype.textContent)
            .toBeDefined()
        })
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Label.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          expect(Label.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })

      describe('`renderTextContent`', () => {
        it('is defined', () => {
          expect(Label.prototype.renderTextContent)
            .toBeDefined()
        })
      })

      describe('`renderIsRequired`', () => {
        it('is defined', () => {
          expect(Label.prototype.renderIsRequired)
            .toBeDefined()
        })
      })

      describe('`renderIsDisabled`', () => {
        it('is defined', () => {
          expect(Label.prototype.renderIsDisabled)
            .toBeDefined()
        })
      })

      describe('`renderIsReadOnly`', () => {
        it('is defined', () => {
          expect(Label.prototype.renderIsReadOnly)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Label
            id='MOCK ID'
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

    describe('`textContent()`', () => {
      it('returns the `label` prop', () => {
        const component = (
          <Label id='MOCK ID' label='MOCK LABEL' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        expect(instance.textContent())
          .toBe('MOCK LABEL')
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Label id='MOCK ID' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        expect(instance.getClassName())
          .toBe('label')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Label
          id='MOCK ID'
          label='MOCK LABEL'
          required
          disabled
          readOnly
        />
      )

      let instance

      beforeEach(() => {
        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          expect(instance.shouldComponentUpdate({
            id: 'MOCK CHANGE ID',
            label: 'MOCK CHANGE LABEL',
            required: false,
            disabled: false,
            readOnly: false
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            id: 'MOCK ID',
            label: 'MOCK LABEL',
            required: true,
            disabled: true,
            readOnly: true
          }))
            .toBe(false)
        })
      })
    })
  })
})
