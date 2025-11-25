import { Component } from '@angular/core';
import { PageTypeEnum } from '../core/enums/page-type-enum';
import { LoginFormComponent } from '../core/components/login-form/login-form.component';

@Component({
    selector: 'app-sign-up',
    imports: [LoginFormComponent],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  loginFormPageType: PageTypeEnum = PageTypeEnum.SignUp;
}
