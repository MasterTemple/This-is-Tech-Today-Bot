const Discord = require('discord.js')

module.exports = async(client, roleChannelId) => {
    let channel = client.channels.cache.get(roleChannelId)
    let messages = channel.messages.fetch()
    let message = messages.first() || {}

    let embed = new Discord.MessageEmbed().setTitle("This is Tech Today")
    let components = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu())

    message.content = "hi"
    message.embeds = [embed]
    message.components = components
    if(messages.size === 0){
        await channel.send(message)
    }else{
        messages.first().edit(message)
    }
    
}