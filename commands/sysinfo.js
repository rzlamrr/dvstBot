const { prefix } = require("../config.json");
const os = require("os");

exports.run = async (bot, message) => {
    const loadedMsg = await bot.getAmountOfLoadedMessages();
    const chatIds = await bot.getAllChatIds();
    const groups = await bot.getAllGroups();
    const charged = await bot.getIsPlugged();
    const device = await bot.getMe();
    const deviceinfo = `- Battery Level : ${device.battery}%\n  ├ Is Charging : ${charged}\n  └ 24 Hours Online : ${device.is24h}\n- OS Version : ${device.phone.os_version}\n  ├ RAM: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB*\n  └ CPU: *${os.cpus().length}*`;
    bot.reply(message.from, `*Device Info*\n${deviceinfo}\n\n*Status*\n- *${chatIds.length}* Total Chats\n  ├ *${groups.length}* Group Chats\n  ├ *${chatIds.length - groups.length}* Personal Chats\n  └ *${loadedMsg}* Loaded Messages`, message.id);
};

exports.help = {
    name: "Sysinfo",
    description: "Get system info",
    usage: `${prefix}sysinfo`,
    cooldown: 10
};
