
import { test, expect} from "@playwright/test";

test.describe("visual", async () => {

    test("Title", async ({page}) => {

        await page.goto("/");
        await expect(page).toHaveTitle("JournalIO");
    })

})
