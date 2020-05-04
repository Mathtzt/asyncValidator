import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../service/user-service";
import {blackListedNameValidator} from "../Shared/blackListedNameValidator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'asynValidator';
  loginForm: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required, blackListedNameValidator(this.userService)],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.enviado = true;
    if (this.loginForm.valid) {
      alert('Enviado com sucesso!');
      location.reload();
    }
  }
}
