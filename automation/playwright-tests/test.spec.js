// Тесты Playwright


const { test, expect } = require('@playwright/test');

test.describe('Проверка формы регистрации', () => {
  test('Успешная отправка формы с корректными данными', async ({ page }) => {
    await page.goto('http://example.com/register');
    await page.fill('#name', 'Иван Иванов');
    await page.fill('#email', 'ivan.ivanov@example.com');
    await page.fill('#password', 'ValidPass123');
    await page.fill('#confirmPassword', 'ValidPass123');
    await page.check('#terms');  // отмечаем чекбокс согласия
    await page.click('#submit');
    await expect(page.locator('.success-message')).toContainText('Спасибо за регистрацию');
  });

  test('Отображается ошибка при некорректном email', async ({ page }) => {
    await page.goto('http://example.com/register');
    await page.fill('#email', 'invalid-email');  // некорректный формат
    await page.click('#submit');
    await expect(page.locator('.error-message')).toContainText('Некорректный формат email');
  });

  test('Отображается ошибка при пустом обязательном поле', async ({ page }) => {
    await page.goto('http://example.com/register');
    // Поле "Имя" остаётся пустым (обязательное поле)
    await page.click('#submit');
    await expect(page.locator('.error-message')).toContainText('Поле "Имя" обязательно для заполнения');
  });

  test('Проверка наличия блока с преимуществами на главной странице', async ({ page }) => {
    await page.goto('http://example.com');
    // Проверяем, что заголовок блока с преимуществами виден
    await expect(page.locator('h2', { hasText: 'Наши преимущества' })).toBeVisible();
  });

  test('Навигация: ссылка "О компании" ведёт на правильную страницу', async ({ page }) => {
    await page.goto('http://example.com');
    await page.click('text=О компании');  // клик по пункту меню
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1')).toHaveText('О компании');
  });
});
