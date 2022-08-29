const { EmbedBuilder } = require("discord.js");

module.exports = {
    conf: {
        aliases: [],
        name: "ping",
        owner: false,
        enabled: true
    },

    run: async (client, message, args, embed, timeout) => {

        message.reply({ content: `${client.ws.ping}` })

    }
}