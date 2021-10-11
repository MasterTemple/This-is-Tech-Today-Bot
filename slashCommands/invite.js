let {MessageEmbed} = require('discord.js')
module.exports = async (interaction, config) => {
    let embed = new MessageEmbed().setColor("#7289DA").setTitle(`Invite ${interaction.client.user.username} to your server!`)
    let permissions = 8
    let components = [
        {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Invite",
                    "style": 5,
                    "url": `https://discord.com/oauth2/authorize?client_id=${interaction.client.user.id}&permissions=${permissions}&scope=bot%20applications.commands`,
                }
            ]

        }
    ]
    interaction.reply({embeds: [embed], components: components})
}