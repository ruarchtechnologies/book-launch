import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 }
    );
  }

  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: result.error.issues[0]?.message ?? "Invalid email",
      },
      { status: 400 }
    );
  }

  const { email } = result.data;

  try {
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
    const listId = process.env.EMAIL_PROVIDER_LIST_ID;

    if (apiKey && listId) {
      // Replace this block with your email provider's SDK call.
      // Example (Mailchimp):
      //   await mailchimp.lists.addListMember(listId, {
      //     email_address: email,
      //     status: "subscribed",
      //   });
      //
      // Example (ConvertKit):
      //   await fetch(`https://api.convertkit.com/v3/forms/${listId}/subscribe`, {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ api_key: apiKey, email }),
      //   });
      void email; // remove once provider SDK is wired in
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}
