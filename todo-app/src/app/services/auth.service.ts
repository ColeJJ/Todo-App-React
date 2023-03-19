import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthResponse,
  createClient,
  SignInWithPasswordCredentials,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import {BehaviorSubject} from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private supabase: SupabaseClient;
	private currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	constructor(private router: Router) {
		this.supabase = createClient(
			environment.supabaseURL,
			environment.supabaseKey
		);

    this.loadLoggedUser();

    this.supabase.auth.onAuthStateChange((event, sess) => {
      if(event === 'SIGNED_IN') {
        this.currentUser.next(sess?.user);
      } else {
        this.currentUser.next(false)
      }
    })

	}

  private loadLoggedUser() {
    const user = this.supabase.auth.getUser();

    if(user) {
      this.currentUser.next(user);
    } else {
      this.currentUser.next(false);
    }
  }

	async signIn(credentials: SignInWithPasswordCredentials): Promise<AuthResponse> {
		const authResponse = await this.supabase.auth.signInWithPassword(credentials);
		if (!authResponse.error) {
			this.currentUser.next(authResponse?.data.user);
		}
		return authResponse;
	}

	async signOut() {
		const { error } = await this.supabase.auth.signOut();
		if (!error) {
			this.router.navigateByUrl('/', { replaceUrl: true });
		}
	}

  async signUp(credentials: SignInWithPasswordCredentials) {
    const {error} = await this.supabase.auth.signUp(credentials);
    if (!error) {
      this.router.navigateByUrl('/home', { replaceUrl: true })
    }
  }

}
