const { success, fail } = require('./../../functions/createEmbeds')
module.exports = async(interaction, config) => {
    let message = await interaction.client.channels.cache.get(config.roleChannelId).messages.fetch(config.roleMessageId)

    let row = interaction.options._hoistedOptions.find(f=>f.name==="row").value
    let name = interaction.options._hoistedOptions.find(f=>f.name==="name").value
    let description = interaction.options._hoistedOptions.find(f=>f.name==="description").value
    let emoji = interaction.options._hoistedOptions.find(f=>f.name==="emoji")?.value
    let role = interaction.options._hoistedOptions.find(f=>f.name==="role")?.value || (await interaction.guild.roles.create({name:name})).id

    if(true){
        let menu = message.components.find(c => c.components.find(p => {
            if(p.placeholder === row){
                let obj = {
                    "label": name,
                    "value": role,
                    "description": description,
                }
                if(emoji){
                    if(emoji.match(/\<\:.*\:\d+\>/g) !== null){
                        obj["emoji"] = {
                            "id": emoji.match(/(?<=\:.*\:)\d+/g)[0],
                            "name": emoji.match(/(?<=\:).*(?=\:\d+)+/g)[0]
                        }
                    }else{
                        obj["emoji"] = {
                            "name": emoji,
                        }
                    }
                    // console.log(obj);

                }
                p.options.push(obj)
                p.options = p.options.filter( f=> f.label !== "blank")
                console.log(p);
                if(p.customId.match(/\[max\]/g) !== null){
                    p.max_values = p.options.length
                }

                p.disabled = false
                return true
            }
            return false
        }))

        message.edit({embeds: message.embeds, components: message.components})
        success(interaction, config)
    }else{
        interaction.reply({content: "Please enter a shorter title.", ephemeral: true})
    }
}