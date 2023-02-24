import { EditTodoModalComponent } from './../modal/edit-todo-modal/edit-todo-modal.component';
import { ModalController } from '@ionic/angular';
import { SupabaseService } from './../../services/supabase.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
	@Input('id') id!: number;
	@Input('description') description!: string | null;

	@Output() onDelete = new EventEmitter();
	@Output() onUpdate = new EventEmitter();

	constructor(
		private SupabaseService: SupabaseService,
		private modalCtrl: ModalController
	) {}

	ngOnInit() {}

	public deleteTodo() {
		this.SupabaseService.deleteTodo(this.id)
			.then(() => {
				this.onDelete.emit();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public updateTodo() {
		this.SupabaseService.updateTodo(this.id, this.description)
			.then(() => {
				this.onUpdate.emit();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// modals
	public async openEditModal() {
		const modal = await this.modalCtrl.create({
			component: EditTodoModalComponent,
			componentProps: {
				description: this.description,
			},
		});
		modal.present();
		const { data, role } = await modal.onWillDismiss();
		if (role === 'confirm') {
			this.description = data;
			this.updateTodo();
		}
	}
}
