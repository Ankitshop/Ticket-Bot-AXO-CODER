const clc = require('cli-color');
module.exports = async (client, id) => {
  client.logger(clc.magentaBright(`Shard #${id} Reconnecting`));
  setInterval(() => {
        client.logger("The Client Didn't Login Proccesing Kill 1")
        process.kill(1);
  }, 10000); 
}
