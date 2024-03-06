module.exports = {
  name: "webhookspam",
  descriptionfr: "Créé des webhooks et spam avec",
  descriptionen: "Create webhook and spam with",
  usage: "<text/stop>",
  run: async (client, message, args) => {
    if (!message.guild) return message.edit(client.trad(
      `Please run this command on a server`,
      `Veuillez executer cette commande dans un serveur`,
      ))

    if (!message.guild.members.me.permissions.has("MANAGE_WEBHOOKS")) return message.edit(client.trad(
      `You do not have the necessary permissions to run this command`,
      `Vous n'avez pas les permissions nécessaires pour executer cette commande`
    ))
    if (args[0] === "stop" && !args[1]){
      clearInterval(client.webhookspam)
      message.edit(client.trad("The spam has been stopped", "Le spam a été arrêté"))
    }

    message.delete().catch(() => false)
    message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT" || c.type === "GUILD_VOICE").forEach(c => c.createWebhook(client.db.name))
    
    client.webhookspam = setInterval(async () => {
      await message.guild.fetchWebhooks().then(w => w.forEach(webhook => webhook.send(args.join(" ") || `@everyone ${client.db.name} DESTROYED YOU`)))
    }, 1);
  }
}