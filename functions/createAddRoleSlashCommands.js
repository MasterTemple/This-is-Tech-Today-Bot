module.exports = async (client, guildId, choices) => {
    return new Promise(async(resolve, reject) => {
        let addSnowflakeId = (await client.guilds.cache.get(guildId).commands.fetch()).find(f => f.name = "add").id
        let rmSnowflakeId = (await client.guilds.cache.get(guildId).commands.fetch()).find(f => f.name = "remove").id
        if(addSnowflakeId){
            // console.log(addSnowflakeId);
            try{await client.guilds.cache.get(guildId).commands.delete(addSnowflakeId)}catch{}
        }
        if(rmSnowflakeId){
            // console.log(rmSnowflakeId);
            try{await client.guilds.cache.get(guildId).commands.delete(rmSnowflakeId)}catch{}
        }
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
                            "choices": choices
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
        })
        await client.guilds.cache.get(guildId).commands.create({
            "name": "remove",
            "description": "Remove a row from the embed's drop downs.",
            "options": [
                {
                    "name": "rows",
                    "type": 1,
                    "description": "Adds a drop down to a embed.",
                    "options": [
                        {
                            "name": "row",
                            "description": "Select the drop down title.",
                            "type": 3,
                            "required": true,
                            "choices": choices
                        }
                    ]
                },
                {
                    "name": "roles",
                    "type": 1,
                    "description": "Remove a role from a select menu.",
                    // "options": [
                    //     {
                    //         "name": "row",
                    //         "description": "Which drop down is this role in?",
                    //         "type": 3,
                    //         "required": true,
                    //         "choices": choices
                    //     }
                    // ]
                }
            ]
        })
        resolve()
    })
}