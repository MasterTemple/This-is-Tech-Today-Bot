module.exports = async (client, guildId) => {
    return new Promise((resolve, reject) => {
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
                        }
                    ]
                },            
            ]
        })
        resolve()
    })
}