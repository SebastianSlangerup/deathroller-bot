const { SlashCommandBuilder } = require('discord.js');
const random = require('lodash.random');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Deathroll someone, if you dare >:)')
        .addStringOption(option =>
            option.setName('amount')
                .setRequired(true)
                .setDescription('The amount to roll')),
    async execute(interaction) {
        let amount = interaction.options.getString('amount');
        await interaction.reply(`${interaction.user.username} rolled ${random(1, parseInt(amount), false).toString()} (1 - ${amount})`);
    },
};