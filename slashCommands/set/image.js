const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)
    console.log(message.embeds[0]);
    let imageUrl = interaction.options._hoistedOptions.find(f=>f.name==="image").value
    if(imageUrl.match(/http/).length){
        message.embeds[0].image = imageUrl
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)
    }else{
        interaction.reply({content: "Please enter a valid URL.", ephemeral: true})
    }
}