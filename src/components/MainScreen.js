import React from "react";
import { PetDisplay } from "./PetDisplay";
import { StatDisplay } from "./StatDisplay";
import DayDisplay from "./TimeDisplay";
import { STATS } from "../shared/stats";
import { ACTIONS } from "../shared/actions";

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: STATS,
      actions: ACTIONS,
      day: 1,
      time: "Morning"
    };
  }

  changeTime(time) {
    switch (time) {
      case "Morning":
        this.setState({
          time: "Afternoon"
        });
        break;
      case "Afternoon":
        this.setState({
          time: "Night"
        });
        break;
      case "Night":
        const newDay = this.state.day + 1;
        this.setState({
          day: newDay,
          time: "Morning"
        });
        break;
      default:
        break;
    }
  }

  //takes an object from the array of actions: id, name, affectedStats
  performAction(action) {
    let newStat;
    let copyOfState = this.state.stats.slice(0);
    const affectedStatArray = Object.keys(action.affectedStats);
    // loop through the stats that will be changed
    for (const statToChange of affectedStatArray) {
      // loop through the current stats
      for (const originalStat of copyOfState) {
        if (originalStat.name === statToChange) {
          newStat = action.affectedStats[statToChange] + originalStat.value;
          originalStat.value = newStat;
        }
      }
    }
    console.log("State ", this.state.stats);
    console.log("Copy ", copyOfState);
  }

  handleClick = action => {
    this.performAction(action);
    this.changeTime(this.state.time);
  };

  render() {
    return (
      <div className="nes-container is-dark is-rounded">
        <DayDisplay day={this.state.day} time={this.state.time} />
        <PetDisplay />
        <StatDisplay
          stats={this.state.stats}
          actions={this.state.actions}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
