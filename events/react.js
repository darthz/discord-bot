const { getRoles } = require("../functions/functions.js");
const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    // const roles_name = getRoles(message);
    // console.log(roles_name);
    // if (roles_name.includes("admin")) {
    //   message.react("😄");
    // }
  },
};
