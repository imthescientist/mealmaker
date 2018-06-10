const menu = {
  _courses: {      // allows us to map courses and dishes
    appetizers: [],
    mains: [],
    desserts: []
  },

  get courses() {
   return {
     appetizers: this._courses.appetizers
   }
    return {
     mains: this._courses.mains
   }
   return {
     desserts: this._courses.mains
   }
 },

 get appetizers() {

 },
 set appetizers(appetizerIn){

 },
  get mains() {

  },
  set mains(mainsIn) {

  },
  get desserts() {

  },
  set desserts(dessertsIn) {

  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
   this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex =
 Math.floor(Math.random() * dishes.length);
  },
  generateRandomMeal() {
  const appetizers =
        this.getRandomDishFromCourse('appetizers')
  const mains =
        this.getRandomDishFromCourse('mains')
  const desserts =
        this.getRandomDishFromCourse('desserts')
const totalPrice = appetizers.price + mains.price + desserts.price

 return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}`

}
}
menu.addDishToCourse('appetizers', 'BBQ Nachos', 6.00);
menu.addDishToCourse('appetizers', 'Jalapeno Poppers', 4.50);
menu.addDishToCourse('appetizers', 'Cat Food', 2.50);
menu.addDishToCourse('mains', 'Panda Steak', 25.23);
menu.addDishToCourse('mains', 'Swamp Soup', 8.25);
menu.addDishToCourse('mains', 'Ham Sangwich', 15.15);
menu.addDishToCourse('desserts', 'Apple Pie', 17.76);
menu.addDishToCourse('desserts', 'Frog Legs', 3.50);
menu.addDishToCourse('desserts', 'Monkey Lips', 4.12);

let meal = menu.generateRandomMeal();
console.log(meal)
