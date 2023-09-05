export class Clock {
  hour: number;
  minute: number;
  constructor(hour: number, minute?: number) {
    if (hour < 0) {
      this.hour = 24 + (hour % 24);
    } else {
      this.hour = hour % 24;
    }
    this.minute = 0;
    if (minute) {
      if (minute < 0) {
        this.hour = (24 + ((this.hour + Math.floor(minute / 60)) % 24)) % 24;
        this.minute = 60 + (minute % 60);
      } else if (minute >= 0) {
        this.hour = (this.hour + Math.floor(minute / 60)) % 24;
        this.minute = minute % 60;
      }
    }
  }

  public toString(): string {
    let hourString = "";
    if (this.hour < 10) {
      hourString = "0" + this.hour.toString();
    } else {
      hourString = this.hour.toString();
    }

    let minuteString = "";
    if (this.minute < 10) {
      minuteString = "0" + this.minute.toString();
    } else {
      minuteString = this.minute.toString();
    }
    return hourString + ":" + minuteString;
  }

  public plus(minutes: number): Clock {
    this.hour = (this.hour + Math.floor(minutes / 60)) % 24;
    this.minute = this.minute + (minutes % 60);
    return new Clock(this.hour, this.minute);
  }

  public minus(minutes: number): Clock {
    this.hour = this.hour + Math.floor((this.minute - minutes) / 60);
    this.minute = (this.minute + (60 - (minutes % 60))) % 60;
    return new Clock(this.hour, this.minute);
  }

  public equals(other: Clock): boolean {
    return new Clock(this.hour, this.minute).toString() === other.toString();
  }
}
