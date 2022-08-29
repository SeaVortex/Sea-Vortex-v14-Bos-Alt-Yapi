const fs = require("fs");

const eventFiles = fs.readdirSync('./src/events');
eventFiles.forEach(files => {
    const prop = require(`../events/${files}`)
    if (!prop.event) return
    client.on(prop.event.name, prop);
});
console.log(`${eventFiles.length} Events Uploaded.`);
