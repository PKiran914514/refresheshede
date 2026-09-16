import {test , expect, Locator} from "@playwright/test"

test("Playwright_locators",async ({page})=>{



    await page.goto("https://testautomationpractice.blogspot.com/");
    let name ="kiran";
    let emailId="kiran@gmail.com";
    let phone_number="9145144444"
    let adress= "at post abc , tal cvd, dist nkll, 422109"

    

    await page.getByRole('textbox', { name: 'Enter Name' }).fill(name+`by_getbyrole`);
    
    await page.getByPlaceholder(`Enter Name`).fill("kiran_by_placeholder")
    await page.getByRole('textbox', { name: 'Enter EMail' }).fill(emailId);
    await page.getByRole('textbox', { name: 'Enter Phone' }).fill(phone_number);
    await page.getByRole('textbox', { name: 'Address:' }).fill(adress);
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Sunday' }).click();
    await page.getByLabel('Country:').selectOption("Canada");

    await page.getByLabel('Colors:').selectOption("Red");
    await page.getByLabel('Sorted List:').selectOption("cheetah"); 

    await page.getByText('Date Picker 1 (mm/dd/yyyy):').click();
    await page.locator('#datepicker').fill("12/06/2016");
    await page.getByText('Form Elements Name: Email:').click();

    await page.getByText('Date Picker 2 (dd/mm/yyyy) :').click();
    await page.locator('#txtDate').click();
    await page.getByLabel('Select year').selectOption("2020");

    await page.getByLabel('Select month').selectOption("Jun");

    await page.getByRole('link', { name: '12' }).click();


  
    

    await page.getByPlaceholder('Start Date').fill('2026-09-02');
    await page.getByPlaceholder('End Date').fill('2027-09-02');
    await page.getByRole('button', { name: 'Submit' }).click

})




