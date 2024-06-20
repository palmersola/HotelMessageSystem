import { companies, addCompanies } from "./js/companies.js";
import { guests, addGuests } from "./js/guests.js";
import { addMessages } from "./js/messages.js";

addGuests();
addCompanies();
addMessages();

//Enter Hotel id here.
let hotelId = 3;

//enter Guest id here.
let guestId = 1;

let company = companies.find(i => i.id === hotelId);
let guest = guests.find(i => i.id === guestId);

console.log(
  "Good " +
    company.getHours() +
    guest.getName() +
    ", and " +
    company.getMessage() +
    " Room " +
    guest.getRoom() +
    " is now ready you. Enjoy your stay, and let us know if you need anything."
);
