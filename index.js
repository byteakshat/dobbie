const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();
const fetch = require("node-fetch");
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm"); 
client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.on("messageCreate", async message => {
  if (message.author.id === client.user.id) return;

  message.markSeen();

    let content = message.content;
      if(!content) return;
          chatbot.getReply(content).then(r => message.reply(r));
            });

client.login('medobbie', 'sepcco74'); 
