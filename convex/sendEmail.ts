
import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const sendOrderEmail = action({
  args: {
    to: v.string(),
    name: v.string(),
    orderId: v.string(),
    grandTotal: v.number(),
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const resend = new Resend(apiKey);

    try {
      await resend.emails.send({
        from: "Audiophile <onboarding@resend.dev>",
        to: args.to,
        subject: "Your Audiophile Order Confirmation",
        html: `
          <h2>Thank you for your order, ${args.name}!</h2>
          <p>Your order ID is: <strong>${args.orderId}</strong></p>
          <p>We're preparing your items and will notify you once they're on the way.</p>
          <p><strong>Grand Total:</strong> $${args.grandTotal.toLocaleString()}</p>
          <p>Visit our store again soon 🎧</p>
        `,
      });

      return "Email sent successfully";
    } catch (err) {
      console.error("Error sending email:", err);
      throw new Error("Failed to send confirmation email");
    }
  },
});
