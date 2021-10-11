module.exports = async(interaction, config) => {
    let currentRoles = interaction.member.roles.cache
    let added = false
    let removed = false
    interaction.values.forEach((eachRole) => {
        if(currentRoles.has(eachRole)){
            interaction.member.roles.remove(eachRole)
            added = true
        }else{
            interaction.member.roles.add(eachRole)
            removed = true
        }
    })
    if(added && removed){
        interaction.reply({content: "Roles Updated!", ephemeral: true})
    }else if(added){
        interaction.reply({content: "Roles Added!", ephemeral: true})
    }else if(removed){
        interaction.reply({content: "Roles Removed!", ephemeral: true})
    }
}