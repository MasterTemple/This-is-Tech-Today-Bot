const { success, fail } = require('./../../functions/createEmbeds')
const createAddRoleSlashCommands = require('./../../functions/createAddRoleSlashCommands')

module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)

    let rowName = interaction.options._hoistedOptions.find(f=>f.name==="row").value
    let roles = await interaction.guild.roles.fetch()
    let command = (await interaction.client.guilds.cache.get(config.roleGuildId).commands.fetch()).find(c => c.name === "remove")
    // console.log(command);
    let choices = command?.options?.find(c => c.name === "rows")
    ?.options?.find(c => c.name === "row")?.choices.filter(f => f.name !== rowName)

        // choices = [...choices, ...command?.options?.find(c => c.name === "role")
        // ?.options?.find(c => c.name === "row")?.choices]
    // console.log(choices);

    createAddRoleSlashCommands(interaction.client, config.roleGuildId, choices)
    // console.log(message.components);
    let rolesToDelete = []
    message.components =  message.components.filter(comp => {
        if(comp.components[0].placeholder !== rowName){
            return true
        }else{
            rolesToDelete = comp.components[0].options.map(m => m.value)
            return false
        }
    })
    rolesToDelete.forEach((r) => {
        roles.get(r).delete()
    })
    // interaction.client.guilds.cache.get(config.roleGuildId).commands.create(command)
    message.edit({embeds: message.embeds, components: message.components})
    success(interaction, config)



}