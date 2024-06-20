import { Message } from "../models/Message.js";
import messageData from "../data/Messages.json" assert { type: 'json' };
export let messages = [];

export const addMessages = () => 
  messageData.forEach(i => {
    let message = new Message(i.id, i.companyId, i.message);
    messages.push(message);
  });