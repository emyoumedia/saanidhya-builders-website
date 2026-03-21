import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Controlled by .env.local (local) and Vercel environment variables (production)
// NEXT_PUBLIC_COMING_SOON=true  → coming soon page
// NEXT_PUBLIC_COMING_SOON=false → full site
const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

// ✅ Add secret code (for friend access)
const SECRET = process.env.NEXT_PUBLIC_SECRET_CODE

export function middleware(request: NextRequest) {
  // ✅ Add searchParams (needed to read ?preview=...)
  const { pathname, searchParams } = request.nextUrl

  // ✅ Check if user has valid preview access
  const isAllowed = searchParams.get('preview') === SECRET

  // ✅ Check if cookie already exists (so link not needed every time)
  const hasAccess = request.cookies.get('preview')?.value === 'true'

  // Always allow static files through
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/logo') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // ✅ If user comes with secret link → set cookie
  if (isAllowed) {
    const res = NextResponse.next()
    res.cookies.set('preview', 'true') // store access
    return res
  }

  // Inject pathname into request headers so layout.tsx can read it
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  // ✅ Allow full site if:
  // - Coming soon disabled OR
  // - User already has preview access
  if (!COMING_SOON || hasAccess || pathname === '/coming-soon') {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Rewrite everything else to /coming-soon
  requestHeaders.set('x-pathname', '/coming-soon')
  const url = new URL('/coming-soon', request.url)
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}