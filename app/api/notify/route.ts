import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    // Basic validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // Simple email format check
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValidEmail) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Forward to Apps Script
    const scriptRes = await fetch(process.env.APPS_SCRIPT_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim().toLowerCase() }),
    })

    const scriptData = await scriptRes.json()

    if (!scriptData.ok) {
      console.error('[notify] Apps Script error:', scriptData.error)
      return NextResponse.json(
        { ok: false, error: 'Failed to save email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })

  } catch (err) {
    console.error('[notify] Error:', err)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}