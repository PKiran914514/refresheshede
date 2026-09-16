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

    // let catagaris =page.locator(`//ul[@class='top-menu']//a`)  //inside a link and text preset
    // let cards = page.locator(`.item-box`)                      // 
    
    

    let tital_of_books_from_database =["Computing and Internet","Copy of Computing and Internet EX" ,"Fiction", "Fiction EX" , "Health Book" , "Science"];


    let books_catagary = page.locator(`//ul[@class='top-menu']//a[@href='/books']`);
    await page.goto(books_catagary).click();

    let card_tital =page.locator(`//div[@class="item-box"]/descendant::h2[@class='product-title']//a`); //inside a link and text preset

    tital_of_books_from_database.forEach(element => {
        expect(await card_tital.alltextcontent).toContain(element);
        console.log(element+` is present in `+ card_tital.alltextcontent);
        
        
    });



    await expect(card_tital).havetext();





    

})
