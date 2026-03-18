import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Controlled by .env.local (local) and Vercel environment variables (production)
// NEXT_PUBLIC_COMING_SOON=true  → coming soon page
// NEXT_PUBLIC_COMING_SOON=false → full site
const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

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

  // Inject pathname into request headers so layout.tsx can read it
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  // Allow coming-soon page through as-is
  if (!COMING_SOON || pathname === '/coming-soon') {
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