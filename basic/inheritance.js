class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  set title(newValue) {
    this._title = newValue;
  }

  get title() {
    return this._title;
  }

  set author(newValue) {
    this._author = newValue;
  }

  get author() {
    return this._author;
  }

  shortDescription() {
    console.log(`${this._title} - ${this._author}`);
  }
}

class ITBook extends Book {
  constructor(title, author, year) {
    super(title, author);
    this._year = year;
  }

  set year(newValue) {
    this._year = newValue;
  }

  get year() {
    return this._year;
  }
}

itBook = new ITBook("JS Frameworks", "Jhon", 2021);

itBook.shortDescription();
itBook.year = 1999;
console.log(itBook.year, itBook.author);
