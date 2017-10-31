import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Todo } from '../../models/todos.interface';

import { SystemProvider } from '../../providers/system/system';

import { TodoDetailPage } from '../../pages/todo-detail/todo-detail';

/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-todos',
	templateUrl: 'todos.html',
})
export class TodosPage {

	todos: Observable<Array<Todo>>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.getTodos();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodosPage');
	}

	getTodos() {
		this.todos = this.system.getTodos();
	}

	navigateToDetail(id: number) {
		this.navCtrl.push(TodoDetailPage, { id: id });
	}

}
