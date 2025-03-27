import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");

  // закрити вікно з пропозицією підписки
  await page
    .locator(".cl-floating-box-close-icon > svg > path:nth-child(3)")
    .click();

  //перехід у потрібну категорію
  await page
    .getByRole("link", { name: "Будівельні матеріали preview" })
    .click();
  await page.getByRole("link", { name: "Круг металевий" }).click();
  await page
    .getByRole("article")
    .filter({ hasText: "Код: 11631431" })
    .getByRole("button")
    .click();

  // перехід в чекаут
  await page.getByRole("button", { name: "Оформити замовлення" }).click();
  await page
    .locator("section")
    .filter({ hasText: "Ваше місто" })
    .getByRole("button")
    .click();
  await page.getByRole("option", { name: "м. Київ, обл. Київська" }).click();

  // юзер логіниться в чекауті
  await page.getByRole("textbox", { name: "+38 (0--) --- -- --" }).click();
  await page
    .getByRole("textbox", { name: "+38 (0--) --- -- --" })
    .fill("+38 (050) 000 00 00");
  await page.getByRole("button", { name: "Вхід" }).click();
  await page.locator('input[name="code"]').click();
  await page.locator('input[name="code"]').fill("111111");
  await page
    .locator("#modal")
    .getByRole("button", { name: "Підтвердити" })
    .click();

  // вибір виду доставки
  // await page.getByRole("button", { name: "Обрати" }).first().click();

  // використав css селектор для кнопки
  // await page
  //   .locator(
  //     "div.css-hiiqc6:nth-child(3) > div:nth-child(1) > button:nth-child(2)"
  //   )
  //   .click();

  const buttonDelivery = page.locator(
    "div.css-hiiqc6:nth-child(3) > div:nth-child(1) > button:nth-child(2)"
  );
  // Перевірка, що елемент видимий і час на це 5 секунд
  // await expect(buttonDelivery).toBeVisible({ timeout: 5_000 });

  await buttonDelivery.click();

  await page
    .locator("label")
    .filter({ hasText: "Самовивіз з магазину" })
    .click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Круг металевий 8" })
    .getByRole("combobox")
    .click();
  await page.getByRole("option", { name: "Київ, вул. Полярна, 17А" }).click();
  await page.getByRole("button", { name: "Продовжити" }).click();

  // вибір виду оплати
  await page
    .getByRole("listitem")
    .filter({ hasText: "Оплата при отриманні" })
    .locator("span")
    .click();
  await page.getByRole("button", { name: "Продовжити" }).click();

  await page
    .locator("section")
    .filter({ hasText: "Додати коментар до замовлення" })
    .locator("span")
    .click();
  await page.getByRole("textbox", { name: "Ваш коментар" }).click();
  await page.getByRole("textbox", { name: "Ваш коментар" }).fill("pw test 1");
  await page.getByRole("button", { name: "Підтвердити" }).click();
  await page.getByRole("link", { name: "На головну" }).click();
});
