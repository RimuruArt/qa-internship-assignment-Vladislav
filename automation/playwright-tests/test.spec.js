
import { test, expect } from '@playwright/test';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// TC-001: Успешная отправка формы с корректными данными
test('Успешная отправка формы', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await page.fill('#name', 'Menzelincev Vladislav');
  await page.fill('#email', 'vlad2006555@yandex.ru');
  await page.fill('#phone', '+79052403036');
  await page.fill('#message', 'Тестовое сообщение');
  await page.check('input[type="checkbox"]');
  await page.click('#submit');
  await expect(page.locator('.success-message')).toBeVisible();
});

// TC-002: Проверка обязательных полей
test('Проверка обязательных полей', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await page.click('#submit');
  await expect(page.locator('.error')).toBeVisible();
});

// TC-003: Проверка email-валидации
test('Проверка валидации email', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await page.fill('#email', 'invalid-email');
  await page.click('#submit');
  await expect(page.locator('.email-error')).toBeVisible();
});

// TC-004: Проверка блока контактов
test('Проверка блока контактов', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  const block = page.locator('.contacts-block');
  await expect(block).toBeVisible();
  await expect(block).toContainText('Контакты');
});

// TC-005: Попытка отправки без согласия с политикой конфиденциальности
test('Отправка без согласия с политикой', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');
  await page.fill('#name', 'Иван');
  await page.fill('#email', 'vlad2006555@yandex.ru');
  await page.fill('#phone', '+79052403036');
  await page.fill('#message', 'Сообщение');
  // Не ставим чекбокс
  await page.click('#submit');
  await expect(page.locator('.checkbox-error')).toBeVisible();
});
