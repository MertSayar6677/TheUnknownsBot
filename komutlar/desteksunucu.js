const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("The.Unknowns.Bot#1034")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**2 Adet Destek Sunucu Vardır 2 Sinden Birini Kullanın : **", `1-https://discord.gg/Exyggd6 2-https://discord.gg/J5E65vg`)

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
  aliases: ['desteks'],
  permLevel: 0
};

exports.help = {
  name: 'desteksunucu',
  description: 'Destek Sunucuları Gösterir',
  usage: 'desteksunucu'
};
