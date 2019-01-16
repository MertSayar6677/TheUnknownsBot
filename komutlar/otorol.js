const fs = require("fs");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Komutu kullanmak için `Rolleri Yönet` Yetkisine sahip olmalısın.");
    let otorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
    if (!args[0]) { 
        otorol[message.guild.id] = {
            role: 0
        };
        fs.writeFile("./otorol.json", JSON.stringify(otorol), (err) => {
            if (err) console.log(err);
        });
        message.reply("Lütfen bir rol ismi yazın.");
   }
    if (args[0]) { 
        let roles = args.join(" ");
        let role = message.guild.roles.find("name", roles);
        otorol[message.guild.id] = {
            role: role.id
        };
        fs.writeFile("./otorol.json", JSON.stringify(otorol), (err) => {
            if (err) console.log(err)
        });
        message.reply(`Otorol ayarlandı: **${role.name}**`);
    }
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['otorol', 'oto-rol', 'oto-rol-ayarla'],
 permLevel: 4
};

exports.help = {
 name: 'Otorol',
 description: 'otorol ayarlar',
 usage: 'otorol'
};