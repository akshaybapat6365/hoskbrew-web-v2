import { expect, test } from "@playwright/test";

test("offerings gallery: open, navigate, toggle view", async ({ page }) => {
  await page.goto("/products/offerings/crystal-mines");

  const firstCard = page
    .getByRole("button", { name: /^Open preview:/ })
    .first();
  await expect(firstCard).toBeVisible();
  await firstCard.focus();
  await page.keyboard.press("Enter");

  const title = page.locator("#offering-title");
  await expect(title).toBeVisible();
  const firstTitle = (await title.textContent()) ?? "";

  await page.getByRole("button", { name: "Next", exact: true }).click();
  await expect(title).not.toHaveText(firstTitle);

  await page.getByRole("button", { name: "Layout: Grid" }).click();
  await expect(
    page.getByRole("button", { name: /^Select:/ }).first(),
  ).toBeVisible();

  await page.getByRole("button", { name: "View: Immersive" }).click();
  await expect(
    page.getByRole("button", { name: "Exit immersive" }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click({ force: true });
  await expect(title).toBeHidden();
});
