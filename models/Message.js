export class Message {
  constructor(id, companyId, message) {
    this.id = id;
    this.companyId = companyId;
    this.message = message;
  }

  getMessageText = () => this.message.toString();
}
