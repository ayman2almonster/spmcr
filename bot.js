const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Agian !");

client.on("guildMemberRemove", member => {
	member.createDM().then (function (channel) {
		return channel.send(`
**
سلام عليكم يا قلبي :heart:
        فديتك :fleur_de_lis:                         [ https://discord.gg/cKQAHap ]
الدعوه خاصه لك ي قلبي ... [ $(member)  ]
**`)
}).catch(console.error)

})

client.on("guildMemberAdd", member => {
	member.createDM().then (function (channel) {
		return channel.send(`
**
سلام عليكم يا قلبي :heart:
        فديتك :fleur_de_lis:                         [ https://discord.gg/cKQAHap ]
الدعوه خاصه لك ي قلبي ... [ $(member)  ]
	**`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
