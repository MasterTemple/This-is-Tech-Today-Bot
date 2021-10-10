const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)

    message.embeds[0].title = interaction.options._hoistedOptions.find(f=>f.name==="title").value
    if(message.embeds[0].title.length <= 256){
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)
    }else{
        interaction.reply({content: "Please enter a shorter title.", ephemeral: true})
    }
}