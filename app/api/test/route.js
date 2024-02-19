import puppeteer from 'puppeteer'

export async function POST(request) {
  const body = await request.json();

  const { ats, link } = req.body;

  try {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = 'https://rojoconsultancy.recruitee.com/o/enterprise-integration-consultant-spain'; // Replace with the URL of the web page
  
    await page.goto(url);
  
    // Wait for the element with the class name "custom-css-style-job-location-country" to be present
    await page.waitForSelector('.custom-css-style-job-location-country');
  
    // Extract the data from the selected elements
    const locationElements = await page.$$('.custom-css-style-job-location-country');

    console.log(locationElements)
    
    // const response = {
    //   error: "",
    //   job: {
    //     id: null,
    //     url: link,
    //     promotion_plan: null,
    //     job_type: "",
    //     title: `Sample job title for ${ats}`, // You can customize this as needed
    //     locations: ["New York, NY"], // You can customize this as needed
    //     seniority: ["Senior"], // You can customize this as needed
    //     content: "", // You can customize this as needed
    //     company: {
    //       handle: null,
    //     },
    //     stats: null,
    //   },
    // };

    // const data = await response.json();
    console.log(data);
  } catch (error) {
    return new Response("Check field and try again.", { status: 400 });
  }
}
