import { Component, OnInit, ViewChild } from '@angular/core';
import {
	IonButton,
	IonModal,
	NavParams,
	ModalController,
} from '@ionic/angular';

@Component({
	selector: 'app-edit-todo-modal',
	templateUrl: './edit-todo-modal.component.html',
	styleUrls: ['./edit-todo-modal.component.scss'],
})
export class EditTodoModalComponent implements OnInit {
	public description!: string;

	constructor(
		private navParams: NavParams,
		private modalCtrl: ModalController
	) {}

	ngOnInit() {
		this.description = this.navParams.get('description');
	}

	public save() {
		// todo: problem hier ist, dass der return data null ist
		return this.modalCtrl.dismiss(this.description, 'confirm');
	}

	public close() {
		return this.modalCtrl.dismiss(null, 'cancel');
	}
}
