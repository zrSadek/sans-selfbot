const fs = require('fs')

module.exports = {
  name: "vert",
  descriptionfr: "Colore ton texte en vert",
  descriptionen: "Color your text to green",
  usage: "<text>",
  premium: true,
  invisible: true,
  run: async (client, message, args) => {
    if (!args[0]) return message.edit(client.trad("Please provide a text", "Veuillez envoyer un texte"))
    message.delete().catch(() => false)
    message.channel.send(`\`\`\`ansi\n[2;32m${args.join(' ')}\`\`\``)
  }
}