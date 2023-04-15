const { SlashCommandBuilder } = require ("discord.js");
const { execute } = require("./imagine");

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Ping"),
    async execute(interaction) {
        interaction.reply("Ponte las pilas");
    },
};