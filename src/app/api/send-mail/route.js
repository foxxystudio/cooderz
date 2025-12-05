import nodemailer from "nodemailer";

export async function POST(req) {
   try {
      const data = await req.json(); // frontend'den gelen JSON verisi
      const { name, email, message } = data;

      // Nodemailer transporter
      const transporter = nodemailer.createTransport({
         host: "smtp.gmail.com", // örnek Gmail
         port: 465,
         secure: true,
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
         },
      });

      // Mail options
      const mailOptions = {
         from: `"${name}" <${email}>`,
         to: process.env.EMAIL_TO,
         subject: "New contact form message",
         text: message || "Message Empty",
         html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message || "Message Empty"}</p>
             `,
      };

      await transporter.sendMail(mailOptions);

      return new Response(JSON.stringify({ success: true }), { status: 200 });
   } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
   }
}