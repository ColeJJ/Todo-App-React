import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
	AuthError,
	AuthResponse,
	createClient,
	SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private supabase: SupabaseClient;

	constructor(private router: Router) {
		this.supabase = createClient(
			environment.supabaseURL,
			environment.supabaseKey
		);
	}

	async signInWithEmail(user: any): Promise<AuthResponse> {
		const query = await this.supabase.auth.signInWithPassword({
			email: user.email,
			password: user.password,
		});

		return query;
	}

	async signOut() {
		const { error } = await this.supabase.auth.signOut();
		if (!error) {
			this.router.navigateByUrl('/', { replaceUrl: true });
		}
	}
}
