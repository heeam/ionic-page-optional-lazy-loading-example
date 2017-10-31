import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Todo } from '../../models/todos.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the Todos2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	// name: 'todos2',
	segment: 'todos2'
})
@Component({
	selector: 'page-todos2',
	templateUrl: 'todos2.html',
})
export class Todos2Page {

	todos: Observable<Array<Todo>>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.getTodos();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Todos2Page');
	}

	getTodos() {
		this.todos = this.system.getTodos();
	}

	navigateToDetail(id: number) {
		this.navCtrl.push('TodoDetail2Page', { id: id });
	}

}
