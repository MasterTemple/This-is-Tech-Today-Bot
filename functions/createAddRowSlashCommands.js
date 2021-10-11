module.exports = async (client, guildId) => {
    return new Promise(async(resolve, reject) => {
        await client.guilds.cache.get(guildId).commands.create({
            "name": "add",
            "description": "Add rows or options to the embed's drop downs.",
            "options": [
                {
                    "name": "row",
                    "type": 1,
                    "description": "Adds a drop down to a embed.",
                    "options": [
                        {
                            "name": "row",
                            "description": "Select the drop down title.",
                            "type": 3,
                            "required": true,
                        },
                        {
                            "name": "multiple",
                            "description": "Can the user select multiple roles from this drop down?.",
                            "type": 5,
                            "required": true,
                        },
                    ]
                },            
            ]
        })
        resolve()
    })
}