import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Welcome to the bot!");
});

bot.onText(/\/auto-reply (.+)/, (msg, matcher) => {
  const chatId = msg.chat.id;
  const replyMessage = matcher[1];

  bot.sendMessage(chatId, `Auto-reply message set to: ${replyMessage}`);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  console.debug("Message received", msg);

  // Ignore commands
  if (msg.text.startsWith("/")) return;

  bot.sendMessage(chatId, "Received your message");
});
