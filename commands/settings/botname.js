const fs = require('fs')

module.exports = {
  name: "botname",
  descriptionfr: "Modifie le nom du selfbot",
  descriptionen: "Edit the selfbot's name",
  usage: "<name>",
  premium: true,
  run: async (client, message, args) => {
    if (!args[0]) return message.edit(client.trad("Please enter a valid name", "Veuillez entrer un nom valide"))
    client.db.name = args.join(' ')
    client.save()
    message.edit(client.trad("The selfbot's name has been edited", "Le nom du selfbot a été modifié"))
  }
}