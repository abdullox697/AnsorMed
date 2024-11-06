// Formani olish
const form = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');

// Formani yuborish jarayonini ushlab turish
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Formaning default ishini (sahifani yangilash) to‘xtatish

  // Foydalanuvchi ma'lumotlarini olish
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Bu yerda siz ma'lumotlarni serverga yuborish yoki validatsiya qilishni amalga oshirishingiz mumkin.

  // Formani yashirish
  form.style.display = 'none';

  // Xabarni ko‘rsatish
  successMessage.style.display = 'block';

  // Xabarni avtomatik ravishda 5 soniya davomida ko‘rsatish va so‘ngra yashirish
  setTimeout(function () {
    successMessage.style.display = 'none';
    form.style.display = 'block';
    form.reset(); // Formani tozalash
  }, 5000); // 5 soniya
});
