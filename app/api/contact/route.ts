//app/api/contact/route.ts

 
import { NextRequest, NextResponse } from "next/server";
 
// ── App Router ───────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
 
    // Basic server-side validation
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Name, phone and message are required." },
        { status: 400 }
      );
    }
 
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL env var is not set");
      return NextResponse.json(
        { error: "Server misconfiguration." },
        { status: 500 }
      );
    }
 
    // Forward to Google Apps Script
    const gsRes = await fetch(scriptUrl, {
      method : "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // avoids CORS preflight on GAS
      body   : JSON.stringify(body),
    });
 
    // GAS always returns 200 even on script errors — check body
    const text = await gsRes.text();
    let gs: { message?: string; error?: string } = {};
    try { gs = JSON.parse(text); } catch { /* non-JSON from GAS — treat as ok */ }
 
    if (gs.error) {
      console.error("GAS error:", gs.error);
      return NextResponse.json({ error: "Failed to save submission." }, { status: 502 });
    }
 
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
 
// Reject non-POST
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}