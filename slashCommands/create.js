const { MessageEmbed } = require('discord.js')
const { success, fail } = require('./../functions/createEmbeds')
const createSetSlashCommands = require('./../functions/createSetSlashCommands')
const createAddRowSlashCommands = require('./../functions/createAddRowSlashCommands')
module.exports = async(interaction, config) => {
    let options = interaction.options._hoistedOptions
    let channel = options.find(o => o.name === "channel")?.value
    let title = options.find(o => o.name === "title")?.value
    let description = options.find(o => o.name === "description")?.value
    let image = options.find(o => o.name === "image")?.value
    let color = options.find(o => o.name === "color")?.value

    let embed = new MessageEmbed().setTitle(title)

    if(image?.match(/^https?\:\/\//g)?.length){
        embed.setImage(image)
    }
    if(description){
        embed.setDescription(description)
    }
    if(color){
        let hexColor = `#${color?.match(/[a-fA-F0-9]+/g)[0]}`
        embed.setColor(hexColor)
    }

    let roleEmbed = await interaction.client.channels.cache.get(channel).send({
        embeds: [embed]
    })

    let components = [
        {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "View Embed!",
                    "style": 5,
                    "url": `discord://discord.com/channels/${roleEmbed.guild.id}/${roleEmbed.channel.id}/${roleEmbed.id}`
                }
            ]

        }
    ]
    let fs = require('fs')
    config.roleGuildId = roleEmbed.guild.id
    config.roleChannelId = roleEmbed.channel.id
    config.roleMessageId = roleEmbed.id

    success(interaction, config)
    createSetSlashCommands(interaction.client, config.roleGuildId)
    createAddRowSlashCommands(interaction.client, config.roleGuildId)
    fs.writeFileSync("./config.json", JSON.stringify(config))

}