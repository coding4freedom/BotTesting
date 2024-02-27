// Importing the discord js library
const {Client, GatewayIntentBits, Partials} = require('discord.js');
const { token } = require('./config.json')

// Creating a new instance of client
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,        
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});

// Logging into BOT
client.login(token);

// Event listener for when a message is received
client.on('message', (message) => {
    // check if the message is a DM
    if (message.channel.type == 'dm' && message.author.presense.status == ('offline' || 'idle')){
        const username = message.author.username;
        message.reply(`Hello ${username}! I'm receiving this message on behalf of ShinobuOfMind.\nHe is either offline or away at the moment.\n
        ShinobuOfMind will make sure to get back with you when he sees your DM.`);
    }
});