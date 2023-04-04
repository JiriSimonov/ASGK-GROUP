import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'asgk-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  public signInForm!: FormGroup<{
    login: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  public ngOnInit(): void {
    this.signInForm = new FormGroup({
      login: new FormControl<string | null>(''),
      password: new FormControl<string | null>(''),
    });
  }

  public get loginControl(): FormControl<string | null> {
    return this.signInForm.controls.login;
  }

  public get passwordControl(): FormControl<string | null> {
    return this.signInForm.controls.password;
  }

  public onSubmit(): void {}
}
