export type TrafficLightSymbol = Color | 'right turn';
export type Color = 'red' | 'green' | 'yellow';

export function getNextColor(color: Color): Color {
  switch (color) {
    case 'red':
      return 'green';
    case 'yellow':
      return 'red';
    case 'green':
      return 'yellow';
    default:
      throw new Error('Unrecognized color.');
  }
}

export class TrafficLight {
  color: Color = 'red';

  timeLeft = 20;

  TIME_ON_RED = 20;

  TIME_ON_YELLOW = 5;

  TIME_ON_GREEN = 15;

  /* simulate one second passing */
  public tick() {
    if (this.timeLeft === 1) {
      this.color = getNextColor(this.color);
      switch (this.color) {
        case 'red':
          this.timeLeft = this.TIME_ON_RED;
          break;
        case 'yellow':
          this.timeLeft = this.TIME_ON_YELLOW;
          break;
        case 'green':
          this.timeLeft = this.TIME_ON_GREEN;
          break;
        default:
          throw new Error('Unrecognized colors.');
      }
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
