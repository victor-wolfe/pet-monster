import React from "react";

const ACTIONS = [
  {
    id: 0,
    name: "Feed",
    stat: "Hunger",
    value: 5
  },
  {
    id: 1,
    name: "Pet",
    stat: "Affection",
    value: 3
  },
  {
    id: 2,
    name: "Train",
    stat: "Intelligence",
    value: 4
  }
];

export const ActionDisplay = () => {
  const actionList = ACTIONS.map(action => {
    return (
      <li key={action.id}>
        <button onClick={changeStats(action.name, action.value)}>
          {action.name}: {action.stat} + {action.value}
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul>{actionList}</ul>
    </div>
  );
};

const changeStats = (name, value) => {
  console.log(name);
  console.log(value);
};
