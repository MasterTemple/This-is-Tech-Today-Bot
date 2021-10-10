const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)
    let imageUrl = interaction.options._hoistedOptions.find(f=>f.name==="thumbnail")?.value || ""
    if(imageUrl.match(/http/g) !== null){
        // message.embeds[0].image = imageUrl
        message.embeds[0].setThumbnail(imageUrl)
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)
    }else{
        delete message.embeds[0].thumbnail
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config, "Thumbnail Successfully Removed.")
        // interaction.reply({content: "Please enter a valid URL.", ephemeral: true})
    }
}