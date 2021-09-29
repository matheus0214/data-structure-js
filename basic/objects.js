function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// Com prototype são compartilhados os metodos invez de serem criados novos a
// cada instancia
Book.prototype.printTitle = function () {
  console.log(this.title);
};

var book = new Book("The little prince", "Martin", "129123-123");
book.printTitle();
