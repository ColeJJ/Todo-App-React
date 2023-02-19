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

  getTodos() {
    return this.supabase.from('todos').select('*');
  }
}
