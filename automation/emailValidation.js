// JS валидация email

// JS-валидация Email для формы

function validateEmail() {
  const emailField = document.getElementById('email');
  const email = emailField.value;
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;  // регулярное выражение для проверки Email
  if (!regex.test(email)) {
    // Вывести сообщение об ошибке в соответствующий элемент
    document.getElementById('emailError').textContent = 'Некорректный формат email';
    return false;
  }
  // Если формат верный, очищаем сообщение об ошибке
  document.getElementById('emailError').textContent = '';
  return true;
}

// Пример подключения функции к событию отправки формы
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  if (!validateEmail()) {
    // Останавливаем отправку формы, если email не валиден
    event.preventDefault();
  }
});
