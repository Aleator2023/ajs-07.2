export function formatPhoneNumber(phoneNumber) {
    // Удаляем все нецифровые символы из строки
    let digits = phoneNumber.replace(/\D/g, '');
  
    // Проверяем первую цифру и корректируем формат
    if (digits.startsWith('8') && digits.length === 11) {
      digits = '7' + digits.substring(1);
    }
  
    // Проверяем длину номера, чтобы определить, нужно ли добавлять код страны
    if (digits.length === 10) {
      digits = '7' + digits;
    }
  
    return '+' + digits;
  }
  