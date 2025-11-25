import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PageTypeEnum } from '../../enums/page-type-enum';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { 
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { Subscription, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit, OnDestroy {
  @Input() pageType!: PageTypeEnum;
  public form!: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ){

  }

  public ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public sendRequest(){
    if (this.pageType === 'SignIn'){
      this.userService.signIn(this.form.value as User)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this.redirectToDashboard();
        }, err => {
          this.redirectToDashboard();
        });

    } else {
      this.userService.signUp(this.form.value as User)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this.redirectToDashboard();
        }, err => {
          this.redirectToDashboard();
        });

    }
  }

  protected getPageTypeLabel(): string {
    return this.pageType === 'SignIn' ? 'Sign In' : 'Sign Up';
  }

  private redirectToDashboard(): void {
    localStorage.setItem('TestAppLoggedIn', 'true');
    this.router.navigateByUrl('');
  }
}
