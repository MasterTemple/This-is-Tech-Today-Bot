const { MessageEmbed } = require('discord.js')

module.exports = {
    success(interaction, config, title="Interaction Successful! ✅") {
        let embed = new MessageEmbed().setTitle(title).setColor("#06bd27")
        let components = [
            {
                "type": 1,
                "components": [
                    {
                        "type": 2,
                        "label": "View Embed!",
                        "style": 5,
                        "url": `discord://discord.com/channels/${config.roleGuildId}/${config.roleChannelId}/${config.roleMessageId}`
                    }
                ]

            }
        ]
        interaction.reply({embeds:[embed], components: components, ephemeral: true})
    },
    fail(title="Interaction Failed!"){
        let embed = new MessageEmbed().setTitle(title).setColor("#bf2008")
        return embed  
    }
}