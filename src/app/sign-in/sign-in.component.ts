import { Component } from '@angular/core';
import { LoginFormComponent } from '../core/components/login-form/login-form.component';
import { PageTypeEnum } from '../core/enums/page-type-enum';

@Component({
    selector: 'app-sign-in',
    imports: [LoginFormComponent],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  loginFormPageType: PageTypeEnum = PageTypeEnum.SignIn;
}
