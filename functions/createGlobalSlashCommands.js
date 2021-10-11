module.exports = async(client) => {
    return new Promise(async (resolve, reject) => {
        await client.application.commands.set([{
            "name": "create",
            "type": 1,
            "description": "Create an Embed for Roles",
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
                    "description": "Enter a URL to the image.",
                    "type": 3,
                    "required": false
                },
                {
                    "name": "thumbnail",
                    "description": "Enter a URL to the thumbnail.",
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
        }])
        resolve()
    })
}