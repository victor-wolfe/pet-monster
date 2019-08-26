import React from "react";

export class StatDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [
        {
          id: 0,
          name: "Hunger",
          value: 100
        },
        {
          id: 1,
          name: "Affection",
          value: 0
        },
        {
          id: 2,
          name: "Intelligence",
          value: 0
        }
      ]
    };
  }
  render() {
    return <ListStats stats={this.state.stats} />;
  }
}

const ListStats = props => {
  const statList = props.stats.map(stat => (
    <li key={stat.id}>
      {stat.name}: {stat.value}
    </li>
  ));
  return <ul>{statList}</ul>;
};
