import React from 'react'
import renderer from 'react-test-renderer'

import Description from '@modernpoacher/cogs/components/title'

jest.mock('@modernpoacher/cogs/components/common/text-content', () => () => 'MOCK TEXT CONTENT')
jest.mock('@modernpoacher/cogs/components/common/required', () => () => 'MOCK REQUIRED')
jest.mock('@modernpoacher/cogs/components/common/disabled', () => () => 'MOCK DISABLED')
jest.mock('@modernpoacher/cogs/components/common/readonly', () => () => 'MOCK READONLY')

describe('@modernpoacher/cogs/components/title', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      const component = (
        <Description id='MOCK ID' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`hasTextContent`', () => {
        it('is defined', () => {
          return expect(Description.prototype.hasTextContent)
            .toBeDefined()
        })
      })

      describe('`getTextContent`', () => {
        it('is defined', () => {
          return expect(Description.prototype.getTextContent)
            .toBeDefined()
        })
      })

      describe('`isRequired`', () => {
        it('is defined', () => {
          return expect(Description.prototype.isRequired)
            .toBeDefined()
        })
      })

      describe('`isDisabled`', () => {
        it('is defined', () => {
          return expect(Description.prototype.isDisabled)
            .toBeDefined()
        })
      })

      describe('`isReadOnly`', () => {
        it('is defined', () => {
          return expect(Description.prototype.isReadOnly)
            .toBeDefined()
        })
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Description.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          return expect(Description.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })

      describe('`renderTextContent`', () => {
        it('is defined', () => {
          return expect(Description.prototype.renderTextContent)
            .toBeDefined()
        })
      })

      describe('`renderIsRequired`', () => {
        it('is defined', () => {
          return expect(Description.prototype.renderIsRequired)
            .toBeDefined()
        })
      })

      describe('`renderIsDisabled`', () => {
        it('is defined', () => {
          return expect(Description.prototype.renderIsDisabled)
            .toBeDefined()
        })
      })

      describe('`renderIsReadOnly`', () => {
        it('is defined', () => {
          return expect(Description.prototype.renderIsReadOnly)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Description
            id='MOCK ID'
            description='MOCK DESCRIPTION'
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`hasTextContent()`', () => {
      describe('With a `title` prop', () => {
        it('returns true', () => {
          const component = (
            <Description id='MOCK ID' title='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          return expect(instance.hasTextContent())
            .toBe(true)
        })
      })

      describe('Without a `title` prop', () => {
        it('returns false', () => {
          const component = (
            <Description id='MOCK ID' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          return expect(instance.hasTextContent())
            .toBe(false)
        })
      })
    })

    describe('`getTextContent()`', () => {
      it('returns the `title` prop', () => {
        const component = (
          <Description id='MOCK ID' title='MOCK TITLE' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getTextContent())
          .toBe('MOCK TITLE')
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Description id='MOCK ID' />
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
        <Description
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
  })
})
