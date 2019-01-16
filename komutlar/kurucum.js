const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("The.Unknowns.Bot#1034")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Kurucu:**", `R3misTry#9359`)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kuran', 'owner', 'k', 'kurucu'],
  permLevel: 0
};

exports.help = {
  name: 'kurucum',
  description: 'Kurucuyu Gösterir',
  usage: 'kurucum'
};
