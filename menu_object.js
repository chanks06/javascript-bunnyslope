// Factory functions 

const robotFactory = (model, mobile) => {
    return{
    model : model,
    mobile : mobile, 
    beep()
      { 
      console.log('Beep Boop')
      }
    }
  }; 
  
  const tinCan = robotFactory('P-500', true)
  
  tinCan.beep()

  // exercise: creating a menu object to display a restaurant's special of the day:

  const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
        return this._meal;
      }
    },
    set price(priceToCheck) {
      if (typeof priceTocheck === "number") {
        this._price = priceTocheck;
        return this._price;
      }
    },
    get todaysSpecial(){
      if (this._meal && this._price){
        return ('Today\'s special is ' + this._meal + ' for ' + '$' + this._price + '.')
      } else {
        return 'Meal or price was not set  correctly!'
      }
    }
  };
  
  menu._meal = 'hamburger';
  menu._price = 12;
  
  console.log(menu.todaysSpecial);

