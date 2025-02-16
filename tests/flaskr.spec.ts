import { test, expect } from "@playwright/test";

const FLASKR_URL: string = "http://127.0.0.1:5000/";

test("has title", async ({ page }) => {
  await page.goto(FLASKR_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Flaskr/);
});

test("has level one heading", async ({ page }) => {
  await page.goto(FLASKR_URL);

  // Expects page to have a heading with the name of Posts
  await expect(page.getByRole("heading", { name: "Posts" })).toBeVisible();
});
