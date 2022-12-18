const { prefix } = require('../config.json')

exports.run = async (bot, message) => {
  const link = message.body.slice(6)
  await bot.joinGroupViaLink(link)
    .then(async () => {
      await bot.reply(message.from, 'Joined via invite link!', message.id)
    })
}

exports.help = {
  name: 'Join',
  description: 'Join group via invite link.',
  usage: `${prefix}join`,
  cooldown: 25
}
