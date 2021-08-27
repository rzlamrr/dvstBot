# dvstBot - A WhatsApp Bot

> I am not responsible if you get banned because of using this bot!

## Available Commands
| Command | Description |
|------|-------------|
| all | Tag all members |
| bc | Broadcast to all chats |
| help | Show the bot's commands list |
| math | Calculate something |
| ping | PING PONG |
| sticker | Stickerify a picture |
| sysinfo | Shot bot's system info |
| ? | Another new thing soon |

## Features
| Name | Description |
| ---- | ----------- |
| Command handler | This bot uses a command handler which means every command has its own file; Easier to debug |
| ? | Another new thing soon |

## Installation
1. Clone this repo
```sh
git clone https://github.com/rzlamrr/dvstBot
cd dvstBot
```
2. Rename `sample_config.json` to `config.json` file, and fill the required variables
3. Install all the required dependencies
```sh
npm i
```
4. Start up the bot!
```sh
npm start
```
5. It will gives you a QR code which you can scan using your WhatsApp Web account
6. Your bot is online and ready to use. Test it by `.ping`

### Troubleshooting
Make sure all the necessary dependencies are installed: [troubleshooting.md](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md)

If you get stuck on linux(debian based): 
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

## Contributing
Fixing bug, adding new features, and more? Feel free to make a Pull requests.

## Credits
* [@zhycorp](https://github.com/zhycorp/whatsapp-bot) (the base)
* [@Urbaeexyz](https://github.com/Urbaeexyz/whatsapp-bot)

## License
This project is licensed under [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html).
