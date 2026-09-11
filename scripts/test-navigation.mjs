import assert from "node:assert/strict";
import { test } from "node:test";
import { chromium } from "playwright";

const baseURL = process.env.TEST_BASE_URL || "http://localhost:3000";

test("About and Projects navigation opens each page at the top", async () => {
  const browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined
  });

  try {
    for (const width of [1280, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 800 } });
      page.setDefaultTimeout(10_000);
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));

      for (const menu of [false, true]) {
        for (const route of ["about", "projects"]) {
          // Cover navigation from the homepage, another page, and the same page.
          for (const source of ["/", route === "about" ? "/projects" : "/about", `/${route}`]) {
            console.log(`${width}px ${menu ? "command menu" : "header"}: ${source} → /${route}`);
            await page.goto(new URL(source, baseURL).href);
            await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
            await page.waitForFunction(() => window.scrollY > 100);

            if (menu) {
              await page.getByRole("button", { name: "Open site overview" }).click();
            }

            const scope = menu
              ? page.getByRole("dialog", { name: "Site overview" })
              : page.getByRole("navigation", { name: "Primary navigation" });
            const link = scope.getByRole("link", { name: new RegExp(`^${route}\\b`, "i") });
            assert.equal(await link.getAttribute("href"), `/${route}`);
            await link.click();
            await page.waitForURL((url) => url.pathname === `/${route}` && !url.hash);
            await page.waitForFunction(() => window.scrollY <= 1);

            const intro = page.locator(route === "about" ? "#about-title" : ".page-intro h1");
            const box = await intro.boundingBox();
            assert.ok(box && box.y >= 0 && box.y < 800, `${route} intro should be in the viewport`);
          }
        }
      }

      assert.deepEqual(errors, [], "Navigation should not cause browser errors");
      await page.close();
    }
  } finally {
    await browser.close();
  }
});
