const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder, ComponentType} = require('discord.js');
const random = require('lodash.random');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll-v2')
        .setDescription('WORK IN PROGRESS')
        .addStringOption(option =>
            option.setName('amount')
                .setRequired(true)
                .setDescription('The amount to roll')),
    async execute(interaction) {
        let amount = interaction.options.getString('amount');
        let currentAmount = random(1, parseInt(amount), false);

        if (currentAmount === 1) {
            interaction.reply(`${interaction.user.username} has lost the roll!`);
        }

        const rollEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Rolling...')
            .setDescription(`Current: ${currentAmount}`)
            .addFields(
                { name: 'Amount', value: amount },
            );

        const rollButton = new ButtonBuilder()
            .setCustomId('roll')
            .setLabel('Roll')
            .setStyle(ButtonStyle.Primary);

        const cancel = new ButtonBuilder()
            .setCustomId('cancel')
            .setLabel('Cancel')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder()
            .addComponents(rollButton, cancel);

        const response = await interaction.reply({
            embeds: [rollEmbed],
            components: [row],
        });

        const collector = response.createMessageComponentCollector({ componentType: ComponentType.Button, time: 3_600_000 });

        collector.on('collect', async interaction => {
            if (interaction.customId === 'roll') {
                currentAmount = random(1, parseInt(currentAmount), false);

                const rollEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('Rolling...')
                    .setDescription(`Current: ${currentAmount}`)
                    .addFields(
                        { name: 'Amount', value: amount },
                    );

                await interaction.update({
                    embeds: [rollEmbed],
                    components: [row],
                });
            } else if (interaction.customId === 'cancel') {
                await interaction.reply(`${interaction.user} has cancelled the roll!`);
            }
        });
    },
};
