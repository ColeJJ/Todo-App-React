import { Injectable } from '@angular/core';
import { createClient, PostgrestResponse, SupabaseClient } from '@supabase/supabase-js';
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

  createTodo(todo: { description: string }) {
    return this.supabase.from('todos').insert(todo);
  } 

  async getTodos() {
    const query = await this.supabase.from('todos').select('*');  
    return query.data;
  }
}
