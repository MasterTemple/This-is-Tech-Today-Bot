const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)

    let rowName = interaction.options._hoistedOptions.find(f=>f.name==="row").value
    console.log(message.components);
    if(message.components.length < 5){
        message.components.push({
            "type": 1,
            "components": [{
                "type": 3,
                "custom_id": `role[${rowName.substring(0,94)}]`,
                "options":[
                    {
                        "label": "blank",
                        "value": "blank",
                        "description": "blank"
                    }
                ],
                "placeholder": rowName,
                "min_values": 1,
                "max_values": 25,
                disabled: true
            }]
        })

        let guildCommands = await interaction.client.guilds.cache.get("896789597802102804").commands.fetch()
        let cmd = guildCommands.find(c => c.name === "add")
        if(!cmd.options.find(c => c.name === "role").options.find(c => c.name === "row").choices){
            cmd.options.find(c => c.name === "role").options.find(c => c.name === "row").choices = [{
                "name": rowName,
                "value": rowName
            }]
        }else{
            cmd.options.find(c => c.name === "role").options.find(c => c.name === "row").choices.push({
                "name": rowName,
                "value": rowName
            })
        }

        interaction.client.guilds.cache.get("896789597802102804").commands.create(cmd)
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)

    }else{
        interaction.reply({content: "Please enter a shorter title.", ephemeral: true})
    }
}