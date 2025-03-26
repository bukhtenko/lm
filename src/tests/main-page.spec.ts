import {test, expect} from '@playwright/test';

test('Відкрита головна сторінка', async ({page}) => {
    await page.goto('https://lmua-platform-e-commerce-web-prep-prep.gke-ualm-nprd-wine.priv.manawa.adeo.cloud');

    const title = await page.title();
    expect(title).toContain('Leroy Merlin Україна 🏠 Мережа будівельних гіпермаркетів')

    await expect(page).toHaveURL('https://lmua-platform-e-commerce-web-prep-prep.gke-ualm-nprd-wine.priv.manawa.adeo.cloud');
});
