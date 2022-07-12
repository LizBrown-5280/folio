import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import MainNav from './MainNav.vue';

describe('MainNav.vue', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  });

  it('displays a company name', () => {
    const wrapper = shallowMount(MainNav, createConfig());
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch('TranquilityCea, LLC');
  });
});
