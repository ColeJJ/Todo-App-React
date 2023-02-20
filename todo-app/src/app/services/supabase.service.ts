import { Injectable } from '@angular/core';
import { createClient, PostgrestResponse, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js';
import { environment } from "../../environments/environment";

const TODO_TABLE = 'todos';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() { 
    this.supabase = createClient(environment.supabaseURL, environment.supabaseKey);
  }

  async getTodos() {
    const query = await this.supabase.from('todos').select('*');  
    return query.data;
  }
  
  async createTodo(description: string): Promise<PostgrestSingleResponse<null>> {
    const todo = {
      description: description
    };
    const query = await this.supabase.from('todos').insert(todo);
    return query;
  } 
}
