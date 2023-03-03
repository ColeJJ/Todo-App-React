import { Injectable } from '@angular/core';
import {
	createClient,
	PostgrestSingleResponse,
	SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

const TODO_TABLE = 'todos';
const ID = 'id';

@Injectable({
	providedIn: 'root',
})
export class SupabaseService {
	private supabase: SupabaseClient;

	constructor() {
		this.supabase = createClient(
			environment.supabaseURL,
			environment.supabaseKey
		);
	}

	async getTodos() {
		const query = await this.supabase.from(TODO_TABLE).select('*');
		return query.data;
	}

	async createTodo(
		description: string
	): Promise<PostgrestSingleResponse<null>> {
		const todo = {
			description: description,
		};
		const query = await this.supabase.from(TODO_TABLE).insert(todo);
		return query;
	}

	async deleteTodo(id: number): Promise<PostgrestSingleResponse<null>> {
		const query = await this.supabase.from(TODO_TABLE).delete().eq(ID, id);
		return query;
	}

	async updateTodo(
		id: number,
		newDescription: string | null
	): Promise<PostgrestSingleResponse<null>> {
		const todo = {
			description: newDescription,
		};
		const query = await this.supabase
			.from(TODO_TABLE)
			.update(todo)
			.eq(ID, id);
		return query;
	}
}
