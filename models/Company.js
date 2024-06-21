import { messages } from "../js/messages.js";

export class Company {
  constructor(id, name, city, timezone) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.timezone = timezone;
  }

  getHours = () => {
    let i = this.timezone;

    let j =
      new Date().getUTCHours() - (i === "US/Eastern" ? 4 : i === "US/Central" ? 5 : i === "US/Mountain" ? 6 : 7);

    return `Good ${j > 3 && j < 12 ? "morning " : j > 11 && j < 18 ? "afternoon " : j > 17 || j < 4 ? "evening " : "day "}`
      ;
  };

  getMessage = () => {
    let message = messages.find(j => j.companyId === this.id);
    return message.getMessageText();
  };
}
