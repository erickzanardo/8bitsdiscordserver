require("dotenv").config();
const Discord = require("discord.js")

const { watchTwitter } = require("./lib/tweets");
const { handleMessage: lemnisMessageHandler } = require("./handlers/lemnis");

const startBot = () => {
  const client = new Discord.Client()

  /* eslint-disable no-console */
  client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

  watchTwitter(client);

  client.login(process.env.BOT_TOKEN);
  client.on("error", e => {
    console.log("Unexpected error", e);
    client.destroy();

    startBot();
  });

  client.on("message", message => {
    lemnisMessageHandler(message);
  });

}

startBot();
