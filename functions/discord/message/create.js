const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const axios = require('axios')

const message = context.params.event.content
const bot_name = "name" //Made by Chunk "The name of your bot"
const channel_id = "channel-id" //Made by Chunk "The channel ID for where the bot to return an AI messae" (Must have developer mode turned on)

if(context.params.event.channel_id !== channel_id) return;
let returnMsg = await axios(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message)}&botname=${encodeURIComponent(bot_name)}&ownername=CTK WARRIOR&user=${context.params.event.author.id}`)
 returnMsg = returnMsg ? returnMsg.data : false;
 if(!returnMsg || !returnMsg.message) return;
await lib.discord.channels['@0.1.1'].messages.create({
  channel_id: context.params.event.channel_id,
  content: returnMsg.message,
  message_reference: {
    message_id: context.params.event.id
  }
});
