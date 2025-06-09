
import { test, expect} from "@playwright/test";

test.describe("mainPage", async () => {

    test("MainPage has Title", async ({page}) => {

        await page.goto("/");
        await expect(page).toHaveTitle("JournalIO");
    })

})
