const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)
    let imageUrl = interaction.options._hoistedOptions.find(f=>f.name==="image")?.value || ""
    if(imageUrl.match(/http/g) !== null){
        // message.embeds[0].image = imageUrl
        message.embeds[0].setImage(imageUrl)
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)
    }else{
        delete message.embeds[0].image
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config, "Image Successfully Removed.")
        // interaction.reply({content: "Please enter a valid URL.", ephemeral: true})
    }
}