import { tokenId, serverId, channelId } from "../config.js"
import { createServer } from "./server.js"
import { Client, Intents } from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const app = createServer(client)

client.login(tokenId)

app.listen(3000, () => {
  console.log("Express server is listening on port 3000")
});