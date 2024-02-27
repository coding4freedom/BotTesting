const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provide information about the server.'),
    async execute(interation) {
        await interation.reply(`This server is ${interation.guild.name} and has ${interation.guild.memmberCount} members.`);
    },
};