import { AddTodoModalComponent } from './../components/modal/add-todo-modal/add-todo-modal.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public todos: Array<any> = [];

	constructor(private modalCtrl: ModalController) {}

	public addTodo() {
		console.log('Todo added');
		this.todos.push({
			name: 'Test',
		});
	}

	async openAddTodoModal() {
		const modal = await this.modalCtrl.create({
			component: AddTodoModalComponent,
			cssClass: 'custom-popover',
		});

		await modal.present();
	}
}
