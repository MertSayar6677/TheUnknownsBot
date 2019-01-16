const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Ana Komutlar    Yapımcı : R3misTry#9359**\n\n\n' + '!!davet • Botun davet linkini atar.\n!!bug • Bottaki bugu bildirmenizi sağlar.\n!!ping • Botun pingini gösterir.\n!!ailemiz • Bot hangi sunucularda olduğunu gösterir.\n!!kurucum • Botu kimin yaptığını gösterir.\n!!sunucuemojileri • Sunucunun Emojilerini Gösterir\n!!yaz • Bota İstediğiniz Şeyi Yazdırır.\n!!disko • Renginiz Yanıp Söner (Çalışması Websitedeki Kurulumu Yapın)\n!!website • Botun Websitesini Gösterir\n!!desteksunucu • Destek Sunucuları Gösterir',
              '**Eğlence Komutları**\n\n\n' + '!!google • Googlede arama yapar.\n!!tokat • Etiketlediğin kişiye tokat atar.\n!!8ball • Bota soru sorar.\n!!steamoyun • Steam oyunlarının bilgilerini ve fiyatını gösterir.\n!!balıktut • Balık tutarsınız.\n!!coolresim • Rastgele coolresim gösterir.\n!!çayiç • Çay içersiniz.\n!!çayaşekerat • Çaya şeker atarsınız.\n!!herkesebendençay • Herkese çay ısmarlarsınız.\n!!emojiyazı • Yazılarınızı Emojiye Dönüştürür.\n!!havadurumu • Havadurumunu Gösterir\n!!hesapla • Matematik işlemi yapar.\n!!öp • Etiketlediğiniz kişiyi öper.\n!!saat • Saati gösterir.\n!!sarıl • Etiketlediğin kişiye sarılır.\n!!sigaraiç • Sigara içersiniz.\n!!slots • Slots oyununu oynarsınız.\n!!beniseviyormusun • Botun sizi ne kadar sevdiğini gösterir.\n!!yazıtura • Yazı mı? Tura mı?.\n!!tersyaz • İstediğin yazıyı ters yazar.\n!!espriyap • Bot size espri yapar.\n!!döviz • Dövizi gösterir.\n!!köpek • Rastgele köpek fotorafları gösterir.\n!!kedi • Rastgele kedi fotorafları gösterir.',
              '**Eğlence Komutları 2**\n\n\n' + '!!trigger • Profilinize Triggered Ekler\n!!wasted • Profilinize Wasted Ekler\n!!sniper • Profilinize Sniper Ekler\n!!kasaaç • CS:GO Kasası Açar\n!!komikgif • Komik Gifler Gösterir\n!!stresçarkı • Stres Çarkı Çevirirsiniz\n!!çeviri • Bot Çeviri Yapar\n!!tkm • Taş Kağıt Makas Oynarsınız(Botla)\n!!csgo • CSGO Profilini Gösterir\n!!kafasınasık • Kafasına Sıkarsınız\n!!cowsay • Mesajınızı İnek Yazar\n!!fakemesaj (etkiket)(mesaj) • Birisine Mesaj Yazdırırsınız',
              '**Moderatör Komutları**\n\n\n' + '!!ban • Belirttiğiniz kişiyi sunucudan banlar.\n!!kick • Belirttiğiniz kişiyi sunucudan atar.\n!!geçici-sustur • Belirttiğin kişiyi yazdığınız süre kadar susturur.\n!!temizle • Sohbeti belirttiğin sayı kadar mesaj siler.\n!!unban • Belirttiğin kişinin sunucudaki yasağını kaldırır.\n!!reklamtaraması • Reklam taraması yapar sadece oynuyor kısmı için.\n!!uyar • Belirtilen kişiyi bir sebebten uyarır.\n!!oylama • Oylama başlatır\n!!kilit • Bir kanalı belirtilen süre kadar kitler.\n!!otorol • Otorol Ayarlar Etiketlemeden Rolün İsmini Yazınız\n!!giriş-çıkış-ayarla • Gelen Giden Kanalını Ayarlar\n!!sayaç(sayı) • Sayaç Ayarlar (Sayaç) Adlı Bir Kanal Olması Lazım\n!!yavaşmod (sayı) • Yavaş Modu Çalıştırırsınız',
              '**Kullanıcı Komutları**\n\n\n ' + '!!sunucuresmi • Sunucunun iconunu gösterir.\n!!kullanıcıbilgim • Bu komutu kullananın hakkında bilgi verir.\n!!avatarım • Bu komutu kullananın avataraını gösterir.\n!!sunucubilgi • Hangi Sunucuda Kullanırsanız O Sunucuda Çalışır\n!!canlıdestek • Canlı Destek Çalıştırırsınız\n!!top10 • Top 10 Sunucuyu Gösterir',
              '**Müzik Komutları**\n\n\n' + 'BAKIMDADIR :warning: :warning:',
			  '**NSFW Komutları**\n\n\n' + '!!nsfw • +18 Resim Gösterir(NSFW Kanalı Olmadan Çalışmaz)',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};