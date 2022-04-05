//Object literal
const bookObj = {
  title: "Harry Potter Series",
  author: "J.K Rowling",
  year: "2010",
  summary: function () {
    // return `${this.title} written by ${this.author}.`
    return this.title + " is written by " + this.author;
  },
};

console.log("BookObj ", bookObj);
console.log("Type of operator for variable bookObj: ", typeof bookObj);
console.log("The function : ", bookObj.summary());
console.log("To get the values of the object: ", Object.values(bookObj));
console.log("To get the keys of the object: ", Object.keys(bookObj));
const str = "string ";
console.log("Type of String: ", typeof str);
const str1 = new String("Hello string constructor");
console.log("Type of String variable str1 : ", typeof str1);

//constructors
function Book(title, author, year) {
  this.Title = title;
  this.Author = author;
  this.Year = year;
  this.brief = function () {
    return this.Title + " was written by " + this.Author;
  };
}

const book1 = new Book("Jujutsu Kaisen", "Aniplex", "2020");
console.log(
  "Watch closely that the literal is prefixed by the name of the constructor: ",
  book1
);

const book2 = new Book("Book Two", "Anish Singh", "2009");
console.log("Even book2 has getSummary function: \n", book2.brief());

//suppose you don't want every obj to have a function
function BookWF(title, author, year) {
  this.Title = title;
  this.Author = author;
  this.Year = year;
}
//prototype
BookWF.prototype.summaryOfBook = function () {
  return this.Title + " was written by " + this.Author;
};

BookWF.prototype.yrsOld = function () {
  const yrs = new Date().getFullYear() - this.Year;
  return this.Title + " is " + yrs + " old.";
};

BookWF.prototype.changeYear = function (newYear) {
  this.Year = newYear;
  return this.Year;
};

let book3 = new BookWF("Book three", "Prototype", "2020");
console.log("Using prototype created book3: ", book3);
console.log("Accessing the function : \n", book3.summaryOfBook());
console.log("Accessing the function : \n", book3.yrsOld());
console.log("Changing the year: ", book3.changeYear("2021"));

//Inheritance
function Magazine(title, author, year, month, day) {
  BookWF.call(this, title, author, year);
  this.Month = month;
  this.Day = day;
}
//inherit
Magazine.prototype = Object.create(BookWF.prototype);

//change from BookWF to Magazine
Magazine.prototype.constructor = Magazine;
//initialize
const mag = new Magazine("Magazine 1", "Anyone", "2020", "Feb", "20th");
console.log(mag);
console.log(mag.summaryOfBook());

//classes
class Car {
  constructor(model, yearofPurchase) {
    this.Model = model;
    this.year = yearofPurchase;
    this.overview = function () {
      return this.Model + "released in " + this.year;
    };
  }

  addEngine(engine){
      this.Engine = engine;
  }

  //same in cpp we can even use static methods
//   static  horsepower;

//   static horsePowerFunction(){
//       return "Hello";
//   }
}
horsepower = '100wph';
const car = new Car("Tesla X", "2021");
const car2 = new Car('Ferrari' , '2019');
console.log("Using Classes: \n", car);
console.log("OverView: \n", car.overview());
car.addEngine('powerful')
console.log("Engine added: \n", car);
// console.log(Car.horsePowerFunction());
// console.log("Horsepower: \n",horsepower);


//subclasses using inheritance

class Person{
    constructor(name, age){
        this.Name = name;
        this.Age = age;
    }

    getDetails(){
        return this.Name + " is " + this.Age + " years old.";
    }
    //declare a private data member inside a class using '#' symbol

    #thisisPrivateData;

    #privateMethod(value){
        return this.#thisisPrivateData = value;
    }
}


class Student extends Person{
    constructor(name, age, branch){
        super(name, age);
        this.Branch = branch;
    } 
}

const student1 = new Student('Anish', '20', 'CSCE');
console.log(student1);
console.log(student1.getDetails());
// console.log(student1.privateMethod(345)); // syntax error for trying to connect with private method or data
