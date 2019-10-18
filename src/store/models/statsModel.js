import { action, computed } from "easy-peasy";

const statsModel = {
  dragonName: "Dragon",
  changeName: action((state, payload) => (state.dragonName = payload)),

  species: "Baby Dragon",

  time: "Morning",
  day: 1,

  changeTime: action(state => {
    switch (state.time) {
      case "Morning":
        state.time = "Afternoon";
        if (state.day == 4) {
          state.species = "Two-Headed Dragon";
          state.message = `Your dragon has grown up into a ${state.species}!`;
        }
        break;
      case "Afternoon":
        state.time = "Night";
        break;
      case "Night":
        state.day++;
        if (state.day == 4) {
          state.message = "Your dragon seems to be changing...";
          state.species = "???";
        }
        state.time = "Morning";
        break;
      default:
        break;
    }
  }),

  hunger: 100,
  hygiene: 100,
  happiness: 100,
  power: 0,
  intelligence: 0,
  discipline: 0,

  message: "The egg hatches. A dragon is born!",

  // minMaxer = computed(state => {
  //   if (state > 100)  {
  //     state = 100
  //   } else if (state < 0) {
  //     state = 0
  //   }
  // }),

  getHungry: action(state => {
    state.hunger -= 10;
    if (state.hunger < 0) {
      state.hunger = 0;
      state.happiness -= 10;
      if (state.happiness < 0) {
        state.happiness = 0;
      }
    }
    state.hygiene -= 5;
    if (state.hygiene < 0) {
      state.hygiene = 0;
    }
  }),

  updateStats: action((state, payload) => {
    switch (payload) {
      case "feed":
        state.hunger += 25;
        if (state.hunger > 110) {
          state.hunger = 110;
        }
        state.happiness += 5;
        if (state.happiness > 100) {
          state.happiness = 100;
        }
        state.message =
          "You leave a few villagers outside of your dragon's pen and run away.";
        break;
      case "groom":
        state.hygiene = 105;
        state.happiness += 5;
        if (state.happiness > 100) {
          state.happiness = 100;
        }
        state.message = "You buff its scales until they shine.";
        break;
      case "pet":
        state.happiness = 100;
        state.message = "Who's a good dragon? You are!";
        break;
      case "exercise":
        state.power += 10;
        if (state.power > 100) {
          state.power = 100;
        }
        state.hygiene -= 10;
        if (state.hygiene < 0) {
          state.hygiene = 0;
        }
        state.message = "You try to play fetch and it sets the stick on fire.";
        break;
      case "educate":
        state.intelligence += 10;
        if (state.intelligence > 100) {
          state.intelligence = 100;
        }
        state.happiness -= 40;
        if (state.happiness < 0) {
          state.happiness = 0;
        }
        state.message =
          "You lecture your dragon about dragon history. It seems bored.";
        break;
      case "training":
        state.discipline += 10;
        if (state.discipline > 100) {
          state.discipline = 100;
        }
        state.happiness -= 40;
        if (state.happiness < 0) {
          state.happiness = 0;
        }
        state.message = "You do some clicker training with your dragon.";
        break;
      default:
        break;
    }
  })
};

export default statsModel;
