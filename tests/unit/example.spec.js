import { shallowMount } from '@vue/test-utils';
import DevelopersList from '@/components/DevelopersList.vue';

describe('DevelopersList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(DevelopersList, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
