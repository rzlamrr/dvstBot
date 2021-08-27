const { prefix } = require("../config.json");

exports.run = async (bot, message, args, isOwner) => {
    if (!isOwner) return bot.reply(message.from, "Owner Only!", message.id);
    const txt = `*dvstBroadCast*\n\n${args.join(" ")}`;
    const groups = await bot.getAllChatIds();
    let c = 0;
    for (const group of groups) {
        bot.sendText(group, txt).then(() => c++);
    }
    bot.reply(message.from, `Broadcast succeed for ${c} chats.`, message.id);
};

exports.help = {
    name: "Broadcast",
    description: "BroadCast message to all chat.",
    usage: `${prefix}bc`,
    cooldown: 5
};
