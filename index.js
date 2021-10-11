const Discord = require('discord.js')

var config = require('./config.json')
let createGlobalSlashCommands = require('./functions/createGlobalSlashCommands')
const client = new Discord.Client({
    intents: ['GUILD_MESSAGES', 'DIRECT_MESSAGES', 'GUILDS', 'GUILD_MEMBERS']
})

client.login(config.token)
client.once("ready", async (client) => {
    // createGlobalSlashCommands(client)
    console.log(`${client.user.username} is online.`);
})

client.on("interactionCreate", async (interaction) => {
    // console.log(interaction);
    if(interaction.type === "APPLICATION_COMMAND"){
        if(interaction.options._subcommand){
            let func = require(`./slashCommands/${interaction.commandName}/${interaction.options._subcommand}`)
            func(interaction, config)
        }
        else{
            let func = require(`./slashCommands/${interaction.commandName}`)
            func(interaction, config)
        }
    }
    // interaction.reply({content: "not ready", ephemeral: true})
})