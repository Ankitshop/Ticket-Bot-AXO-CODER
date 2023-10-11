const clc = require('cli-color');
module.exports = async (client, error, id) => {
  client.logger(clc.redBright(`Shard #${id} Errored`));
  setInterval(() => {
      client.logger("The Client Didn't Login Proccesing Kill 1")
        process.kill(1);
  }, 10000); 
}
