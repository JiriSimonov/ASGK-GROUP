import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserDataModel } from '../../../shared/models/user-data.model';

@Component({
  selector: 'asgk-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  public signInForm!: FormGroup<{
    login: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.signInForm = new FormGroup({
      login: new FormControl<string | null>('', [Validators.required, Validators.email]),
      password: new FormControl<string | null>('', [Validators.required]),
    });
  }

  public get loginControl(): FormControl<string | null> {
    return this.signInForm.controls.login;
  }

  public get passwordControl(): FormControl<string | null> {
    return this.signInForm.controls.password;
  }

  public get getUserData(): UserDataModel {
    return {
      login: this.loginControl.value ?? '',
      password: this.passwordControl.value ?? '',
    };
  }

  public onSubmit(): void {
    this.subs.add(this.authService.login(this.getUserData).subscribe());
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
