import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TodosPage } from '../../pages/todos/todos';
// import { Todos2Page } from '../../pages/todos2/todos2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

	navigateToTodo() {
		this.navCtrl.push(TodosPage);
	}

	navigateToTodo2() {
		this.navCtrl.push('Todos2Page');
	}

}
