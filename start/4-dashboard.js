var clc = require("cli-color");
module.exports = async (client) => {
//======== Loading Dashboard =========
Array(client.config.source.dashboard ?  `index.js` : null)
  .filter(Boolean)
  .forEach((dashboard) => {
    require(`${process.cwd()}/dashboard/${dashboard}`)(client);
try {
    const stringlength = 69;
    console.log("\n")
    console.log(clc.yellowBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + clc.greenBright(`                    Dashboard Is Loaded!!`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `                    Dashboard Is Loaded!!`.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
    console.log("\n")
  } catch { /* */ }
});  
}
