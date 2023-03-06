const { Events } = require("discord.js");
const { replyMessage } = require("../functions/functions.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.content.startsWith("!reply")) {
      replyMessage(message, "hey");
    }
  },
};
