import { EditTodoModalComponent } from './../components/modal/edit-todo-modal/edit-todo-modal.component';
import { AddTodoModalComponent } from './../components/modal/add-todo-modal/add-todo-modal.component';
import { TodoComponent } from './../components/todo/todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [
		HomePage,
		TodoComponent,
		AddTodoModalComponent,
		EditTodoModalComponent,
	],
})
export class HomePageModule {}
