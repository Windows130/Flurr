const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let result = await lib.discord.users['@0.1.1'].me.status.update({
  activity_name: '1', // The custom status!
  activity_type: '2', // What it is doing. Available: LISTENING, STREAMING, WATCHING, GAME
  status: '3', // Bot Status. Available: ONLINE, INVISIBLE, DND, IDLE
});
