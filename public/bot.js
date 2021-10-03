// Require the necessary discord.js classes
const token = require('../config.json')
const { Client, Intents } = require('discord.js');

console.log(token.tokenId)

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token.tokenId);