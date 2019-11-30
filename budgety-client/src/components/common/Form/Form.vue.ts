import { Component, Vue, Prop } from 'vue-property-decorator'
import WithRender from './Form.html'
import './Form.css'
import { LoginFormModel } from './LoginFormModel'
import { RegisterFormModel } from './RegisterFormModel'

@WithRender
@Component
export class FormComponent extends Vue {
  @Prop(Boolean) readonly isRegisterForm: boolean | undefined
  loginFields = new LoginFormModel();
  registerFields = new RegisterFormModel();

  onFieldFocus (event: any) {
    event.srcElement.parentElement.classList.add('floating')
    event.srcElement.parentElement.classList.add('active')
  }

  onFieldBlur (event: any) {
    if (event.srcElement.value === '') {
      event.srcElement.parentElement.classList.remove('floating')
    }
    event.srcElement.parentElement.classList.remove('active')
  }

  onSubmitLogin () {
    console.log(this.loginFields)
  }

  onSubmitRegister () {
    console.log(this.registerFields)
  }
}
