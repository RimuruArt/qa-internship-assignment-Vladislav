# QA Internship Assignment — Vladislav Menzelincev

## 🔍 Project Overview

This repository contains the practical and theoretical components of a QA internship assignment for testing the website [https://www.voxys.ru](https://www.voxys.ru).

It includes:

- ✅ Manual test cases
- 🐞 Bug reports
- 🤖 Automated tests (Playwright)
- 📘 Theoretical answers
- 🔗 Link validation
- 📡 API testing (Postman)

## 📁 Repository Structure

```
qa-internship-assignment-vladislav/
├── automation/
│   └── playwright-tests/
│       └── test.spec.js
├── bug-reports/
│   ├── BUG-001.md
│   └── BUG-002.md
├── test-cases/
│   ├── test-cases.xlsx
│   └── link-check.xlsx
├── postman/
│   └── (if applicable)
├── Теоретическая_часть.docx
└── README.md
```

## 🚀 Running the Automated Tests

1. Install dependencies:

```bash
npm install @playwright/test
```

2. Run the test suite:

```bash
npx playwright test automation/playwright-tests/test.spec.js
```

## 👤 Author

**Vladislav Menzelincev**  
📧 Email: vlad2006555@yandex.ru  
📱 Phone: +7 905 240-30-36

## 📝 Notes

- All tests are based on the current version of [https://www.voxys.ru/contacts.html](https://www.voxys.ru/contacts.html)
- The automated tests use Playwright with standard locators and DOM-based validation
- Link check results and all test documentation are located in respective folders
