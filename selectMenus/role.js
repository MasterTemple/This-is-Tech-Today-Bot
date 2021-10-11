module.exports = async(interaction, config) => {
    interaction.values.forEach((eachRole) => {
        interaction.member.roles.add(eachRole)
    })
    interaction.reply({content: "Roles Added!", ephemeral: true})
}