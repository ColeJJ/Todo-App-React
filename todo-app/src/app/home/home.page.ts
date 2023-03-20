import { AddTodoModalComponent } from '../components/modal/add-todo-modal/add-todo-modal.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SupabaseService } from '../services/supabase.service';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	public todos: Array<any> = [];

	constructor(
		private modalCtrl: ModalController,
		private supabaseService: SupabaseService,
    private authService: AuthService,
    private router: Router
	) {}

	private loadTodos() {
		this.supabaseService
			.getTodos()
			.then((result) => {
				if (result != null) {
					this.todos = result;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public addTodo(description: string) {
		this.supabaseService
			.createTodo(description)
			.then(() => {
				this.loadTodos();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public reloadPage() {
		this.loadTodos();
		location.reload();
	}

	// modal functions
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

  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigateByUrl('/login', {replaceUrl: true}).then(() => {
        console.log('Successfully navigated!')
      }).catch((error) => {
        console.log(error);
      })
    });
  }

  // angular functions
	ngOnInit(): void {
		this.loadTodos();
	}
}
