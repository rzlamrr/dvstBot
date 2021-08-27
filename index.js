/* eslint-disable no-undef */
const prefix = require("./config.json").prefix;
const whatsapp = require("@open-wa/wa-automate");
const fs = require("fs");
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const availableCommands = new Set();

fs.readdir("./commands", (e, files) => {
    if (e) return console.error(e);
    files.forEach(commandFile => {
        availableCommands.add(commandFile.replace(".js", ""));
    });
});

whatsapp.create({
    blockCrashLogs: true,
    chromiumArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
    disableSpins: true,
    headless: true,
    hostNotificationLang: "PT_BR",
    logConsole: false,
    popup: true,
    qrTimeout: 0,
    sessionId: "dvstBot",
    useChrome: true
}).then(bot => start(bot));

let args;
let command;

function start(bot) {
    console.log("[BOT] dvstBot is now running!");
    bot.onStateChanged(async state => {
        if (state === "CONFLICT" || state === "UNLAUNCHED") bot.forceRefocus();
        console.log("[CLIENT]", state);
    });

    bot.onMessage(async message => {
        message.restTimestamp = Date.now();
        cmd = message.caption || message.body || "";
        if (cmd.startsWith(prefix)) {
            args = cmd.slice(prefix.length).trim().split(/ +/g);
            command = args.shift().toLowerCase();
            sender = message.sender.pushname;
        } else {
            return;
        }
        if (availableCommands.has(command)) {
            console.log(`[EXEC] ${message.chat.name || message.chat.formattedTitle}: ${sender}: ${command} [${args.length}] ${moment(message.t * 1000).format("DD/MM/YY HH:mm:ss")}`);
            require(`./commands/${command}`).run(bot, message, args);
        }
    });

    bot.onIncomingCall(async callData => {
        await bot.sendText(callData.peerJid, "*Beep boop!*\nCan't receive call for now.\n\n```- dvstBot```")
            .then(async () => {
                await bot.contactBlock(callData.peerJid);
            });
    });
}
