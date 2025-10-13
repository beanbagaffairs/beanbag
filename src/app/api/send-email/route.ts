import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, formType } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content based on form type
    const subject = formType === 'contact' 
      ? `New Contact Form Submission from ${name}` 
      : `New Inquiry from ${name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="background-color: #1C2042; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Bean Bag Affairs</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px;">New ${formType === 'contact' ? 'Contact' : 'Inquiry'} Form Submission</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #1C2042; margin-bottom: 20px;">Contact Details</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #1C2042;">Name:</strong>
            <p style="margin: 5px 0; padding: 10px; background-color: white; border-radius: 5px; border-left: 4px solid #1C2042;">${name}</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #1C2042;">Email:</strong>
            <p style="margin: 5px 0; padding: 10px; background-color: white; border-radius: 5px; border-left: 4px solid #1C2042;">${email}</p>
          </div>
          
          ${phone ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #1C2042;">Phone:</strong>
            <p style="margin: 5px 0; padding: 10px; background-color: white; border-radius: 5px; border-left: 4px solid #1C2042;">${phone}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #1C2042;">Message:</strong>
            <p style="margin: 5px 0; padding: 15px; background-color: white; border-radius: 5px; border-left: 4px solid #1C2042; line-height: 1.6;">${message}</p>
          </div>
        </div>
        
        <div style="padding: 15px; background-color: #1C2042; color: white; text-align: center; border-radius: 0 0 10px 10px;">
          <p style="margin: 0; font-size: 12px;">This email was sent from the Bean Bag Affairs website contact form.</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Received on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'beanbagagency@gmail.com',
      subject: subject,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
