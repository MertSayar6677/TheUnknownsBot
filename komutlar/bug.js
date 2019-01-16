const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "419429914391871508";
	var channelID = "486855229170515978";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **!!bug <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Bug")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Bug", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Botta Olan Bugu İlettiğiniz İçin Teşekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bug"], 
  permLevel: 0 
};

exports.help = {
  name: 'bug', 
  description: "bota buglarınızı gönderirsiniz", 
  usage: 'bug <mesaj>' 
};