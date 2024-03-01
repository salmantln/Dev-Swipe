
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
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
    return new Response("Check field and try again.", { status: 400, error });
  }
}
