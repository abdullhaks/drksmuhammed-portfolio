import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS
    },
});

const generateEnquiryMail = (name, email, message) => {
    const currentDate = new Date().toLocaleDateString();

    return {
        from: process.env.EMAIL_USER,
        to: "aks4u786@gmail.com",
        replyTo: email, // Allows replying directly to the sender's email
        subject: `New Enquiry from ${name}`,
        text: `You have received a new enquiry from ${name}.\n\nEmail: ${email}\nMessage: ${message}\n\nDate: ${currentDate}\n\nPlease respond to this enquiry at your earliest convenience.`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
                <div style="text-align: center;">
                    <h1 style="color: #2196F3;">Dr. Muhammed KS - Enquiry</h1>
                </div>
                <h2 style="color: #333; text-align: center;">New Enquiry Received</h2>
                <p style="font-size: 16px; color: #555; text-align: center;">
                    You have received a new enquiry from <strong style="color: #4CAF50;">${name}</strong>.
                </p>
                <div style="background-color: #fff; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e0e0e0;">
                    <p style="font-size: 14px; color: #555;">
                        <strong>Name:</strong> ${name}
                    </p>
                    <p style="font-size: 14px; color: #555;">
                        <strong>Email:</strong> <a href="mailto:${email}" style="color: #2196F3; text-decoration: none;">${email}</a>
                    </p>
                    <p style="font-size: 14px; color: #555;">
                        <strong>Message:</strong> ${message}
                    </p>
                    <p style="font-size: 14px; color: #888;">
                        <strong>Date:</strong> ${currentDate}
                    </p>
                </div>
                <div style="text-align: center; margin: 20px 0;">
                    <img src="https://img.icons8.com/color/48/000000/stethoscope.png" alt="Stethoscope" style="width: 40px; height: 40px; margin-right: 10px;" />
                    <img src="https://img.icons8.com/color/48/000000/herbal-medicine.png" alt="Herbal Medicine" style="width: 40px; height: 40px;" />
                </div>
                <p style="font-size: 14px; color: #888; text-align: center;">
                    Please respond to this enquiry at your earliest convenience.
                </p>
                <footer style="margin-top: 20px; text-align: center; font-size: 12px; color: #aaa;">
                    &copy; ${new Date().getFullYear()} Dr. Muhammed KS - Homeopathy Specialist. All rights reserved.
                </footer>
            </div>
        `,
    };
};

export async function sendMail(name, email, message) {
    try {
        const mailOptions = generateEnquiryMail(name, email, message);
        const result = await transporter.sendMail(mailOptions);
        return { success: true, message: "Enquiry sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send enquiry. Please try again later." };
    }
}