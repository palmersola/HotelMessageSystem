import { addCompanies } from "./js/companies.js";
import { addGuests } from "./js/guests.js";
import { addMessages } from "./js/messages.js";
import { addTemplates } from "./js/templates.js";
import { getHotel } from "./prompt.js";

addGuests();
addCompanies();
addMessages();
addTemplates();


getHotel();

