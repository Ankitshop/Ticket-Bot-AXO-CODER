let clc = require('cli-color');
module.exports = async (client) => {
  client.logger(clc.bgYellowBright(`Reconnceting at ${new Date()}.`));
    //======= Alert on support server
   let Sguild = client.guilds.cache.get(client.config.discord.server_id);
    let channel = Sguild.channels.cache.get(client.config.discord.server_channel_log);
  try{
    channel.send({
      content: `${client.emotes.cpu}| Bot is offline${client.emotes.off} for now.`
    })
  }catch{
  }
    setInterval(() => {
     if(!client || !client.user) {
        client.logger("The Client Didn't Login Proccesing Kill 1")
        process.kill(1);
    } else {
   }
  }, 10000); 
}
