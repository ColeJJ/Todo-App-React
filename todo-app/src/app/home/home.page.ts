import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public todos: Array<any> = [];

	constructor() {}

	public addTodo() {
		console.log('Todo added');
		this.todos.push({
			name: 'Test',
		});
	}
}
