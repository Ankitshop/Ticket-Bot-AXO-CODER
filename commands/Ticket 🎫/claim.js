const {
  ButtonBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  EmbedBuilder,
  ModalBuilder,
  TextInputBuilder,
  PermissionsBitField,
  TextInputStyle,
  ButtonStyle,
  ChannelType,
  ComponentType,
  ApplicationCommandType,
  ApplicationCommandOptionType
} = require('discord.js');
const {
  errorMessage
} = require(`${process.cwd()}/functions/functions`);
module.exports = {
  name: "claim",
  description: "Claim the ticket channel.",
  category: 'Ticket 🎫',
  cooldown: 1,
  userPermissions: ["SendMessages"],
  botPermissions: ["SendMessages", "EmbedLinks", "ManageChannels", "ViewChannel", "ReadMessageHistory"],
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    let db = client.db;
    let admin_roles = await db.get(`guild_${interaction.guild.id}.admin_roles`);
    let claim_has = await db.get(`guild_${interaction.guild.id}.ticket_claim`);
    let ticketChannel = (await db.get(`guild_${interaction.guild.id}.tickets`)).find(c=> c.channelId === interaction.channel.id);
    let ticketControl = ticketChannel?.user;
    if(interaction.channel.name !== ticketChannel?.channelName) return errorMessage(client, interaction, `**My Friend, here is not a ticket channel please use this command in other channel.**`);
    if (!interaction.member.roles.cache.some(r => admin_roles?.includes(r.id)) && !interaction.member.permissions.has([PermissionsBitField.Flags.ManageChannels])) return errorMessage(client, interaction, "```js\nyou are not have permissions for use this.\nPermissions Need: \"ManageChannels\" \n```");
    if(!claim_has) return errorMessage(client, interaction, `In this guild, the ticket claim system is disabled and you can't use it.`)
    await interaction.followUp({
            embeds: [new EmbedBuilder().setColor(client.colors.theme).setTitle(`${client.emotes.claim}| Claim Ticket`).setDescription(`Dear friend, you requested for claim ${interaction.guild.members.cache.find(c => c.id === ticketControl)} ticket, are you sure for claim the ticket??`)],
            components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Secondary).setCustomId("cancel").setEmoji(client.emotes.x).setLabel("Don't Claim"), new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId("claimTicket").setEmoji(client.emotes.claim).setLabel("Claim It"))]
    })
    setTimeout(() => {
            interaction.editReply({
              components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('timeout').setEmoji(client.emotes.alert).setLabel('Time Is Up').setStyle(ButtonStyle.Primary).setDisabled(true))]
            })
    }, 60 * 1000)
  }
}
