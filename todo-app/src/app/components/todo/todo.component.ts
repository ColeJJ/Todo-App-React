import { SupabaseService } from './../../services/supabase.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
	@Input('id') id: number | undefined;
	@Input('description') description: string | undefined;

	constructor(private SupabaseService: SupabaseService) {}

	ngOnInit() {}

	public deleteTodo() {
		console.log('delete this todo: ' + this.id);
	}
}
