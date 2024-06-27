import inquirer from "inquirer";
import * as fs from 'node:fs'
import { companies } from "./js/companies.js";
import { guests } from "./js/guests.js";
import { templates } from "./js/templates.js";
import { log } from "node:console";

let hotel
let guest
let timeGreeting
let firstName
let lastName
let hotelName
let roomNumber

export const getHotel = () =>
      inquirer.prompt({
            type: "list",
            name: "hotel",
            message: "Select Hotel:",
            choices: companies
      })
            .then((answer) => {
                  hotel = companies.find(i => i.name === answer.hotel)
                  getGuest()
            })

const getGuest = () =>
      inquirer.prompt({
            type: "list",
            name: "guest",
            message: "Select Guest:",
            choices: guests
      })
            .then((answer) => {
                  guest = guests.find(i => i.name === answer.guest)
                  promptChoice()
            })

const promptChoice = () => {
      timeGreeting = hotel.getHours()
      hotelName = hotel.getMessage()
      firstName = guest.getFirstName()
      lastName = guest.getLastName()
      roomNumber = guest.getRoom()


      let defaultPrompt = `${timeGreeting} ${firstName}, welcome to ${hotelName}! ${roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything.`;

      inquirer.prompt({
            type: "list",
            name: "prompts",
            message: "Select a prompt or create a custom prompt",
            choices: templates
      })
            .then((answer) =>
                  //console.log(answer.prompts)

                  answer.prompts === 'Custom' ? createCustom() : promptConstruct(answer.prompts)
            )

}

const createCustom = () =>
      inquirer.prompt({
            type: "input",
            name: "custom",
            message: "Enter custom prompt below. To use Hotel or Guest data, please wrap them as such: ${nameHere} \nAVAILABLE VARIABLES:\nfirstName\nlastName\nhotelName\ntimeGreeting\nroomNumber\n"
      })
            .then((answer) => {
                  templates.push({ "name": answer.custom })
                  let write = JSON.stringify(templates)
                  fs.writeFileSync("./data/Templates.json", write)
                  promptConstruct(answer.custom)

            })

const promptConstruct = (message) => {
      let prompt = eval(`\`${message}\``)
      inquirer.prompt({
            type: "list",
            name: "confirm",
            message: `Send Message? \n ${prompt}`,
            choices: ["Yes", "No"]
      })
            .then((answer) => answer.confirm === "No" ? promptChoice() : exitProgram())
}

const exitProgram = () =>
      inquirer.prompt({
            type: "list",
            name: "exit",
            message: "Would you like to continue?",
            choices: ["Change Hotel", "Change Guest", "New Message", "Exit Program"]
      })
            .then((answer) => {
                  answer.exit === "Change Hotel" ? getHotel() :
                        answer.exit === "Change Guest" ? getGuest() :
                              answer.exit === "New Message" ? promptChoice() :
                                    console.log("Thank you for using the Hotel Messaging System!");;
            })