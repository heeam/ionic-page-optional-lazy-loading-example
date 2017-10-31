import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Todo } from '../../models/todos.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the TodoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-todo-detail',
	templateUrl: 'todo-detail.html',
})
export class TodoDetailPage {
	id: number;
	todo: Observable<Todo>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodoDetailPage');
		this.id = this.navParams.get('id');
		// this.todo = this.system.getTodoById(this.id);
		this.system.getTodoById(this.id).subscribe(todo => this.todo = todo);
	}

}
