import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
	selector: 'app-add-todo-modal',
	templateUrl: './add-todo-modal.component.html',
	styleUrls: ['./add-todo-modal.component.scss'],
})
export class AddTodoModalComponent {
	public description: string = '';

	constructor(private modalCtrl: ModalController) {}

	public confirm() {
		return this.modalCtrl.dismiss(this.description, 'confirm');
	}

	public cancel() {
		return this.modalCtrl.dismiss(null, 'cancel');
	}
}
