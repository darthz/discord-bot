const { Events, AttachmentBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    const file = new AttachmentBuilder("image.jpg");

    if (message.content.startsWith("!boogs")) {
      const exampleEmbed = new EmbedBuilder()
        .setTitle("Boogs")
        .setImage("attachment://discordjs.jpg")
        .setColor(1146986);

      message.channel.send({ embeds: [exampleEmbed], files: [file] });
    }
  },
};
