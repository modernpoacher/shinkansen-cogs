import React from 'react'
import renderer from 'react-test-renderer'

import Description from 'shinkansen-cogs/components/description'

describe('shinkansen-cogs/components/description', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      const component = (
        <Description />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
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
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Description />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getClassName())
          .toBe('description')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Description
          description='MOCK DESCRIPTION'
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
            description: 'MOCK CHANGE DESCRIPTION'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            description: 'MOCK DESCRIPTION'
          }))
            .toBe(false)
        })
      })
    })
  })
})
