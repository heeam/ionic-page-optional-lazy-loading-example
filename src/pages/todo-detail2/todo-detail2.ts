import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Todo } from '../../models/todos.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the TodoDetail2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'todos2/:id',
	// defaultHistory: ['todos2']
	defaultHistory: ['Todos2Page']
})
@Component({
	selector: 'page-todo-detail2',
	templateUrl: 'todo-detail2.html',
})
export class TodoDetail2Page {

	id: number;
	todo: Observable<Todo>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodoDetail2Page');
		this.id = this.navParams.get('id');
		// this.todo = this.system.getTodoById(this.id);
		this.system.getTodoById(this.id).subscribe(todo => this.todo = todo);
	}

}
