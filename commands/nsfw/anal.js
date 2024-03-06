const fs = require('fs')

module.exports = {
  name: "anal",
  descriptionfr: "Envoie une image d'anal",
  descriptionen: "Send an anal picture",
  nsfw: true,
  premium: true,
  invisible: true,
  run: async (client, message, args) => {
    const { body } = await client.superagent.get(`https://nekobot.xyz/api/image?type=anal`)
    message.edit(body.message)
  }
}