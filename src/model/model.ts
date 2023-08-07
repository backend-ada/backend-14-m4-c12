// Una vez completadas las funciones, convertilas en métodos estaticos de la clase Book.

import DB from "../database/books.json"
import { writeFileSync } from "node:fs"
import { randomUUID } from "node:crypto"

const PATH = "./src/database/books.json"

interface BookData {
	name: string;
	released: string;
	author: string;
}

class Book {
	name;
	released;
	author;
	id;

	constructor(book: BookData) {
		const { name, released, author } = book;

		this.name = name;
		this.released = released;
		this.author = author;

		this.id = this.#createUUID();
	}

	static findBookByTitle(title: string) {
		return DB.find((book) => book.name.includes(title))
	}

	static uploadNewBook(book: Book): boolean {
		const isBookOnDB = this.findBookByTitle(book.name);

		if (isBookOnDB) {
			console.log("El libro ingresado ya se encuentra registrado en la base de datos");
			return false;
		}

		DB.push(book)
		const stringifiedDB = JSON.stringify(DB);
		writeFileSync(PATH, stringifiedDB);

		return true;
	}


	#createUUID(): string {
		return randomUUID();
	}

	static getBooks() {
		return DB;
	}

	getAge() {
		const date = new Date();
		const currentYear = date.getFullYear();
		const releasedDate = Number(this.released);

		return currentYear - releasedDate;
	}


}

export { Book }; // Exportá los métodos estaticos



