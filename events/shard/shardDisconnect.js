const clc = require('cli-color');
module.exports = async (client, event, id) => {
  client.logger(clc.redBright(`Shard #${id} Disconnected`));
  setInterval(() => {
      client.logger("The Client Didn't Login Proccesing Kill 1")
        process.kill(1);
  }, 10000); 
}
