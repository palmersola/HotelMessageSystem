import { Company } from "../models/Company.js";
import companiesData from "../data/Companies.json" assert { type: 'json' };
export let companies = [];

export const addCompanies = () => 
  companiesData.forEach(i => {
    let company = new Company(i.id, i.company, i.city, i.timezone);
    companies.push(company);
  });


