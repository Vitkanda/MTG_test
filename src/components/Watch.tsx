import React from "react";

class Watch extends React.Component {
  state = {
    time: new Date(),
  };
  timerID: NodeJS.Timer | undefined;

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default Watch;
