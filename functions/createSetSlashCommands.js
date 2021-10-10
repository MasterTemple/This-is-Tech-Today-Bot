module.exports = async (client, guildId) => {
    return new Promise((resolve, reject) => {
        await client.guilds.cache.get(guildId).commands.create({
            "name": "set",
            "description": "Edit an embed's values.",
            "options": [
                {
                    "name": "title",
                    "type": 1,
                    "description": "Set the embed's title.",
                    "options": [
                        {
                            "name": "title",
                            "description": "Enter the embed's title.",
                            "type": 3,
                            "required": true
                        }
                    ]
                },
                {
                    "name": "description",
                    "type": 1,
                    "description": "Set the embed's description.",
                    "options": [
                        {
                            "name": "description",
                            "description": "Enter the embed's description.",
                            "type": 3,
                            "required": true
                        }
                    ]
                },
                {
                    "name": "image",
                    "type": 1,
                    "description": "Set the embed's image.",
                    "options": [
                        {
                            "name": "image",
                            "description": "Enter a URL to an image.",
                            "type": 3,
                            "required": false
                        }
                    ]
                },
                {
                    "name": "thumbnail",
                    "type": 1,
                    "description": "Set the embed's thumbnail.",
                    "options": [
                        {
                            "name": "thumbnail",
                            "description": "Enter a URL to an image.",
                            "type": 3,
                            "required": false
                        }
                    ]
                },
                {
                    "name": "color",
                    "type": 1,
                    "description": "Set the embed's color.",
                    "options": [
                        {
                            "name": "color",
                            "description": "Enter a hex (#ffffff) color.",
                            "type": 3,
                            "required": true
                        }
                    ]
                },
            ]
        })
        resolve()
    })
}