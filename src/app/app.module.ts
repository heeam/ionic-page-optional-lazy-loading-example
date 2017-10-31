import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TodosPage } from '../pages/todos/todos';
// import { Todos2Page } from '../pages/todos2/todos2';

import { TodoDetailPage } from '../pages/todo-detail/todo-detail';
// import { TodoDetail2Page } from '../pages/todo-detail2/todo-detail2';

import { SystemProvider } from '../providers/system/system';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		TodosPage,
		TodoDetailPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		TodosPage,
		TodoDetailPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		SystemProvider
	]
})
export class AppModule {}
