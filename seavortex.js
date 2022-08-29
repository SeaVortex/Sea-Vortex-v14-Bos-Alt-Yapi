const { Client, Collection } = require("discord.js")
const client = (global.client = new Client({ intents: [98303] }))
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Collection()
require("./src/handlers/eventsHandler.js");
require("./src/handlers/commandsHandler.js");
const vortex = require("./src/settings/vortex.js");
client.login(vortex.panels.token).then(e => console.log(`${client.user.tag} Bot Login!`)).catch(error => console.error("Bot failed to login"));
