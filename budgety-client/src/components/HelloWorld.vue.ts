import { Component, Vue } from 'vue-property-decorator'
import WithRender from './HelloWorld.html'

@WithRender
@Component
export default class HelloWorld extends Vue {
  public msg: string = 'I am using TypeScript classes with Vue!';
}
