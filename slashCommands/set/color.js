const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)
    try{
        message.embeds[0].setColor(interaction.options._hoistedOptions.find(f=>f.name==="color")?.value)
        await message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)
    }catch{
        interaction.reply({content: "Please enter a valid color.", ephemeral: true})
    }
}