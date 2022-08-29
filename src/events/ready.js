const Discord = require("discord.js");
const vortex = require("../settings/vortex.js")
module.exports = async () => {
    setInterval(() => {
        const playing = vortex.panels.bio;
        const index = Math.floor(Math.random() * (playing.length));
        client.user.setPresence({
            activities: [
                { name: `${playing[index]}`, }], status: vortex.panels.status,
        });
    }, 10000);
}
module.exports.event = {
    name: "ready"
}