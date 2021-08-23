const { prefix } = require("../config.json");

exports.run = async (bot, message) => {
    const txt = `*dvstBroadCast*\n\n${message.body.slice(4)}`;
    const groups = await bot.getAllChatIds();
    let c = 0;
    for (const group of groups) {
        bot.sendText(group, txt);
        c++;
    }
    bot.reply(message.from, `Broadcast succeed for ${c} chats.`, message.id);
};

exports.help = {
    name: "Broadcast",
    description: "BroadCast message to all chat.",
    usage: `${prefix}bc`,
    cooldown: 5
};
