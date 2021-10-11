module.exports = async(interaction, config) => {
    // console.log(interaction);
    let roles = await interaction.guild.roles.fetch()
    interaction.values.forEach((eachRole) => {
        roles.get(eachRole).delete()
    })
    interaction.reply({content: "Roles Deleted!", ephemeral: true})

    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)


    message.components.forEach((eachMessageComponent) => {
        eachMessageComponent.components[0]
        .options = eachMessageComponent.components[0]
        .options.filter(o => {
            return !interaction.values.includes(o.value)
        })
    })
    message.components.forEach((eachMessageComponent) => {
        if(eachMessageComponent.components[0].options.length === 0){
            eachMessageComponent.components[0].options = [{
                "label": "blank",
                "value": "blank",
                "description": "blank"
            }]
            eachMessageComponent.components[0].disabled = true
        }
        eachMessageComponent.components[0].max_values = eachMessageComponent.components[0].options.length
    })
    message.edit({embeds: message.embeds, components: message.components})

    interaction.message.delete()
}