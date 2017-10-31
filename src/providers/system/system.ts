import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemProvider {

	rootUrl: string = 'https://jsonplaceholder.typicode.com';
	todos: string = 'todos';

	constructor(public http: Http) {
		console.log('Hello SystemProvider Provider');
	}

	getTodos() {
		return this.http.get(`${this.rootUrl}/${this.todos}`).map(res => res.json()).take(1);
	}

	getTodoById(id: number) {
		return this.http.get(`${this.rootUrl}/${this.todos}/${id}`).map(res => res.json()).take(1);
	}

}
