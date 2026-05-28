require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,

  ]
});

client.once("ready", () => {
  console.log(`✅ Bot connecté : ${client.user.tag}`);
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    c => c.name === "👋・bienvenue"
  );

  if (!channel) return;

  channel.send(
    `👋 Bienvenue ${member} sur le serveur officiel de Tchoop !`
  );
});

client.login(process.env.TOKEN);