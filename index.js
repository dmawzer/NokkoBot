const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.NokkoToken);
bot.start((ctx) => ctx.reply('Merhaba'));
bot.help((ctx) => ctx.reply('Nasıl yardımcı olabilirim?'));
bot.hears('selam', (ctx) => ctx.reply('selam'));

bot.launch();