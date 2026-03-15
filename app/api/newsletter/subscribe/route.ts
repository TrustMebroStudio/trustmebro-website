import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { isValidEmail, normalizeEmail } from "@/lib/validators";

type SubscribeBody = {
  email?: string;
};

export async function POST(request: Request) {
  let body: SubscribeBody;

  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const normalizedEmail = normalizeEmail(body.email ?? "");

  if (!isValidEmail(normalizedEmail)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const supabase = createSupabaseServerClient();

    const { data: existing, error: lookupError } = await supabase
      .from("newsletter_subscribers")
      .select("email")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (lookupError) {
      return NextResponse.json(
        { ok: false, message: "Could not verify existing subscriptions." },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json(
        { ok: false, message: "This email is already subscribed." },
        { status: 409 }
      );
    }

    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: normalizedEmail });

    if (insertError) {
      if (insertError.code === "23505") {
        return NextResponse.json(
          { ok: false, message: "This email is already subscribed." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { ok: false, message: "Failed to save your subscription." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "Thanks! You are now on the list." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Server configuration is incomplete. Check environment variables."
      },
      { status: 500 }
    );
  }
}
