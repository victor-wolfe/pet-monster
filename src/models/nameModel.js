import { action } from "easy-peasy";

// export const neutral = `${myMonster.name} is looking at you expectantly.`;
// export const feed = `You leave some villagers outside of ${myMonster.name}'s cave and run away.`;
// export const pet = `You stroke ${myMonster.name}'s scales and inform it that it is a good ${myMonster.species}`;
// export const train = `You train ${myMonster.name}. It's smarter, but it seems irritated with you.`;
// export const groom = `You buff ${myMonster.name}'s scales until they're shiny.`;

const nameModel = {
  dragonName: "Dragon",

  changeName: action((state, payload) => (state.dragonName = payload))
};

export default nameModel;
