const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)

    message.embeds[0].description = interaction.options._hoistedOptions.find(f=>f.name==="description").value

    message.edit({embeds: message.embeds, components: message.components})
    success(interaction, config)
}