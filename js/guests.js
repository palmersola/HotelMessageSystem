import { Guest } from "../models/guest.js";
import guestsData from '../data/Guests.json' assert { type: 'json' };
export let guests = [];

export const addGuests = () => 
  guestsData.forEach(i => {
    let guest = new Guest(i.id, i.firstName, i.lastName, i.reservation);
    guests.push(guest);
  });


