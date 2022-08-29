const { EmbedBuilder, Client, Collection } = require("discord.js");
const client = global.client;
const { panels } = require("../settings/vortex.js");
let sended = false;
setInterval(() => {
    client.cooldown.forEach((x, index) => {
        if (Date.now() - x.lastUsage > x.cooldown) client.cooldown.delete(index);
    });
}, 5000);
module.exports = async (message) => {

    const prefix = panels.prefix.find((x) => message.content.toLowerCase().startsWith(x));
    if (message.author.bot || !message.guild || !prefix) return;
    const args = message.content.substring(prefix.length).trim().split(" ");
    const commandName = args.shift().toLowerCase();
    const timeout = (v) => setTimeout(() => { v.delete(); }, 5000);
    const seavortex = "728360891644641303"
    const embed = new EmbedBuilder().setColor('#DD0909').setTimestamp().setAuthor({ name: message.member.displayName, iconURL: message.author.avatarURL({ dynamic: true }) }).setFooter({ text: client.users.cache.get(seavortex).tag, iconURL: client.users.cache.get(seavortex).avatarURL({ dynamic: true }) })
    const cmd = client.commands.has(commandName) ? client.commands.get(commandName) : client.commands.get(client.aliases.get(commandName));    if (cmd) {
        if (cmd.conf.owner && !panels.botOwner.includes(message.author.id)) return;
        const cooldown = cmd.conf.cooldown || 3000;
        const cd = client.cooldown.get(message.author.id);
        if (cd) {
            const diff = Date.now() - cd.lestUsage;
            if (diff < cooldown)
                if (!sended) {
                    sended = true;
                    return message.reply({ embeds: [embed.setDescription(`Bu komutu tekrar kullanabilmek için **${Number(((cooldown - diff) / 1000).toFixed(2))}** daha beklemelisin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 5000));
                }
        } else client.cooldown.set(message.author.id, { cooldown, lestUsage: Date.now() });
        cmd.run(client, message, args, embed, timeout);
    }
};
module.exports.event = {
    name: "messageCreate"
}


