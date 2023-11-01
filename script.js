function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.displayInfo = function() {
  console.log("Ім'я: " + this.name + ", Вік: " + this.age + " років");
};

function Car(brand, model, year, licensePlate) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.licensePlate = licensePlate;
  this.owner = null;

  this.setOwner = function(person) {
    if (person.age >= 18) {
      this.owner = person;
    } else {
      console.log("Власник повинен бути старше 18 років.");
    }
  };

  this.displayInfo = function() {
    console.log("Марка: " + this.brand);
    console.log("Модель: " + this.model);
    console.log("Рік виписки: " + this.year);
    console.log("Номерний знак: " + this.licensePlate);
    if (this.owner) {
      console.log("Інформація про власника:");
      this.owner.displayInfo();
    } else {
      console.log("Власник не вказаний.");
    }
  };
}

let person1 = new Person("Іван", 30);
let person2 = new Person("Марія", 25);

let car1 = new Car("Nissan", "Qashkai", 2018, "AB4444BA");
let car2 = new Car("Toyota", "Rav4", 2020, "BA5555AB");

car1.setOwner(person1);
car2.setOwner(person2);

person1.displayInfo();
person2.displayInfo();

car1.displayInfo();
car2.displayInfo();
