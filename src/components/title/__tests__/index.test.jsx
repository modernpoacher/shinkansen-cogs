import React from 'react'
import renderer from 'react-test-renderer'

import Title from '@modernpoacher/cogs/components/title'

import Required from '@modernpoacher/cogs/components/common/required'
import Disabled from '@modernpoacher/cogs/components/common/disabled'
import ReadOnly from '@modernpoacher/cogs/components/common/readonly'

jest.mock('@modernpoacher/cogs/components/common/text-content', () => () => 'MOCK TEXT CONTENT')
jest.mock('@modernpoacher/cogs/components/common/required') // , () => () => 'MOCK REQUIRED')
jest.mock('@modernpoacher/cogs/components/common/disabled') // , () => () => 'MOCK DISABLED')
jest.mock('@modernpoacher/cogs/components/common/readonly') // , () => () => 'MOCK READONLY')

describe('@modernpoacher/cogs/components/title', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      const component = (
        <Title id='MOCK ID' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`isRequired`', () => {
        it('is defined', () => {
          return expect(Title.prototype.isRequired)
            .toBeDefined()
        })
      })

      describe('`isDisabled`', () => {
        it('is defined', () => {
          return expect(Title.prototype.isDisabled)
            .toBeDefined()
        })
      })

      describe('`isReadOnly`', () => {
        it('is defined', () => {
          return expect(Title.prototype.isReadOnly)
            .toBeDefined()
        })
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          return expect(Title.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })

      describe('`renderIsRequired`', () => {
        it('is defined', () => {
          return expect(Title.prototype.renderIsRequired)
            .toBeDefined()
        })
      })

      describe('`renderIsDisabled`', () => {
        it('is defined', () => {
          return expect(Title.prototype.renderIsDisabled)
            .toBeDefined()
        })
      })

      describe('`renderIsReadOnly`', () => {
        it('is defined', () => {
          return expect(Title.prototype.renderIsReadOnly)
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
      it('returns the classname', () => {
        const component = (
          <Title id='MOCK ID' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getClassName())
          .toBe('title')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Title
          id='MOCK ID'
          title='MOCK TITLE'
          required
          disabled
          readOnly
        />
      )

      let instance

      beforeEach(() => {
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            id: 'MOCK CHANGE ID',
            title: 'MOCK CHANGE TITLE',
            required: false,
            disabled: false,
            readOnly: false
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            id: 'MOCK ID',
            title: 'MOCK TITLE',
            required: true,
            disabled: true,
            readOnly: true
          }))
            .toBe(false)
        })
      })
    })

    describe('`renderIsRequired()`', () => {
      const component = (
        <Title
          id='MOCK ID'
          title='MOCK TITLE'
          required
          disabled
          readOnly
        />
      )

      let instance

      let isRequiredSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        isRequiredSpy = jest.spyOn(Title.prototype, 'isRequired').mockReturnValue('MOCK IS REQUIRED')

        instance.renderIsRequired()
      })

      it('invokes `isRequired`', () => {
        return expect(isRequiredSpy)
          .toBeCalled()
      })

      xit('renders `<Required />`', () => {
        return expect(Required)
          .toBeCalled()
      })
    })

    describe('`renderIsDisabled()`', () => {
      const component = (
        <Title
          id='MOCK ID'
          title='MOCK TITLE'
          required
          disabled
          readOnly
        />
      )

      let instance

      let isDisabledSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        isDisabledSpy = jest.spyOn(Title.prototype, 'isDisabled').mockReturnValue('MOCK IS DISABLED')

        instance.renderIsDisabled()
      })

      it('invokes `isDisabled`', () => {
        return expect(isDisabledSpy)
          .toBeCalled()
      })

      xit('renders `<Disabled />`', () => {
        return expect(Disabled)
          .toBeCalled()
      })
    })

    describe('`renderIsReadOnly()`', () => {
      const component = (
        <Title
          id='MOCK ID'
          title='MOCK TITLE'
          required
          disabled
          readOnly
        />
      )

      let instance

      let isReadOnlySpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        isReadOnlySpy = jest.spyOn(Title.prototype, 'isReadOnly').mockReturnValue('MOCK IS READONLY')

        instance.renderIsReadOnly()
      })

      it('invokes `isReadOnly`', () => {
        return expect(isReadOnlySpy)
          .toBeCalled()
      })

      xit('renders `<ReadOnly />`', () => {
        return expect(ReadOnly)
          .toBeCalled()
      })
    })
  })
})
