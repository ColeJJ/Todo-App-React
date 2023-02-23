import { SupabaseService } from './../../services/supabase.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
	@Input('id') id!: number;
	@Input('description') description: string | undefined;

	@Output() onDelete = new EventEmitter();

	constructor(private SupabaseService: SupabaseService) {}

	ngOnInit() {}

	public deleteTodo() {
		console.log('delete this todo: ' + this.id);
		this.SupabaseService.deleteTodo(this.id)
			.then(() => {
				this.onDelete.emit();
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
