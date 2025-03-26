import {test, expect} from '@playwright/test'

test('Логін', async ({page}) => {
    await page.locator('#path-2-inside-2_555_2635"').click;
    await page.locator(placeholder="+38 (0--) --- -- --").click;
    await page.locator(placeholder="+38 (0--) --- -- --").fill('+38 (050) 000 00 00');
    await page.locator(.css-18nzikr).click;
});