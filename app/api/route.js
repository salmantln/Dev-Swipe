
export async function POST(request) {
    const body = await request.json();
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    try {
        const res = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `auth ${API_KEY}`
            },
            body: JSON.stringify({
                email_address: body.email,
                status: 'subscribed',
            }),
        })

        const data = await res.json()
        console.log(data)

        if (!res.ok) {
            // Handle the case where the email already exists
            if (data.title === 'Member Exists') {
                return new Response("Email already subscribed.", {status: 400});
            }
            throw new Error('Failed to subscribe');
        }

        return new Response("Success", {status: 200});
    } catch (error) {
        return new Response("Check field and try again.", {status: 400});
    }
}
