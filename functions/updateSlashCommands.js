module.exports = async(client) => {
    return new Promise(async (resolve, reject) => {
        let commands = [
            {
                "name": "create",
                "type": 1,
                "description": "Create an Embed for Role",
                "options": [
                    {
                        "name": "channel",
                        "description": "Enter the channel ID",
                        "type": 7,
                        "required": true
                    },
                    {
                        "name": "title",
                        "description": "Enter the embed's title",
                        "type": 3,
                        "required": true
                    },
                    {
                        "name": "description",
                        "description": "Enter the embed's description.",
                        "type": 3,
                        "required": false
                    },
                    {
                        "name": "image",
                        "description": "Enter a URL to an image.",
                        "type": 3,
                        "required": false
                    },
                    {
                        "name": "color",
                        "description": "Enter the embed's color.",
                        "type": 3,
                        "required": false
                    },
                ]
            },
            {
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
                                "required": true
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
            },
            {
                "name": "add",
                "description": "Add rows or options to the embed's drop downs.",
                "options": [
                    {
                        "name": "row",
                        "type": 1,
                        "description": "Add an option to a select menu.",
                        "options": [
                            {
                                "name": "row",
                                "description": "Select the drop down to add this role to.",
                                "type": 3,
                                "required": true,
                            },
                            // {
                            //     "name": "name",
                            //     "description": "Enter the role name.",
                            //     "type": 3,
                            //     "required": true
                            // },
                            // {
                            //     "name": "description",
                            //     "description": "Enter the role description.",
                            //     "type": 3,
                            //     "required": true
                            // },
                            // {
                            //     "name": "role",
                            //     "description": "Enter the role ID if this role already exists, if not it will create one.",
                            //     "type": 8,
                            //     "required": false
                            // },
                        ]
                    },
                    {
                        "name": "role",
                        "type": 1,
                        "description": "Add a role to a select menu.",
                        "options": [
                            {
                                "name": "row",
                                "description": "Select the drop down to add this role to.",
                                "type": 3,
                                "required": true,
                                "choices": [
                                    {
                                        "name": "Row1",
                                        "value": "Row1"
                                    },
                                    {
                                        "name": "Row2",
                                        "value": "Row2"
                                    },
                                    {
                                        "name": "Row3",
                                        "value": "Row3"
                                    }
                                ]
                            },
                            {
                                "name": "name",
                                "description": "Enter the role name.",
                                "type": 3,
                                "required": true
                            },
                            {
                                "name": "description",
                                "description": "Enter the role description.",
                                "type": 3,
                                "required": true
                            },
                            {
                                "name": "role",
                                "description": "Enter the role ID if this role already exists, if not it will create one.",
                                "type": 8,
                                "required": false
                            },
                            {
                                "name": "emoji",
                                "description": "Enter an emoji that represents this role.",
                                "type": 3,
                                "required": false
                            },
                        ]
                    }
                ]
            },

        ]
        await client.guilds.cache.get("896789597802102804").commands.set(commands)
        console.log("Slash Commands Updated.");
        resolve()
    })
}
