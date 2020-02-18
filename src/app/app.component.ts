import { Component } from '@angular/core';

import { Article } from './components/article/article.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-redit app';
	
	articles: Article[] = new Array<Article>()

	constructor() {
		this.articles = [
			new Article('IT255 - Veb sistemi 1', 'http://www.metropolitan.ac.rs', 3),
			new Article('Fullstack', 'http://fullstack.io', 2),
			new Article('Angular Homepage', 'http://angular.io', 1)
		]
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		this.articles.push(new Article(title.value, link.value, 0));
		title.value = '';
		link.value = '';
		return false;
	}
}
