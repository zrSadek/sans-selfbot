const fs = require('fs')

module.exports = {
  name: "ass",
  descriptionfr: "Envoie une image de fesses",
  descriptionen: "Send an ass picture",
  nsfw: true,
  premium: true,
  invisible: true,
  run: async (client, message, args) => {
    const { body } = await client.superagent.get(`https://nekobot.xyz/api/image?type=ass`)
    message.edit(body.message)
  }
}