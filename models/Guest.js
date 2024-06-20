export class Guest {
  constructor(id, first, last, res) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.reservation = {
      roomNumber: res.roomNumber,
      startTimestamp: res.startTimestamp,
      endTimestamp: res.endTimestamp
    };
  }

  getName = () => this.firstName;

  getRoom = () => this.reservation.roomNumber;
}
