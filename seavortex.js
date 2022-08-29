const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js")
const client = global.client = new Client({
    fetchAllMembers: true,
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.GuildMember,
        Partials.Reaction,
        Partials.GuildScheduledEvent,
        Partials.User,
        Partials.ThreadMember,
    ],

})
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Collection()
require("./src/handlers/eventsHandler.js");
require("./src/handlers/commandsHandler.js");
const vortex = require("./src/settings/vortex.js");
client.login(vortex.panels.token).then(e => console.log(`${client.user.tag} Bot Login!`)).catch(error => console.error("Bot failed to login"));
