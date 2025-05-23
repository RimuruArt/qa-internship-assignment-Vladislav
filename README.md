# QA-интернатура: тестовое задание (Владислав)

## Описание проекта
Это демонстрационный проект для прохождения стажировки QA. В проекте содержатся:
- **Теоретическая часть** (`theory.md`) — ответы на ключевые вопросы по тестированию с пояснениями и примерами.
- **Тест-кейсы** (`test-cases/test-cases.xlsx`) — таблица с позитивными и негативными сценариями для формы обратной связи.
- **Проверка ссылок** (`test-cases/link-check.xlsx`) — результаты проверки пунктов меню сайта.
- **Баг-репорты** (`bug-reports/BUG-001.md`, `BUG-002.md`, `BUG-003.md`) — пример оформленных отчетов о найденных дефектах (с подробным описанием, шагами, ожидаемым и фактическим результатом, степенью серьёзности и приоритетом, а также скриншотами-заглушками).
- **Автотесты** (`automation/playwright-tests/test.spec.js`) — набор автоматизированных тестов на Playwright (не менее 5 сценариев, включая проверку отправки формы, валидаций и наличия блока контактов).
- **JS-валидация Email** (`automation/emailValidation.js`) — пример функции валидации email и её подключение к форме.
- **REST API (Postman)** (`postman/postman_collection.json`, `postman/request_description.md`) — пример GET-запроса к публичному API и описание запроса/ответа.
- **README.md** — этот файл.

## Запуск автотестов
Тесты написаны с использованием Playwright (Node.js). Для запуска:
1. Установите [Node.js](https://nodejs.org/) (версии 14+).
2. В корне проекта выполните `npm install @playwright/test`.
3. Запустите тесты командой:  
   ```bash
   npx playwright test
