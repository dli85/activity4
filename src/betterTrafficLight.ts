// To add a new color: add it to either type, then add
// appropriate values to dictionaries.

export type TrafficLightSymbol = 'right arrow';
export type Color = 'red' | 'green' | 'yellow' | TrafficLightSymbol;

type TrafficLightInfoDict = {
  [key in Color]: {
    nextColor: Color;
    timeLeft: number;
  };
};

const trafficLightInfo: TrafficLightInfoDict = {
  'red': {
    nextColor: 'green',
    timeLeft: 20,
  },
  'yellow': {
    nextColor: 'red',
    timeLeft: 5,
  },
  'green': {
    nextColor: 'yellow',
    timeLeft: 15,
  },
  'right arrow': {
    nextColor: 'yellow',
    timeLeft: 15,
  },
};

export function getNextColor(color: Color): Color {
  return trafficLightInfo[color].nextColor;
}

export class TrafficLight {
  color: Color = 'red';

  timeLeft = 20;

  /* simulate one second passing */
  public tick() {
    if (this.timeLeft === 1) {
      this.color = getNextColor(this.color);
      this.timeLeft = trafficLightInfo[this.color].timeLeft;
    } else {
      this.timeLeft -= 1;
    }
  }

  public setTime(t: number) {
    this.timeLeft = t;
  }

  public getColor() {
    return this.color;
  }
}
