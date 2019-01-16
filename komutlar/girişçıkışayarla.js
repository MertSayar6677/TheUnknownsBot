const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız.') 
        
     else {
        if (!message.mentions.channels.first()) {
            message.channel.send("Lütfen giriş çıkış mesajlarının ayarlanacağı kanalı etiketleyin.");
        }
        
        let toSet = message.mentions.channels.first().id;
        let toSetNAME = message.mentions.channels.first().name;
        let giriscikis = JSON.parse(fs.readFileSync("./giriscikis.json", "utf8"));

        if (!toSet || !toSetNAME) {
            message.channel.send("Lütfen giriş çıkış mesajlarının ayarlanacağı kanalı etiketleyin.");
        }

        giriscikis[message.guild.id] = {
            giriscikis: toSet
        }

        fs.writeFile("./giriscikis.json", JSON.stringify(giriscikis), (err) => {
            if (err) console.log(err);
        });

        let wlEmbed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("Gririş-Çıkış")
            .setDescription(`Artık Giriş/Çıkış Mesajları <#${toSet}> Kanalına Gönderilicek.`);

        message.channel.send(wlEmbed);
    }
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['girişçıkışayarla', 'girişçıkış', 'giriş-çıkış'],
 permLevel: 4
};

exports.help = {
 name: 'giriş-çıkış-ayarla',
 description: '',
 usage: 'giriş-çıkış-ayarla'
};