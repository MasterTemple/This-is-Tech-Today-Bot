const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)

    // let row = interaction.options._hoistedOptions.find(f=>f.name==="row").value
    message.embeds[0].title = "Select the Roles to Remove"
    message.components.forEach((eachMessageComponent) => {
        eachMessageComponent.components[0].customId = eachMessageComponent.components[0].customId.replace(/role\[/g, "rm[")
        eachMessageComponent.components[0].max_values = eachMessageComponent.components[0].options.length
        // .options.forEach(o => {
        //     console.log(o);
        //     o.customId = o.customId.replace(/role\[/g, "rm[")
        // })
    })

    interaction.reply({embeds: message.embeds, components: message.components})
    // success(interaction, config)

}