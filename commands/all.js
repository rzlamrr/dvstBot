const { prefix } = require("../config.json");

exports.run = async (bot, message) => {
    const guid = message.isGroupMsg ? message.chat.groupMetadata.id : "";
    const members = await bot.getGroupMembers(guid);
    let tag = "";
    for (let i = 0; i < members.length; i++) {
        tag += `\n@${members[i].id.replace(/@c.us/g, "")}`;
    }
    bot.sendTextWithMentions(message.from, `TagAll ${tag}`, message.id);
};

exports.help = {
    name: "TagAll",
    description: "Tag everyone in current group.",
    usage: `${prefix}all`,
    cooldown: 20
};
