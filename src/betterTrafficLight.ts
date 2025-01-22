// To add a new color: add it to either type, then add
// appropriate values to dictionaries.

export type TrafficLightSymbol = 'right arrow';
export type Color = 'red' | 'green' | 'yellow' | TrafficLightSymbol;

type NextColorDict = {
  [key in Color]: Color;
};

type ColorToTimeDict = {
  [key in Color]: number;
};

const nextColor: NextColorDict = {
  'red': 'green',
  'yellow': 'red',
  'green': 'yellow',
  'right arrow': 'green',
};

const timeMap: ColorToTimeDict = {
  'red': 20,
  'yellow': 5,
  'green': 15,
  'right arrow': 15,
};

export function getNextColor(color: Color): Color {
  return nextColor[color];
}

export class TrafficLight {
  color: Color = 'red';

  timeLeft = 20;

  /* simulate one second passing */
  public tick() {
    if (this.timeLeft === 1) {
      this.color = getNextColor(this.color);
      this.timeLeft = timeMap[this.color];
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
