const Discord = require('discord.js'),
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
    

console.log("تم التشغيل,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("570293955653140495");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Ꮃelcome Ꭲo Ꮪerver Express**`), 6000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "570293955653140499" && ch.type === 'voice').join();

});










 const devs = ['525074122242523145' , '' , ''];

const adminprefix = "!";

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!devs.includes(message.author.id)) return;

      

  if (message.content.startsWith(adminprefix + 'ply')) {

    client.user.setGame(argresult);

      message.channel.sendMessage(`**  ${argresult} ply .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'wt')) {

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.sendMessage(`**  ${argresult} wt .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'ls')) {

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.sendMessage(`**  ${argresult} ls .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'st')) {

    client.user.setGame(argresult, "https://www.twitch.tv/muuuuuute");

      message.channel.sendMessage(`**  ${argresult} st .. ✅**`)

    }

  if (message.content.startsWith(adminprefix + 'us')) {

  client.user.setUsername(argresult).then

      message.channel.send(`**us ..**${argresult}** `)

  } else

  if (message.content.startsWith(adminprefix + 'av')) {

  client.user.setAvatar(argresult);

    message.channel.send(`**avatar ... :** `);

  }

  });

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client2.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client2.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client2.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client3.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client3.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client4.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client4.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

//

client5.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client5.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
///////
client5.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client5.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/XPcf6zx ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
client5.login(process.env.BOT_TOKEN5);
