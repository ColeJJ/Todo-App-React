import { SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	public email!: string;
	public password!: string;

	constructor(private authSevice: AuthService, private router: Router) {}

	ngOnInit() {}

	public async handleLogin() {
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
		await this.authSevice.signOut();
	}

  public navToSignUp() {
    this.router.navigateByUrl("/signup", {replaceUrl: true}).then(() => {
      console.log("Successfuly navigated.");
    })
  }
}
