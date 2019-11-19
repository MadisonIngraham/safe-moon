///WHERE WE KEEP ALL OF OUR DATA!!!!

let _state = {
  count: 0
};

let _modifier = {
  name: "shovel",
  price: 25,
  quantity: 0,
  multiplier: 25
};

class Store {
  get State() {
    return _state;
  }
  get Modifier() {
    return _modifier;
  }
}
const STORE = new Store();

export default STORE;
