
import * as model from './model/model';

(function main() {
	// Llamá al método estático uploadNewBook(book: BookData) desde acá y creá nuevos libros!
	const nuevoLibro = new model.Book({ name: "NewBook", released: "2020", author: "Unknown" });
	model.Book.uploadNewBook(nuevoLibro);
	
	console.log(`El libro ${nuevoLibro.name} se creo hace ${nuevoLibro.getAge()} años`);

	// Imprimí los resultados en la terminal
	console.log("---GETBOOKS---");
	console.log(model.Book.getBooks());


	// Llamá al método estático findBookByTitle(title: string) e imprimí algunos resultados en la terminal.
	console.log("---METHOD FINDBOOKBYTITLE---");
	let findBook = model.Book.findBookByTitle("Journey");
	console.log(findBook);

	findBook = model.Book.findBookByTitle("Scanner");
	console.log(findBook);
	
})();

