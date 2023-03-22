import { SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	public email!: string;
	public password!: string;
  public loginForm!: FormGroup;

	constructor(private authSevice: AuthService, private router: Router, private formBuilder: FormBuilder) {}

	ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      'password': ['',[Validators.required, Validators.minLength(6)]]
    })
  }

	public async handleLogin() {
    if (this.loginForm.valid) {
      const credentials: SignInWithPasswordCredentials = {
        email: this.email,
        password: this.password,
      };
      this.authSevice.signIn(credentials).then((resp) => {
        if (!resp.error) {
          this.router.navigateByUrl('/home', {replaceUrl: true})
          console.log(resp.data.user);
        } else {
          console.log(resp.error.message);
        }
      });
    }
	}

  public navToSignUp() {
    this.router.navigateByUrl("/signup", {replaceUrl: true}).then(() => {
      console.log("Successfuly navigated.");
    })
  }
}
