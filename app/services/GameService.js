import store from "../store.js";

class GameService {
  updateCount() {
    store.State.count +=
      1 + store.Modifier.quantity * store.Modifier.multiplier;
  }

  applyModifier() {
    if (store.State.count >= store.Modifier.price) {
      store.Modifier.quantity += 1;
      store.State.count -= store.Modifier.price;
    }
  }
}

const GAMESERVICE = new GameService();

export default GAMESERVICE;
