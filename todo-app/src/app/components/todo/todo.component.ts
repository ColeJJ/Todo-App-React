import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
	@Input('todoDescription') todoDescription: String | undefined;

	constructor() {}

	ngOnInit() {}

	public deleteTodo() {
		console.log('delete this todo: ');
	}
}
