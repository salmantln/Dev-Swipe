import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

export async function GET() {
  const url = "https://rojoconsultancy.recruitee.com/o/enterprise-integration-consultant-spain";

  try {
    // Fetch the HTML content of the page
    const response = await fetch(url);
    const html = await response.text();

    // Use JSDOM to parse the HTML content
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract information using selectors
    const cityValue = document.querySelector(".custom-css-style-job-location-city")?.textContent.trim() || "";
    const countryValue = document.querySelector(".custom-css-style-job-location-country")?.textContent.trim() || "";
    const jobTitleValue = document.querySelector(".sc-crgk9f-2")?.textContent.trim() || "";
    const contentHTML = document.querySelector(".sc-1v95195-0")?.innerHTML || "";

    // Clean the HTML content if necessary
    const cleanHTML = contentHTML
      .replace(/(\sclass=\")[^\"]*(\")/g, "")
      .replace(/<(\w+)(\s[^>]*)?>/g, "<$1>");

    // Return the extracted information as JSON
    return new Response(JSON.stringify({
      location: `${cityValue}, ${countryValue}`,
      jobTitle: jobTitleValue,
      contentHTML: cleanHTML,
    }), { 
      headers: { 'Content-Type': 'application/json' },
      status: 200 
    });

  } catch (error) {
    console.error(error);
    return new Response("Check field and try again.", { status: 400 });
  }
}
