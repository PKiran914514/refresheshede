import { test, expect } from "@playwright/test";
import { await , fill } from "module";




test("log_in",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator(`.ico-login`).click();
    await page.locator(`#Email`).fill(`kbp123@gmail.com`);
    await page.locator(`Password`).fill(`Manufacturers`);
    await page.locator(`.button-1.login-button`).click();

})

test("log_in",async({page})=>{


    await 

    

})
