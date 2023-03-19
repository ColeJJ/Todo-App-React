import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {SignInWithPasswordCredentials} from "@supabase/supabase-js";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email!: string;
  public password!: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public handleSignUp() {
    const credentials: SignInWithPasswordCredentials = {
      email: this.email,
      password: this.password
    }
    this.authService.signUp(credentials).then(() => {
      console.log('User has been created!');
    }).catch((error) => {
      console.log(error);
    });
  }

}
