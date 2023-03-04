import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
	AuthResponse,
	createClient,
	SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

const PROFILE = 'profiles';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private supabase: SupabaseClient;
	private currentUser: any;

	constructor(private router: Router) {
		this.supabase = createClient(
			environment.supabaseURL,
			environment.supabaseKey
		);
	}

	async getProfile() {
		return await this.supabase
			.from(PROFILE)
			.select('username, website, avatar_url')
			.eq('id', this.currentUser?.id)
			.single();
	}

	async signInWithEmail(user: any) {
		const authResponse = await this.supabase.auth.signInWithPassword({
			email: user.email,
			password: user.password,
		});

		this.currentUser = authResponse?.data.user;
	}

	async signOut() {
		const { error } = await this.supabase.auth.signOut();
		if (!error) {
			this.router.navigateByUrl('/', { replaceUrl: true });
		}
	}
}
