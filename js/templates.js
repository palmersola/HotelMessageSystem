import templateData from "../data/Templates.json" assert { type: 'json' };
import { Template } from "../models/Template.js";
export let templates = [];

export const addTemplates = () =>
      templateData.forEach(i => {
            let template = new Template(i.name);
            templates.push(template);
      });