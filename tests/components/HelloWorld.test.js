import { mount } from '@vue/test-utils'
import HelloWorld from 'src/components/HelloWorld.vue'
import { describe, expect, it } from 'vitest'

describe('HelloWorld component', () => {
  it('increments the count when the button is clicked', () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: 'Hello, world!',
      },
    })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
