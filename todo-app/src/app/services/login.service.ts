import { Injectable } from '@angular/core';
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
export class LoginService {
	private supabase: SupabaseClient;

	constructor() {
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

	async signOut(): Promise<{ error: AuthError | null }> {
		const query = await this.supabase.auth.signOut();
		return query;
	}
}
