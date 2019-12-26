import { Component, Vue } from 'vue-property-decorator'
import { FormComponent } from './common/Form/Form.vue'
import WithRender from './HelloWorld.html'
import './HelloWorld.css'

@WithRender
@Component({
  components: {
    FormComponent
  }
})
export default class HelloWorld extends Vue {
  public msg: string = 'I am using TypeScript classes with Vue!';
  public isRegisterForm: boolean = true;
}
