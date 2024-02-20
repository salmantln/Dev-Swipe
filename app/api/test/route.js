// import { NextResponse } from "next/server";
// import puppeteer from "puppeteer";

// export async function GET(req) {
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     const url =
//       "https://rojoconsultancy.recruitee.com/o/enterprise-integration-consultant-spain"; // Replace with the URL of the web page

//     await page.goto(url);

//     // Wait for the element with the class name "custom-css-style-job-location-country" to be present
//     await page.waitForSelector(".custom-css-style-job-location-city");
//     await page.waitForSelector(".custom-css-style-job-location-country");
//     await page.waitForSelector(".sc-crgk9f-2");
//     await page.waitForSelector(".sc-1v95195-0");

//     // Extract the text content of the element
//     const cityElement = await page.$(".custom-css-style-job-location-city");
//     const countryElement = await page.$(
//       ".custom-css-style-job-location-country"
//     );
//     const titleElement = await page.$(".sc-crgk9f-2");
//     const contentElement = await page.$(".sc-1v95195-0");

//     const cityValue = await page.evaluate(
//       (element) => element.textContent.trim(),
//       cityElement
//     );

//     const countryValue = await page.evaluate(
//       (element) => element.textContent.trim(),
//       countryElement
//     );

//     const jobTitleValue = await page.evaluate(
//       (element) => element.textContent.trim(),
//       titleElement
//     );
//     const contentValue = await page.evaluate(
//       (element) => element.textContent.trim(),
//       contentElement
//     );

//     const contentHTML = await page.evaluate((element) => {
//       const cleanHTML = element.innerHTML.replace(
//         /(\sclass=\")[^\"]*(\")/g,
//         ""
//       ); // Remove class attributes
//       return cleanHTML;
//     }, contentElement);

//     const cleanHTML = contentHTML.replace(/<(\w+)(\s[^>]*)?>/g, "<$1>"); // Remove attributes from tags

//     console.log("City:", cityValue);
//     console.log("Country:", countryValue);
//     console.log("title:", jobTitleValue);
//     // console.log("content:", stringWithSingleSpace);
//     console.log("contentHTML:", cleanHTML);

//     await browser.close();

//     return NextResponse.json({
//       location: cityValue + " " + countryValue,
//       jobTitle: jobTitleValue,
//       // content: stringWithSingleSpace,
//       contentHTML: cleanHTML,
//     });
//   } catch (error) {
//     return new Response("Check field and try again.", { status: 400 });
//   }
// }
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(req) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url =
      "https://rojoconsultancy.recruitee.com/o/enterprise-integration-consultant-spain"; // Replace with the URL of the web page

    await page.goto(url);

    const cityValue = await page.evaluate(() => {
      const element = document.querySelector(".custom-css-style-job-location-city");
      return element ? element.textContent.trim() : "";
    });

    const countryValue = await page.evaluate(() => {
      const element = document.querySelector(".custom-css-style-job-location-country");
      return element ? element.textContent.trim() : "";
    });

    const jobTitleValue = await page.evaluate(() => {
      const element = document.querySelector(".sc-crgk9f-2");
      return element ? element.textContent.trim() : "";
    });

    const contentHTML = await page.evaluate(() => {
      const element = document.querySelector(".sc-1v95195-0");
      return element ? element.innerHTML : "";
    });

    const cleanHTML = contentHTML.replace(/(\sclass=\")[^\"]*(\")/g, "").replace(/<(\w+)(\s[^>]*)?>/g, "<$1>"); // Remove class attributes and other attributes from tags

    console.log("City:", cityValue);
    console.log("Country:", countryValue);
    console.log("Title:", jobTitleValue);
    console.log("Content HTML:", cleanHTML);

    await browser.close();

    return NextResponse.json({
      location: cityValue + " " + countryValue,
      jobTitle: jobTitleValue,
      contentHTML: cleanHTML,
    });
  } catch (error) {
    return new Response("Check field and try again.", { status: 400 });
  }
}
