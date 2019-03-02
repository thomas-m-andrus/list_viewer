import { shallowMount, mount} from '@vue/test-utils'
import AppComponent from './index.vue';


// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('AppComponent', () => {
  const lesserMount = shallowMount(AppComponent)
  console.log(lesserMount.vm.$router)
  it("renders the component", () => {
    const wrapper = shallowMount(AppComponent)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it("redirects to home if title is clicked", () => {
    console.log(lesserMount.html())
    console.log(lesserMount)
    //expect(deepMount.vm.SPECIAL).toBe(0)
    const button = deepMount.find("v-toolbar-title");
    button.trigger('click');
    //expect(deepMount.vm.SPECIAL).toBe(1);
  })
})