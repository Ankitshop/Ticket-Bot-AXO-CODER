//======== Packages ========
require('dotenv').config()
const config = require(`${process.cwd()}/storage/config.js`);
const { 
  ShardingManager
} = require('discord.js');
if(config.source.sharding){
  const manager = new ShardingManager(`${process.cwd()}/bot.js`, { 
    totalShards: "auto",
    token: config.discord.token 
  });
  manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
  manager.spawn();
}else{
  require(`${process.cwd()}/bot.js`)
}
