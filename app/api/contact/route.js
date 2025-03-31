import sgMail from "@sendgrid/mail";

// Set your API Key
console.log("API Key:", process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Email content
    const msg = {
      to: "way2gsn@gmail.com", // Your email (receiver)
      from: "thenameisvicki@gmail.com", // Must be a verified email in SendGrid
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send email
    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
