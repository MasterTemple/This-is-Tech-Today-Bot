const { success, fail } = require('./../../functions/createEmbeds')
const createAddRoleSlashCommands = require('./../../functions/createAddRoleSlashCommands')

module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)

    let rowName = interaction.options._hoistedOptions.find(f=>f.name==="row").value
    let multiple = interaction.options._hoistedOptions.find(f=>f.name==="multiple").value
    // console.log(message.components);
    if(message.components.length < 5){
        let max = ""
        if(multiple){
            max = "[max]" // 25
        }
        message.components.push({
            "type": 1,
            "components": [{
                "type": 3,
                "custom_id": `role[${rowName.substring(0,94)}]${max}`,
                "options":[
                    {
                        "label": "blank",
                        "value": "blank",
                        "description": "blank"
                    }
                ],
                "placeholder": rowName,
                "min_values": 1,
                "max_values": 1,
                disabled: true
            }]
        })

        let guildCommands = await interaction.client.guilds.cache.get(config.roleGuildId).commands.fetch()
        let cmd = guildCommands.find(c => c.name === "add")
        // console.log(cmd)

        // if(!cmd.options.find(c => c.name === "role").options.find(c => c.name === "row").choices){
        //     cmd.options.find(c => c.name === "role").options.find(c => c.name === "row").choices = [{
        //         "name": rowName,
        //         "value": rowName
        //     }]
        // }else{
        //     cmd.options.find(c => c.name === "role").options.find(c => c.name === "row").choices.push({
        //         "name": rowName,
        //         "value": rowName
        //     })

        // }
        let choices = [{
            "name": rowName,
            "value": rowName
        }]

        if(cmd?.options?.find(c => c.name === "role")
            ?.options?.find(c => c.name === "row")?.choices){
                choices = [...choices, ...cmd?.options?.find(c => c.name === "role")
                    ?.options?.find(c => c.name === "row")?.choices]
            }
        // console.log(choices)
        createAddRoleSlashCommands(interaction.client, config.roleGuildId, choices)

        // interaction.client.guilds.cache.get(config.roleGuildId).commands.create(cmd)
        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)

    }else{
        interaction.reply({content: "You have too many drop down menus.", ephemeral: true})
    }

}