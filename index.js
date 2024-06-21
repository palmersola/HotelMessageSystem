import { companies, addCompanies } from "./js/companies.js";
import { guests, addGuests } from "./js/guests.js";
import { addMessages } from "./js/messages.js";

addGuests();
addCompanies();
addMessages();

//Enter Hotel id here.
let hotelId = 2;

//enter Guest id here.
let guestId = 4;

const printPrompt = () => {
  let company = companies.find(i => i.id === hotelId);
  let guest = guests.find(i => i.id === guestId);
  if (!company) return "Hotel not found. Please enter a valid hotel id.";
  if (!guest) return "Guest not found. Please enter a valid guest id.";

  //If you would like to use the default prompt, set useDefaultPrompt as true. If you would like to use the custom prompt, set as false.
  let useDefaultPromt = true;

  //These are the variables for prompts
  let timeGreeting = company.getHours();
  let guestFirstName = guest.getFirstName();
  let guestLastName = guest.getLastName();
  let guestFullName = guest.getFullName();
  let hotelName = company.getMessage();
  let roomNumber = guest.getRoom();

  //Enter custom prompt below inside the backticks(`right here`). To use the variables, refrence the vairables above.
  //Make sure to wrap the variable in curly brackets, as well as the dollarsign infront like this: ${variableNameHere}
  let customPrompt = `Enter custom prompt here`;

  let defaultPrompt = `${timeGreeting} ${guestFirstName}, welcome to ${hotelName}! ${roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything.`;

  return useDefaultPromt ? defaultPrompt : customPrompt;
};

console.log(printPrompt());
