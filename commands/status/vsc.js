const fs = require('fs')

module.exports = {
  name: "vsc",
  descriptionfr: "Vous fait jouer à Visual Studio Code",
  descriptionen: "Play Visual Studio Code",
  run: async (client, message, args) => {
    client.db.rpc = true
    client.db.rpcname = "Visual Studio Code"
    client.db.rpcdetails = "Editing index.js"
    client.db.rpcstate = `Workspace: ${args.slice(0).join(' ') || "No workspace"}`
    client.db.rpclargeimage = "mp:attachments/1112323981484236810/1112324130633687100/808841241142755358.png"
    client.db.rpclargeimagetext = "Editing a JAVASCRIPT file"
    client.db.rpcsmallimage = "mp:attachments/1112323981484236810/1112324123130073148/565945770067623946.png"
    client.db.rpcsmallimagetext = "Visual Studio Code"
    client.db.rpctype = "PLAYING"
    client.db.rpctimestamp = true
    client.db.rpcpartymin = null
    client.db.rpcpartymax = null
    client.db.rpcbuttontext = null
    client.db.rpcbuttonlink = null
    client.db.rpcbuttontext2 = null
    client.db.rpcbuttonlink2 = null
    client.save()
    client.rpc()

    message.edit(client.trad(`You're now playing to \`${args.slice(0).join(' ') || "No workspace"}\` on **Visual Studio Code**`, `Vous travailler sur \`${args.slice(0).join(' ') || "No workspace"}\` dans **Visual Studio Code**`))
  }
}