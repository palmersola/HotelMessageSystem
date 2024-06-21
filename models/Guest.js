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

  getFirstName = () => this.firstName;

  getLastName = () => this.lastName;

  getFullName = () => `${this.firstName} ${this.lastName}`;

  getRoom = () => "Room " + this.reservation.roomNumber;
}
