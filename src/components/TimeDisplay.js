import React from "react";

export class ChangeTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div>
        <DayDisplay day={this.state.day} time={this.state.time} />;
      </div>
    );
  }
}

const DayDisplay = props => {
  return (
    <div class="nes-container is-dark is-rounded is-centered">
      <p>{`Day: ${props.day} - Time: ${props.time}`}</p>
    </div>
  );
};

export default DayDisplay;
