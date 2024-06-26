import inquirer from "inquirer";
import { companies } from "./js/companies.js";
import { guests } from "./js/guests.js";

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
            name: "prompt",
            message: "Select default prompt or custom prompt",
            choices: ["Default", "Custom"]
      })
            .then((answer) => answer.prompt === "Default" ? promptConstruct(defaultPrompt) : createCustom())

}

const createCustom = () =>
      inquirer.prompt({
            type: "input",
            name: "custom",
            message: "Enter custom prompt below. To use Hotel or Guest data, please wrap them as such: ${nameHere} \nAVAILABLE VARIABLES:\nfirstName\nlastName\nhotelName\ntimeGreeting\nroomNumber\n"
      })
            .then((answer) => promptConstruct(eval(`\`${answer.custom}\``)))

const promptConstruct = (message) =>
      inquirer.prompt({
            type: "list",
            name: "confirm",
            message: `Send Message? \n ${message}`,
            choices: ["Yes", "No"]
      })
            .then((answer) => answer.confirm === "No" ? promptChoice() : exitProgram())

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