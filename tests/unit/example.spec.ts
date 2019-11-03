import { shallowMount } from '@vue/test-utils'
import { Button } from '@/components/atoms'

describe('Button atom', () => {
  it('Renders test passed into via slot', () => {
    const msg = 'button text'
    const wrapped = `<span>${msg}</span>`
    const wrapper = shallowMount(Button, {
      scopedSlots: {
        default: wrapped
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
