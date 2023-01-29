import { AddTodoModalComponent } from './../components/modal/add-todo-modal/add-todo-modal.component';
import { Component } from '@angular/core';
import { ItemReorderEventDetail, ModalController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public todos: Array<any> = [];

	constructor(private modalCtrl: ModalController) {}

	public addTodo(name: string) {
		this.todos.push({
			name: name,
		});
	}

	async openAddTodoModal() {
		const modal = await this.modalCtrl.create({
			component: AddTodoModalComponent,
			cssClass: 'custom-popover',
		});

		await modal.present();

		const { data, role } = await modal.onWillDismiss();

		if (role === 'confirm') {
			this.addTodo(data);
		}
	}

	handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
		ev.detail.complete();
	}
}
