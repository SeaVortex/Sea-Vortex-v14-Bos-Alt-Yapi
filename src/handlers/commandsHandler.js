const fs = require("fs");

fs.readdir("./src/commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`../commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(props.name, {
            name: props,
            ...props,
        });
        console.log(`${client.commands.size} Commands Uploaded.`);
    });
});
