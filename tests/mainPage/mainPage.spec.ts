
import { test, expect} from "@playwright/test";

test.describe("mainPage", async () => {

    test("MainPage has Title", async ({page}) => {

        await page.goto("http://localhost:3000/");
        await expect(page).toHaveTitle("JournalIO");
    })

})
